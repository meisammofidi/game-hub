import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params : {
        key: '0f2a8679acfc4698a769fcdaf47c0c82'
    }
})