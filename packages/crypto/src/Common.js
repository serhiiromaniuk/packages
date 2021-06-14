const CryptoJS = require('crypto-js');

exports.Random = function(keyType, size) {
    const rnd = CryptoJS.lib.WordArray.random(size);
    if (keyType === 'Hex' || keyType === 'hex') return CryptoJS.enc.Hex.stringify(rnd);
    if (keyType === 'Base64' || keyType === 'base64') return CryptoJS.enc.Base64.stringify(rnd);
    return Error(`Unsupported input data: Data: ${JSON.stringify({'keyType': keyType, 'size': size})}`);
}

console.log(this.Random('a', 12))