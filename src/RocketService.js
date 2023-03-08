import axios from 'axios'

const ROCKET_API_BASE_URL = "http://localhost:2018/"

class RocketService{

    saveRocket(rocket){
        return axios.post(ROCKET_API_BASE_URL + "add", rocket);
    }
    
    // getRocket(id){
        
    // }
    
    getRockets(){
        return axios.get(ROCKET_API_BASE_URL + "show");
    }
    
    deleteRocket(id){
        return axios.delete(ROCKET_API_BASE_URL+"delete/"+id);
    }
    
    updateRocket(id,rocket){
        return axios.put(ROCKET_API_BASE_URL+"update/"+id,rocket);
    }
    
    getRocketById(id){
        return axios.get(ROCKET_API_BASE_URL + "show/" + id);
    }
    
}

export default new RocketService();