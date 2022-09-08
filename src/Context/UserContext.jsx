import React, { createContext, useContext, useEffect, useState } from 'react'
const Context = createContext()
const UserContext = ({ children }) => {
    let userData = localStorage.getItem('user')
    let accessToken = localStorage.getItem('access_token')
    let refreshToken = localStorage.getItem('refresh_token')
    let startAccess = localStorage.getItem('start_access')
    let userName = localStorage.getItem('user_name')
    let userPhotoURL = localStorage.getItem('photo_url')
    let loadingCheck = localStorage.getItem('loading')
    let saveSession = localStorage.getItem('session')
    let isLogin = localStorage.getItem('isLogin')

    userData = JSON.parse(userData) || null
    accessToken = JSON.parse(accessToken) || null
    refreshToken = JSON.parse(refreshToken) || null
    startAccess = JSON.parse(startAccess) || null
    userName = JSON.parse(userName) || null
    userPhotoURL = JSON.parse(userPhotoURL) || null
    loadingCheck = JSON.parse(loadingCheck) || null
    saveSession = JSON.parse(saveSession) || null
    isLogin = JSON.parse(isLogin) || null

    const [userReg, setUserReg] = useState(userData)
    const [access, setAccess] = useState(accessToken)
    const [refresh, setRefresh] = useState(refreshToken)
    const [startAcc, setStartAcc] = useState(startAccess)
    const [name, setName] = useState(userName)
    const [photoURL, setPhotoURL] = useState(userPhotoURL)
    const [loading, setLoading] = useState(loadingCheck)
    const [session, setSession] = useState(saveSession)
    const [login, setLogin] = useState(isLogin)
    const [params, setParams] = useState()

    useEffect(() => {
        const url_string = window.location.href
        const url = new URL(url_string)
        const uid = url.searchParams.get('uid')
        const token = url.searchParams.get('token')
        if (uid) {
            setParams({ ...params, uid: uid })
        }
        if (token) {
            setParams({ ...params, token: token })
        }
    }, [])

    const saveUser = (data) => {
        setUserReg(data)
        localStorage.setItem('user', JSON.stringify(data))
    }

    const removeUser = () => {
        setUserReg(null)
        localStorage.removeItem('user')
    }

    const saveAccessToken = (access) => {
        setAccess(access)
        localStorage.setItem('access_token', JSON.stringify(access))
    }

    const removeAccessToken = () => {
        setAccess(null)
        localStorage.removeItem('access_token')
    }

    const saveRefreshToken = (refresh) => {
        setRefresh(refresh)
        localStorage.setItem('refresh_token', JSON.stringify(refresh))
    }

    const removeRefreshToken = () => {
        setRefresh(null)
        localStorage.removeItem('refresh_token')
    }

    const saveStartAccess = (first) => {
        setStartAcc(first)
        localStorage.setItem('start_access', JSON.stringify(first))
    }

    const removeStartAccess = () => {
        setStartAcc(null)
        localStorage.removeItem('start_access')
    }

    const saveUserName = (name) => {
        setName(name)
        localStorage.setItem('user_name', JSON.stringify(name))
    }

    const removeUserName = () => {
        setName(null)
        localStorage.removeItem('user_name')
    }

    const savePhotoURL = (url) => {
        setPhotoURL(url)
        localStorage.setItem('photo_url', JSON.stringify(url))
    }

    const removePhotoURL = () => {
        setName(null)
        localStorage.removeItem('photo_url')
    }

    const saveLoadingCheck = (loading) => {
        setLoading(loading)
        localStorage.setItem('loading', JSON.stringify(loading))
    }

    const removeLoadingCheck = () => {
        setName(null)
        localStorage.removeItem('loading')
    }

    const saveProcessSession = (session) => {
        setSession(session)
        localStorage.setItem('session', JSON.stringify(session))
    }

    const removeProcessSession = () => {
        setName(null)
        localStorage.removeItem('session')
    }

    const saveCheckLogin = (isLogin) => {
        setLogin(isLogin)
        localStorage.setItem('is-login', JSON.stringify(isLogin))
    }

    const removeCheckLogin = () => {
        setLogin(null)
        localStorage.removeItem('is-login')
    }

    return (
        <Context.Provider
            value={{
                userReg,
                saveUser,
                removeUser,
                access,
                saveAccessToken,
                removeAccessToken,
                refresh,
                saveRefreshToken,
                removeRefreshToken,
                saveStartAccess,
                removeStartAccess,
                saveUserName,
                removeUserName,
                savePhotoURL,
                removePhotoURL,
                saveLoadingCheck,
                removeLoadingCheck,
                loading,
                saveProcessSession,
                removeProcessSession,
                session,
                saveCheckLogin,
                removeCheckLogin
            }}
        >
            {children}
        </Context.Provider>
    )
}
export const useUserContext = () => useContext(Context)
export default UserContext
