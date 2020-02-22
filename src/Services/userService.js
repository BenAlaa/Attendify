import http from './httpService';

export async function getUser(username){
    const user = await http.get('data.json')
        .then((res) => res.data.user)
        .catch((err) => console.log('something wromg happen while getting data:',err));
    if(!user) return {status: 400, message: "Invalid email or Password..."}
    return {status: 200, message: "Get User Successfully...", data: user};
}