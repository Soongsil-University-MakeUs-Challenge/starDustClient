import axios from "axios";

// export const getToken = () => localStorage.getItem('access_token') ?? null

export const statDustAPI = axios.create({
    baseURL: 'https://star-dust.shop',
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "X-ACCESS-TOKEN": "eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWQiOjE4LCJpYXQiOjE2NjQyMDMwNDUsImV4cCI6MTY2NDgwNzg0NX0.ydZ7EOtz1_MdMpmYLTJNVuLmGyQ3VXkoOaaobtrEXzU"
    },
});

export async function getDusts(university) {
  return await statDustAPI.get(`/map/${university}`)
}

export async function sendDustLocation(latitude, longitude) {
  return await statDustAPI.post('/dust/location', { latitude, longitude })
}

export async function postcatchedDust(dustNum) {
  return await statDustAPI.post(`/catch/dust`,{dustNum})
}