const CryptoJS = require('crypto-js');

/**
 * @param text Message to encrypt
 * @param key Secret encryption key
 * @param jsonify Json
 * @returns {string} `iv` and `data` from ecnryption
 */
exports.Encrypt = function(text, key, jsonify) {
    const iv = CryptoJS.lib.WordArray.random(16);
    const data = CryptoJS.AES.encrypt(text, key, { iv });
    if (jsonify) return JSON.stringify({
        iv: CryptoJS.enc.Hex.stringify(iv),
        data: CryptoJS.enc.Hex.stringify(data.ciphertext)
    });
    return {
        iv: CryptoJS.enc.Hex.stringify(iv),
        data: CryptoJS.enc.Hex.stringify(data.ciphertext)
    }
}

exports.Decrypt = function (iv, data, key, jsonify) {
    const decrypted = CryptoJS.AES.decrypt(data, key, {iv});
    if (jsonify) return JSON.stringify({
        data: decrypted.toString(CryptoJS.enc.Utf8)
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}


key = 'asd'
a = this.Encrypt('a1', key);

console.log(a)

console.log(this.Decrypt(a.iv, a.data, key))