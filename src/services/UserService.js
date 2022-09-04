import MyAxios from "../utils/MyAxios";

export const getAllUsers = async ({location, username,sort, page, per_page,order})=>{
    const users = await MyAxios.get(`https://api.github.com/search/users?q=${username}+in:login+${username}in:name+location:${location}&sort=${sort}&per_page=${per_page}&page=${page}&order=${order}` );
    const data = await users.data;
    return data;
}
