//微信支付
function _onBridgeReady(payData, successCallback, failCallback) {
  window.WeixinJSBridge.invoke(
    'getBrandWCPayRequest', {
      appId: payData.appId,
      timeStamp: payData.timeStamp,
      nonceStr: payData.nonceStr,
      package: payData.package,
      signType: payData.signType,
      paySign: payData.paySign
    },
    function(respData) {
      if (respData.err_msg === 'get_brand_wcpay_request:ok') {
        successCallback();
      } else if (respData.err_msg === 'get_brand_wcpay_request:cancel') {
        failCallback();
      }
    }
  );
}

//微信支付
export function weChatPay(payData, successCallback, failCallback) {
  if (typeof window.WeixinJSBridge == 'undefined') {
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', _onBridgeReady, false);
    } else if (document.attachEvent) {
      document.attachEvent('WeixinJSBridgeReady', _onBridgeReady);
      document.attachEvent('onWeixinJSBridgeReady', _onBridgeReady);
    }
  } else {
    _onBridgeReady(payData, successCallback, failCallback);
  }
}
