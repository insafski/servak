var CryptoJS = require("crypto-js");

var hash = {};

var keySize = 256;
var iterations = 100;

hash.encrypt = (data) => {
    var salt = CryptoJS.lib.WordArray.random(128 / 8);

    var key = CryptoJS.PBKDF2(process.env.HASH_SECRET, salt, {
        keySize: keySize / 32,
        iterations: iterations,
    });

    var iv = CryptoJS.lib.WordArray.random(128 / 8);

    var encrypted = CryptoJS.AES.encrypt(data, key, {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC,
    });

    var transitmessage = salt.toString() + iv.toString() + encrypted.toString();
    return transitmessage;
};

hash.descrypt = (data) => {
    var salt = CryptoJS.enc.Hex.parse(data.substr(0, 32));
    var iv = CryptoJS.enc.Hex.parse(data.substr(32, 32));
    var encrypted = data.substring(64);

    var key = CryptoJS.PBKDF2(process.env.HASH_SECRET, salt, {
        keySize: keySize / 32,
        iterations: iterations,
    });

    var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC,
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
};

module.exports = hash;
