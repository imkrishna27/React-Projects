import axios from 'axios';
const KEY='AIzaSyAn7h-opF2cfoNuFEIbTi2LoOqmn2LDWLA';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:25,
        key:KEY,
        
    }
});