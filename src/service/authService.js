import { axiosCommon } from './axiosService';
import { jwtDecode } from 'jwt-decode';

const setToken = (token) => {
    localStorage.setItem('token', token);
};

const getToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
        return token;
    }
    return null;
};

const login = async (userData) => {
    return axiosCommon.post('/security/login', userData);
};

const getUserEmail = () => {
    const token = getToken();
    if (token) {
        const payLoad = jwtDecode(token);
        return payLoad?.email;
    }
    return null;
};

const checkRole = (data) => {
    var check = false;
    const token = getToken();
    if (token) {
        const payLoad = jwtDecode(token);
        Object.keys(payLoad?.roles).map((i) => {
            if (payLoad?.roles[i].authority === data) {
                return (check = true);
            }
            return null;
        });
    }
    return check;
};

const isLoggedIn = () => {
    const token = getToken();
    if (token) {
        const payLoad = jwtDecode(token);
        const isLogin = Date.now() < payLoad.exp * 1000;
        return isLogin;
    }
};

const logOut = () => {
    localStorage.removeItem('token');
};

export const authService = { logOut, getToken, setToken, login, getUserEmail, checkRole, isLoggedIn };
