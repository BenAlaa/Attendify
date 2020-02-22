import http from './httpService';


export async function getAttendences() {
    let attendences = await http.get('data.json')
        .then((res) => res.data.data)
        .catch((err) => console.log('something wromg happen while getting attendences data:',err));

    return attendences;
}