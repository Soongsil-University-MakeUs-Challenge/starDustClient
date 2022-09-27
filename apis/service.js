import axios from "axios";

export function getToken() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("jwt");
  }
  return "";
}

export const starDustAPI = axios.create({
  baseURL: "https://star-dust.shop",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-ACCESS-TOKEN": getToken(),
  },
});

export async function getDusts(university) {
  return await starDustAPI.get(`/map/${university}`);
}

export async function sendDustLocation(latitude, longitude) {
  return await starDustAPI.post("/dust/location", { latitude, longitude });
}

export async function postcatchedDust(dustNum) {
  return await starDustAPI.post(`/catch/dust`, { dustNum });
}

export async function postuserLogin(nickname, phoneNum, univCode) {
  return await starDustAPI.post("/users/login", {
    nickname: nickname,
    phoneNum: phoneNum,
    univCode: univCode,
  });
}

export async function startTimer() {
  return await starDustAPI.post(`/users/timer`);
}

export async function getRanking() {
  return await starDustAPI.get(`/ranking/SSU`);
}
