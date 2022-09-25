export {};
import axios from "axios";

export const starDustAPI = axios.create({
    baseURL: 'https://star-dust.shop',
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    //   "ACCESS-TOKEN": getToken() ?? ''
    },
});

export async function login(nickname, phoneNumer) {
    return await starDustAPI.post('/login', { nickname, phoneNumer })
}