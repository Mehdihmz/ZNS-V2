import firebase from 'firebase/compat/app'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import baseAxios from 'axios'

const BASEURL = 'https://znsv2.herokuapp.com/'
const axios = baseAxios.create({
    baseURL: BASEURL,
    'Content-type': 'application/json',
})
export const useRequest = () => {
    const Request = async ({ url, form, method = 'POST' }) => {
        return await fetch(BASEURL + url, {
            headers: {
                'Content-type': 'application/json',
            },
            method: method,
            body: JSON.stringify(form),
        })
            .then((resposen) => {
                if (resposen.status === 200) {
                    return resposen.json().then((res) => {
                        return { result: res, status: true }
                    })
                } else {
                    return resposen.json().then((result) => {
                        return { result, status: false }
                    })
                }
            })
            .catch((error) => {
                return { status: false, result: { message: 'error network!' } }
            })
    }
    return { Request }
}

export const useRequestToFirebase = () => {
    const firebaseApp = firebase.initializeApp({
        apiKey: 'AIzaSyDQCdkre4IxyM3QJFuy_3Cnx9wAW2jVHQA',
        authDomain: 'zns-auth.firebaseapp.com',
        projectId: 'zns-auth',
        storageBucket: 'zns-auth.appspot.com',
        messagingSenderId: '593786821510',
        appId: '1:593786821510:web:328810e88fe4d37a37ea07',
        measurementId: 'G-CHGRN0N9DT',
    })

    const auth = getAuth(firebaseApp)
    return { auth }
}
export function useAxios() {
    const user = localStorage.getItem('user')
    const userData = JSON.parse(user) ?? {}
    const hasToken = Boolean(userData.access)
    const token = hasToken ? `Bearer ${userData.access}` : null
    return { axios, token }
}
