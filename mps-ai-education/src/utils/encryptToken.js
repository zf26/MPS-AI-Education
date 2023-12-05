import CryptoJS from 'crypto-js'
export const encryptToken=(text,key)=>{
      return CryptoJS.AES.encrypt(text, key).toString();
}
export const decryptToken=(ciphertext, key)=> {
      var bytes  = CryptoJS.AES.decrypt(ciphertext, key);
      return bytes.toString(CryptoJS.enc.Utf8);
}