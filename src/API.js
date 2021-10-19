import axios from "axios"

// axios.defaults.headers.common['Authorization'] = "CBp_8EgDZ56YRygCnoiPcnLCW--sZOERRVy2PQI26IA";s
export default axios.create({
    baseURL: `https://api.unsplash.com/`,
    headers: {"Authorization": "Client-ID CBp_8EgDZ56YRygCnoiPcnLCW--sZOERRVy2PQI26IA"},
    timeout: 1000
  });