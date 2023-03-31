
import Axios from "axios";
// import store from '../app/store'
import { Tokens } from "./constants";


// const state = store.getState().user?.user
// state.token was not set properly , but token was set in local stroage , so i used that
// token in local storage was. a string, wee needed to convert it to variable/json so i added JSON.parse(<string here>) 
// opposite of JSON.parse() is JSON.stringify(<json>) return a string
// Axios.create is a feature , which basically sets the header of token in every axios call (so we dont define in every call)
const instance = Axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    headers: {
        // authorization: `Bearer ${JSON.parse(localStorage.getItem(Tokens))}`,
        authorization: `Bearer ${localStorage.getItem(Tokens)}`,
        "Content-Type": "application/json"
    }
});

// export const setAuthToken = (token) =>{
//     alert('in setting tokn header')
//     instance.defaults.headers['authorization'] =  `Bearer ${token}`
// }


export async function post(path, data) {
    try {
        //setAuthToken()
        const response = await instance.post(path, data)
        
        console.log('ttttttttt',localStorage.getItem(Tokens))
        // const response = await Axios.post(process.env.REACT_APP_BASEURL+path,data,{headers:{
        //     authorization: 'Bearer 234234',
        // "Content-Type": "application/json"

        // }})
        console.log(response,'resppp')
        return response;
       
    } catch (error) {
        console.log('errrrr',error)
        throw error
    }
}

export async function getAllUser(path, data) {
    try {
        //setAuthToken()
        const response = await instance.post(path, data)
        return response;
       
    } catch (error) {
        throw error
    }


}



export async function put(path, data) {
    try {
        //setAuthToken()
        const response = await instance.put(path, JSON.stringify(data))
        return response;
    } catch (error) {
        throw error
    }
}
/*
export async function delete(path, data) {
    try {
        //setAuthToken()
        const response = await instance.put(path, JSON.stringify(data))
        return response;
    } catch (error) {
        throw error
    }
}*/

export async function get(path) {
    try {
        //setAuthToken()
        const response = await instance.get(path)
        return JSON.parse(response)
        console.log(response)
    } catch (error) {
        throw error
    }

}

export async function loginUser(path) {
    try {
        const response = await instance.get(path)
        console.log(response)
        return JSON.parse(response)
    } catch (error) {
        throw error
    }

}


