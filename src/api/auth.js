import axiosInstance  from "./api";

export const login = {
    caseLogin: (data) => {
        return axiosInstance.post("/api/login", data)
    } 
} 