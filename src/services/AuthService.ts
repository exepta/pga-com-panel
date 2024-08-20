import axios from "axios";
import {AUTH_REST_POINT} from "../REST.ts";
import {createUser, User} from "../entities/User.ts";

export const login_user = async (data: string, password: string) => {
    let user: User = {username: "-", email: "-", role: ["-"]};
    await axios.post(`${AUTH_REST_POINT}/login`, {
        username: data,
        password: password,
    }, {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json",
        }
    }).then((response) => {
        if (response.status === 200) {
            localStorage.setItem("token", response.data.token);
        }
        const data = response.data;
        user = createUser(data.username, data.email, data.role);
    }).catch((error) => {
        console.log(error);
        if(error.response.status === 401 || error.response.status === 403) {
            localStorage.removeItem("token");
        }
    });

    return user;
}

export const register = async (data: string, email: string, password: string) => {
    let state: boolean = false;
    await axios.post(`${AUTH_REST_POINT}/register`, {
        username: data,
        email: email,
        password: password,
    }, {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json",
        }
    }).then(async (response) => {
        if (response.status === 200) {
            state = true;
        }
    }).catch((error) => {
        console.log(error);
    });

    return state;
}

export const sessionCheck = async () => {
    let user: User = {username: "-", email: "-", role: ["-"]};
    const accessToken = localStorage.getItem("token");
    
    await axios.get(`${AUTH_REST_POINT}/session_check`, {
        headers: {
            "Authorization": `${accessToken}`,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json",
        }
    }).then(async (response) => {
        if (response.status === 200) {
            const data = response.data;
            user = createUser(data.username, data.email, data.role);
        }
    }).catch((error) => {
        console.log(error);
    });

    return user;
}