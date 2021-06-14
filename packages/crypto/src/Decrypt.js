const CryptoJS = require('crypto-js');

exports.Decrypt = function (iv, data, key, jsonify) {
    const decrypted = CryptoJS.AES.decrypt(data, key, {iv});
    if (jsonify) return JSON.stringify({
        data: decrypted.toString(CryptoJS.enc.Utf8)
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}


const a = {
    iv: '08830050a89f955755b155c6a7be8527',
    data: '17868f6153deddddab6aaa46edc8b2fd'
  }

console.log(this.Decrypt(a.iv, a.data, 'asd'))