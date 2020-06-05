import axios from 'axios'

const ANGGOTA_NAME = 'anggota'
const ANGGOTA_API_URL = 'http://localhost:8080'
const ANGGOTA_NAME_API_URL = `${ANGGOTA_API_URL}/anggota/${ANGGOTA_NAME}`

class AnggotaDataService {
    retrievalAnggota(name){
        return axios.get(`${ANGGOTA_NAME_API_URL}`);
    }
}

export default new AnggotaDataService()