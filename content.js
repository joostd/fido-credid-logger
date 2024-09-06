(function() {
  const originalCredentialsGet    = navigator.credentials.get;

  navigator.credentials.get = function(options) {
    console.log(`allowedCredentials for ${options.publicKey.rpId}:`);
    console.log(JSON.stringify(options.publicKey.allowCredentials, replacer, "\t"));
    return originalCredentialsGet.apply(this, arguments);
  };

  // base64url-encode arrayBuffer 
  function encodeAB(value) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(value))) ;
  }

  function replacer(key, value) {
    const abKeys = ["challenge", "id"]; // ArrayBuffer keys
    if (abKeys.includes(key)) {
      return encodeAB(value);
    }
    return value;
  }

  console.log('%cWARNING: intercepting webauthn API calls - only use for debugging purposes', "color: red");

})();
