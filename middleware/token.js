import { decode, sign } from "jsonwebtoken";

/**
 *  
 * @param {callback} next middleware function in chain. pass req, res to the objects
 * @see  https://handyman.dulare.com/passing-variables-through-express-middleware/
 * to pass arguments between middleware and express server, we use req.app.set()
 * and req.app.get().
 * @todo to reduce complexity, consider req.headers || req.body
 * @todo tokenCheck() : logic is not complete
 */
export const tokenCheck = (req, res, next) => {
    const { token } = req.headers || req.body;

    if (token !== undefined) {
        req.app.set('email', decode(token).data);
        next();
    } else {
        next();
    }
    // console.log(token);
    // if (url !== '/' && url !== '/api/login' && url !== '/api/signup') {
    //     if (method === 'GET') {
    //         const { token } = req.headers;
    //         req.app.set('email', tokenDecode(token));
    //         next();
    //     } else if (method === 'PUT') {
    //         const { token } = req.body;
    //         req.app.set('email', tokenDecode(token));
    //         next();
    //     } else {
    //         next();
    //     }
    // } else {
    //     next();
    // }
}
export const tokenSign = email => {
    return sign({
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: email,
    }, 'secret');
}
const tokenDecode = token => {
    return ;
}