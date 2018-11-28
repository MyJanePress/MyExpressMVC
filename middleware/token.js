import { decode, sign } from "jsonwebtoken";


export const tokenCheck = (req, res, next) => {
    const url = req.url;
    const method = req.method;
    // const { token } = req.headers || req.body;
    if (url !== '/' && url !== '/api/login' && url !== '/api/signup') {
        if (method === 'GET') {
            const { token } = req.headers;
            req.app.set('email', tokenDecode(token));
            next();
        } else if (method === 'PUT') {
            const { token } = req.body;
            req.app.set('email', tokenDecode(token));
            next();
        } else {
            next();
        }
    } else {
        next();
    }
}
export const tokenSign = email => {
    return sign({
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: email,
    }, 'secret');
}
const tokenDecode = token => {
    return decode(token).data;
}