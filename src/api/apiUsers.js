import api from "./api";

const getUsers = () => {
    return api.get("users/").than((res)=>res.data.users)
}

const createUser = () => {
    return api
    .post("/users")
    .than((res)=>res.data)
}

const deleteUser=()=>{
    return api.delete(`user/${id}/`)
}
