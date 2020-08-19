import config from '../config'

const ShiftApiService = {
    getShifts(id) {
        return fetch(`${config.API_ENDPOINT}/shifts/${id}`, {
            headers: {

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