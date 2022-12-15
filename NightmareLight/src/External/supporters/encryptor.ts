const secret = String(process.env.SECRET_SALT)
var crypto = require('crypto');
var salt = process.env.SALT

export const encryptor = (password: string) =>{
    let hash = crypto.createHash('md5').update(password + salt).digest('hex');
    return hash
}