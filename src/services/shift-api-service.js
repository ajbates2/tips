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
    },

    getUserData(id) {
        return fetch(`${config.API_ENDPOINT}/users/${id}`, {
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

    postShift(user_id, tips, hours, date_worked, job_id, role_id) {
        return fetch(`${config.API_ENDPOINT}/shifts`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                user_id: user_id,
                tips,
                hours,
                date_worked,
                job_id,
                role_id
            })
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    postPaycheck(id, check_total, date_received, job_id) {
        return fetch(`${config.API_ENDPOINT}/paychecks`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                id: id,
                check_total,
                date_received,
                job_id
            })
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    deleteShiftRequest(shiftId, callback) {
        fetch(`${config.API_ENDPOINT}/shifts/${shiftId}`, {
            method: 'DELETE',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .catch(error => {
                console.error(error)
            })
    }
}

export default ShiftApiService