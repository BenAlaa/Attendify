import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import {getUser} from './userService';

const tokenKey = "token";

async function login(email, password) {
    const user = await getUser();
    const { data: User } = user;
    console.log('user: ', User);
    if (!User) return {status: 400, message: "Invalid email or Password..."};

    const isValidPassword = User.password === password;
    if (!isValidPassword) return {status: 400, message: "Invalid email or Password..."};

    const isValidEmail = User.email === email;
    if (!isValidEmail) return {status: 400, message: "Invalid email or Password..."};

    const token = generateAuthToken(User);
    if (!token) return {status: 400, message: "Invalid email or Password..."};

    localStorage.setItem(tokenKey, token);
    return {status: 200, message: "User Logged Successfully..."};
}
function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

function logout() {
    localStorage.removeItem(tokenKey);
}

function generateAuthToken(user) {
    const token = jwt.sign({ 
        id: user.id, 
        name: user.name, 
        email: user.email
    }, "jwtPrivateKey");
    return token;
}

function getCurrentUser() {
    try {
        const jwt =JSON.stringify(localStorage.getItem(tokenKey));
        return jwtDecode(jwt);
    } catch (error) {
        return null;
    }
}

function getJwt() {
    return localStorage.getItem(tokenKey);
}

export{
    login,
    loginWithJwt,
    logout,
    generateAuthToken,
    getCurrentUser,
    getJwt
}
