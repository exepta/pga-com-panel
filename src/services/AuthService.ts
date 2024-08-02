import axios from "axios";
import {AUTH_REST_POINT} from "../REST.ts";

export const login = async (email: string, password: string) => {
    let result :any = undefined;
    
    await axios.post(AUTH_REST_POINT + '/login', {
            email: email, 
            password: password
        }, {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json",
        }
    }).then((response: { data: { data: any; }; }) => {
        result = response.data.data;
        if(result === undefined) {
            return result;
        }
        localStorage.setItem("accessToken", result.accessToken);
        localStorage.setItem("refreshToken", result.refreshToken);
    }).catch((error: { response: { status: number; }; }) => {
        if(error.response && error.response.status === 403) {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
        }
    });

    return result;
}