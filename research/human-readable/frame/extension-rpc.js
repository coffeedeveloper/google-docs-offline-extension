/**
 * 来源 $ab。只处理一次扩展 RPC，不包含完整启动装配、认证和 origin 信任决策。
 * targetOrigin 必须由宿主使用已校验的扩展 ID 构造；不可替换为通配符。
 */
export function sendExtensionRequest(
  request,
  businessPort,
  { createChannel, flow, wire, targetWindow, targetOrigin, logger },
) {
  const replyChannel = createChannel();
  const reply = flow
    .create((resolve) => {
      const transfer = [replyChannel.port2];
      if (businessPort) transfer.push(businessPort);
      targetWindow.postMessage(wire.encode(request), targetOrigin, transfer);
      replyChannel.port1.onmessage = resolve;
    })
    .then((event) => {
      const response = wire.decodeResponse(event.data);
      wire.setRequestType(response, wire.getRequestType(request));
      if (wire.hasError(response)) {
        logger.error(Error("Error data from extension response."), {
          reason: wire.getErrorReason(response),
          requestType: wire.getRequestType(response),
        });
      }
      // 源码是“记录错误并返回响应”，不是看到错误字段就 reject。
      return response;
    });
  return flow.observeSettlement(reply, () => replyChannel.port1.close());
}
