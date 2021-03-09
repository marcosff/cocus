const axios = require('axios')

const http = {}
http.get = async (param, data = null) => {
    try {
        const url = "https://api.github.com/"+param
        const response = await axios.get(url, data);
        return(response.data);
      } catch (error) {
        console.error('error');
        return({status: error.response.status, statusText: error.response.statusText})
      }
    
}

module.exports = http