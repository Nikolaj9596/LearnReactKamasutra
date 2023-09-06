import axios from "axios";

const request = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "f1b8d8c4-2e5f-4f9b-9c2b-1b2c2d3e4e5d",
  },
});

export const usersAPI = {
  getUsersAPI: (currentPage, pageSize) => {
    return request
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data);
  },

  follow: (userId) => {
    return request.post(`follow/${userId}`);
  },

  unfollow: (userId) => {
    return request.delete(`unfollow/${userId}`);
  },
};

export const profileAPI = {
  getProfile: (userId) => {
    return request.get(`profile/${userId}`);
  },

  getStatus: (userId) => {
    return request.get(`profile/status/${userId}`);
  },

  updateStatus: (status) => {
    return request.put(`profile/status/`, {status})
  }
};

export const authAPI = {
  me: () => {
    return request.get(`auth/me`);
  },
};
