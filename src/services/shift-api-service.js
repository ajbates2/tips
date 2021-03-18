import config from '../config'
import TokenService from './token-service'

const ShiftApiService = {
    getShifts() {
        return fetch(`${config.API_ENDPOINT}/shifts/all`, {
            mode: 'cors',
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

    getPaychecks() {
        return fetch(`${config.API_ENDPOINT}/paychecks/all`, {
            mode: 'cors',
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
            mode: 'cors',
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
            mode: 'cors',
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

    postPaycheck(user_id, check_total, date_received, job_id) {
        return fetch(`${config.API_ENDPOINT}/paychecks`, {
            mode: 'cors',
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                user_id: user_id,
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

    postJob(user_id, job_name) {
        return fetch(`${config.API_ENDPOINT}/jobs`, {
            mode: 'cors',
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                user_id: user_id,
                job_name
            })
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    postRole(user_id, role_name, hourly_rate, job_id) {
        return fetch(`${config.API_ENDPOINT}/roles`, {
            mode: 'cors',
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                user_id: user_id,
                role_name,
                hourly_rate,
                job_id
            })
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    deleteShiftRequest(shiftId) {
        fetch(`${config.API_ENDPOINT}/shifts/${shiftId}`, {
            mode: 'cors',
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
    },

    deleteCheckRequest(checkId) {
        fetch(`${config.API_ENDPOINT}/paychecks/${checkId}`, {
            mode: 'cors',
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