import axios from "axios";

export function getToken() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("jwt");
  }
  return "";
}

export const statDustAPI = axios.create({
  baseURL: "https://star-dust.shop",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-ACCESS-TOKEN": getToken(),
  },
});

export async function getDusts(university) {
  return await statDustAPI.get(`/map/${university}`);
}

export async function sendDustLocation(latitude, longitude) {
  return await statDustAPI.post("/dust/location", { latitude, longitude });
}

export async function postcatchedDust(dustNum) {
  return await statDustAPI.post(`/catch/dust`, { dustNum });
}

export async function postuserLogin(nickname, phoneNum, univCode) {
  return await statDustAPI.post("/users/login", {
    nickname: nickname,
    phoneNum: phoneNum,
    univCode: univCode,
  });
}
