import axios from "axios";

// export const getToken = () => windows.localStorage.getItem("jwt");

export const statDustAPI = axios.create({
  baseURL: "https://star-dust.shop",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-ACCESS-TOKEN": "",
  },
});

export async function getDusts(university) {
  return await statDustAPI.get(`/map/${university}`);
}

export async function sendDustLocation(latitude, longitude) {
  return await statDustAPI.post("/dust/location", { latitude, longitude });
}

export async function postuserLogin(nickname, phoneNum, univCode) {
  return await statDustAPI.post("/users/login", {
    nickname: nickname,
    phoneNum: phoneNum,
    univCode: univCode,
  });
}
