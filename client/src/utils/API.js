import axios from "axios";

export default{

    Emailuser:function(userid){
        return axios.post("/api/emailUser" + userid);
    }
    
}