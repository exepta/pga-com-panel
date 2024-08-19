import axios from "axios";
import {AUTH_REST_POINT} from "../REST.ts";

export const login = async (data: string, password: string) => {
    let state: boolean = false;
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
        state = true;
    }).catch((error) => {
        console.log(error);
        if(error.response.status === 401 || error.response.status === 403) {
            localStorage.removeItem("token");
        }
    });

    return state;
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
    let state: boolean = false;
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
            state = true;
        }
    }).catch((error) => {
        console.log(error);
    });

    return state;
}