import axios from "axios";
const BASEURL = "https://randomuser.me/api/?name=";

export default {
    search: function(query) {
        return axios.get(BASEURL + query);
    }
};