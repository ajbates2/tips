import config from '../config'
import TokenService from './token-service'

const ShiftApiService = {
    getShifts(id) {
        return fetch(`${config.API_ENDPOINT}/shifts/${id}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    getPaychecks(id) {
        return fetch(`${config.API_ENDPOINT}/paychecks/${id}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default ShiftApiService