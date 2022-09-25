import axios from "axios";

// export const getToken = () => localStorage.getItem('access_token') ?? null

export const statDustAPI = axios.create({
    baseURL: '',
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    //   "ACCESS-TOKEN": getToken() ?? ''
    },
});

export async function getDusts(university) {
  return await statDustAPI.get(`/map/${university}`)
}

export async function sendDustLocation(latitude, longitude) {
  return await statDustAPI.post('/dust/location', { latitude, longitude })
}