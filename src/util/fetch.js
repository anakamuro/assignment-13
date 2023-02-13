import Axios from "axios";
import store from '../app/store'

const state = store.getState().user?.user


const instance = Axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    headers: {
        authorization: `Bearer ${state?.token}`,
        "Content-Type": "application/json"
    }
});


export async function post(path, data) {
    try {
        const response = await instance.post(path, JSON.stringify(data))
        return response;
    } catch (error) {
        throw error
    }


}

export async function put(path, data) {
    try {
        const response = await instance.put(path, JSON.stringify(data))
        return response;
    } catch (error) {
        throw error
    }


}

export async function get(path) {
    try {
        const response = await instance.get(path)
        console.log(response)
        return JSON.parse(response)
    } catch (error) {
        throw error
    }

}



