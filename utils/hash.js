const CryptoJS = require("crypto-js");

const { HASH_SECRET } = require("../configs/envs");

const hash = {};

const keySize = 256;
const iterations = 100;

hash.encrypt = (data) => {
    const salt = CryptoJS.lib.WordArray.random(128 / 8);

    const key = CryptoJS.PBKDF2(HASH_SECRET, salt, {
        keySize: keySize / 32,
        iterations: iterations,
    });

    const iv = CryptoJS.lib.WordArray.random(128 / 8);

    const encrypted = CryptoJS.AES.encrypt(data, key, {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC,
    });

    const transitmessage =
        salt.toString() + iv.toString() + encrypted.toString();
    return transitmessage;
};

hash.descrypt = (data) => {
    const salt = CryptoJS.enc.Hex.parse(data.substr(0, 32));
    const iv = CryptoJS.enc.Hex.parse(data.substr(32, 32));
    const encrypted = data.substring(64);

    const key = CryptoJS.PBKDF2(HASH_SECRET, salt, {
        keySize: keySize / 32,
        iterations: iterations,
    });

    const decrypted = CryptoJS.AES.decrypt(encrypted, key, {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC,
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
};

module.exports = hash;
