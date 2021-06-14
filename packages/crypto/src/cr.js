import { CryptoJS } from 'crypto-js';

const encrypted =  CryptoJS.enc.Base64.parse('OkEt2koR5ChtmYCZ0dXmHaDB50hEBq69OKfL5qylO5aMA5vQvCmZpfnWm/xKdPJNxabZHXgZCPQE3u0WMQ2WJQ==');

const salt_len = iv_len = 16;

const salt = CryptoJS.lib.WordArray.create(
  encrypted.words.slice(0, salt_len / 4 )
);
const iv = CryptoJS.lib.WordArray.create(
  encrypted.words.slice(0 + salt_len / 4, (salt_len+iv_len) / 4 )
);

const key = CryptoJS.PBKDF2(
  'my password',
  salt,
  { keySize: 256/32, iterations: 10000, hasher: CryptoJS.algo.SHA256}
);

const decrypted = CryptoJS.AES.decrypt(
  {
    ciphertext: CryptoJS.lib.WordArray.create(
      encrypted.words.slice((salt_len + iv_len) / 4)
    )
  },
  key,
  {iv: iv}
);


console.log(decrypted.toString(CryptoJS.enc.Utf8));