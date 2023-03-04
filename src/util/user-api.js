import sendRequest from './send-request'

const BASE_URL = 'http://localhost:8000/api/v1/user'

export function getAll() {
	return sendRequest(BASE_URL)
}

// This function is never actually used in SEI CAFE, it's
// only provided here to remind you to follow RESTful routing, etc.
export function getById(id) {
	return sendRequest(`${BASE_URL}/${id}`)
}

export function signUp(userData) {
	return sendRequest(BASE_URL, 'POST', userData)
}

export function login(credentials) {
	return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}

export function checkToken() {
	return sendRequest(`${BASE_URL}/check-token`)
}

