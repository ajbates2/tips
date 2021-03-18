require('dotenv').config()

export default {
    API_ENDPOINT: process.env.REACT_APP_API_BASE_URL,
    TOKEN_KEY: process.env.REACT_APP_TOKEN_KEY,
}