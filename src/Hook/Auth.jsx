import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../Context/UserContext'
import { useRequest } from './Request'
import { useRequestToFirebase } from './Request'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import {
    GoogleAuthProvider,
    signInWithPopup,
    FacebookAuthProvider,
} from 'firebase/auth'
import axios from 'axios'
import defaultContactPhoto from '../img/DefaultContact.png'

export const useSignUp = () => {
    const [form, setform] = useState({ email: '', password: '' })
    const navigate = useNavigate()
    const [novalidation, setError] = useState({ email: false, password: false })
    const [loading, setLoading] = useState(false)
    const [btnDisable, setDisable] = useState(false)
    const { Request } = useRequest()
    const { saveUser } = useUserContext()
    useEffect(() => {
        if (form.email != '' || form.password != '') {
            checkForm()
        }
    }, [form])

    const checkForm = () => {
        if (verifyEmail(form.email)) {
            if (!novalidation.password) {
                setDisable(false)
            }
            window.document.getElementsByName('email')[0].style.border =
                '1px solid #E7ECEC'
        } else {
            setError({ ...novalidation, email: true })
            setDisable(true)
            window.document.getElementsByName('email')[0].style.border =
                '1px solid #C94043'
        }
        if (checkPassword(form.password)) {
            if (!novalidation.email) {
                setDisable(false)
            }
            window.document.getElementsByName('password')[0].style.border =
                '1px solid #E7ECEC'
        } else {
            setError({ ...novalidation, password: true })
            setDisable(true)
            window.document.getElementsByName('password')[0].style.border =
                '1px solid #C94043'
        }
    }

    const onChange = ({ target }) => {
        const { name, value } = target
        setform({ ...form, [name]: value })
    }

    const submitForm = () => {
        setLoading(true)
        Request({ url: 'register/', form }).then((resposen) => {
            setLoading(false)
            if (resposen.status) {
                navigate('/profile')
                saveUser(resposen.result)
            }
        })
    }

    return { submitForm, onChange, loading, btnDisable }
}

export const useLogin = () => {
    const navigate = useNavigate()
    const { Request } = useRequest()
    const { saveUser } = useUserContext()
    const [form, setform] = useState({ email: '', password: '' })
    const [loading, setLoading] = useState(false)
    const onChange = ({ target }) => {
        const { name, value } = target
        setform({ ...form, [name]: value })
    }

    const submitForm = () => {
        setLoading(true)
        Request({ url: 'auth/jwt/create/', form }).then((resposen) => {
            setLoading(false)
            if (resposen.status) {
                navigate('/profile')
                saveUser(resposen.result)
            }
        })
    }
    return { submitForm, onChange, loading }
}

export const useResetPassword = (setpage) => {
    const { Request } = useRequest()
    const [form, setform] = useState({ email: '' })
    const [loading, setLoading] = useState(false)
    const onChange = ({ target }) => {
        const { name, value } = target
        setform({ ...form, [name]: value })
    }
    const submitForm = () => {
        setLoading(true)
        Request({ url: 'auth/users/reset_password/', form }).then(
            (resposen) => {
                setLoading(false)
                if (resposen.status) {
                    setpage('successSendLink')
                }
            }
        )
    }
    return { submitForm, onChange, loading }
}

export const useNewPassword = (setpage) => {
    const { params } = useUserContext()
    const { token, uid } = params
    const [form, setform] = useState({
        uid,
        token,
        new_password: '',
        re_new_password: '',
    })
    const { Request } = useRequest()
    const [loading, setLoading] = useState(false)
    const onChange = ({ target }) => {
        const { name, value } = target
        setform({ ...form, [name]: value })
    }
    const submitForm = () => {
        setLoading(true)
        Request({ url: 'auth/users/reset_password_confirm', form }).then(
            (resposen) => {
                setLoading(false)
                if (resposen.status) {
                    setpage('successSetPassword')
                }
            }
        )
    }
    return { onChange, submitForm, loading }
}

export const checkPassword = (password) => {
    let rgx =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#^(_)+=$!%*?&])[A-Za-z\d@#^(_)+=$!%*?&]{8,50}$/g
    return rgx.test(password)
}
export const verifyEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

export const useLoginWithGoogle = () => {
    const navigate = useNavigate()
    const {
        saveAccessToken,
        access,
        saveRefreshToken,
        saveStartAccess,
        saveUserName,
        removeUserName,
        savePhotoURL,
        removePhotoURL,
        saveLoadingCheck,
        removeLoadingCheck,
        saveProcessSession,
        saveCheckLogin,
    } = useUserContext()
    const [reqLoading, setReqLoading] = useState(false)

    useEffect(() => {
        const initialization = async () => {
            await window.gapi.load('auth2', function () {
                window.gapi.auth2.init({
                    client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                    plugin_name:
                        'App Name that you used in google developer console API',
                    scope: 'https://www.googleapis.com/auth/contacts',
                })
            })
        }
        initialization()
    }, [])

    const signInWithGoogle = async () => {
        const GoogleAuth = await window.gapi.auth2.getAuthInstance()
        saveLoadingCheck(true)
        GoogleAuth.signIn({
            scope: 'profile email',
        })
            .then((user) => {
                console.log(user)
                if (GoogleAuth.isSignedIn.get()) {
                    saveCheckLogin(GoogleAuth.isSignedIn.get())
                }
                setReqLoading(GoogleAuth.isSignedIn.get())
                const body = {
                    token: user.getAuthResponse().id_token,
                }
                savePhotoURL(user.getBasicProfile().getImageUrl())
                saveUserName(user.getBasicProfile().getName())
                saveStartAccess(user.getAuthResponse().access_token)
                // https://mysterious-everglades-24551.herokuapp.com/api/token/
                axios
                    .post(
                        'https://mysterious-everglades-24551.herokuapp.com/gtoken/',
                        body
                    )
                    .then((data) => {
                        navigate('/profile')
                        removeLoadingCheck()
                        console.log(data.data.data.token)
                        saveAccessToken(data.data.data.token.access)
                        saveRefreshToken(data.data.data.token.refresh)
                        const returnAccess = {
                            token: data.data.data.token.access,
                        }
                        // https://mysterious-everglades-24551.herokuapp.com/api/token/verify/
                        axios
                            .post(
                                'https://mysterious-everglades-24551.herokuapp.com/api/token/verify/',
                                returnAccess
                            )
                            .then((result) => {
                                // window.location.href = '/profile'
                                saveProcessSession(result.status)
                                console.log(result.status)
                            })
                    })
            })
            .catch((error) => {
                if (error.error === 'popup_closed_by_user') {
                    removeLoadingCheck()
                    window.location.reload()
                    localStorage.clear()
                    return
                }
            })
    }

    const signInLogOut = () => {
        const GoogleAuth = window.gapi.auth2.getAuthInstance()
        GoogleAuth.signOut().then(() => {
            window.location.href = '/'
            removeUserName()
            removePhotoURL()
        })
    }

    return { signInWithGoogle, signInLogOut, reqLoading }
}

export const useGetGoogleContacts = () => {
    const [contactInfo, setContactInfo] = useState([])
    const [serverContacts, setServerContacts] = useState([])
    const [contactsForLayout, setContactsForLayout] = useState()
    const API_KEY = 'AIzaSyDQCdkre4IxyM3QJFuy_3Cnx9wAW2jVHQA'
    let startAccess = localStorage.getItem('start_access')
    const { access } = useUserContext()

    useEffect(() => {
        const getData = async () => {
            try {
                const getContactsData = await axios.get(
                    `https://people.googleapis.com/v1/people/me/connections?pageSize=1000&personFields=names,emailAddresses,phoneNumbers,photos,birthdays,locations,organizations&key=${API_KEY}`,
                    {
                        headers: {
                            Authorization: `Bearer ${startAccess}`,
                            Accept: 'application/json',
                        },
                    }
                )
                const contacts = await getContactsData.data.connections.map(
                    (connection) => {
                        let obj = {}
                        if (connection.phoneNumbers) {
                            obj.phone = connection.phoneNumbers[0].value
                        } else {
                            obj.phone = 'Phone number not specified by contact'
                        }
                        if (connection.names) {
                            obj.uname = connection.names[0].displayName
                        } else {
                            obj.uname = 'Name not specified by contact'
                        }
                        if (connection.photos) {
                            obj.photo = connection.photos[0].url
                        }
                        if (connection.birthdays) {
                            obj.birthday = connection.birthdays[0].text
                        } else {
                            obj.birthday =
                                'Date of Birth not specified by contact'
                        }
                        if (connection.emailAddresses) {
                            obj.email = connection.emailAddresses[0].value
                        } else {
                            obj.email = ''
                        }
                        if (connection.locations) {
                            obj.contactLocation = connection.locations[0].value
                        } else {
                            obj.contactLocation =
                                'Location not specified by contact'
                        }
                        if (connection.organizations) {
                            obj.work = connection.organizations[0].name
                        } else {
                            obj.work = 'Work not specified by contact'
                        }
                        if (connection.organizations) {
                            obj.jobTitle = connection.organizations[0].title
                        } else {
                            obj.jobTitle = 'Job title not specified by contact'
                        }
                        return obj
                    }
                )
                const contactsServer =
                    await getContactsData.data.connections.map((connection) => {
                        let obj = {}
                        if (connection.names) {
                            connection.names[0].givenName === undefined ? obj.first_name = "" : 
                            obj.first_name = connection.names[0].givenName
                        }
                        if (connection.names) {
                            connection.names[0].familyName === undefined ? obj.last_name = "" : obj.last_name = connection.names[0].familyName
                        }
                        if (connection.phoneNumbers) {
                            obj.phone = connection.phoneNumbers[0].value
                                .replace(/[^a-zа-яё0-9\s]/gi, ' ')
                                .replace(/\s/g, '')
                        } else {
                            obj.phone = '-'
                        }
                        if (connection.emailAddresses) {
                            obj.email = connection.emailAddresses[0].value
                        } else {
                            obj.email = ''
                        }
                        if (connection.photos) {
                            obj.photo = connection.photos[0].url
                        }
                        if (connection.birthdays) {
                            obj.event_birthday =
                                connection.birthdays[0].text.replace(/\s/g, '')
                        } else {
                            obj.event_birthday = '-'
                        }
                        if (connection.locations) {
                            obj.location = connection.locations[0].value
                        } else {
                            obj.location = '-'
                        }
                        if (connection.organizations) {
                            obj.work = connection.organizations[0].name
                        } else {
                            obj.work = ''
                        }
                        if (connection.organizations) {
                            obj.profession = connection.organizations[0].title
                        } else {
                            obj.profession = ''
                        }
                        return obj
                    })
                // console.log(contactsServer)
                setContactInfo(contacts)
                setServerContacts(contactsServer)
            } catch (error) {
                if (error.response && error.response.data) {
                    return error.response.data
                }
            }
        }
        getData()
    }, [startAccess, access])

    useEffect(() => {
        const getContacts = async () => {
            await axios
                .get(
                    'https://mysterious-everglades-24551.herokuapp.com/newcontactgoogle/',
                    {
                        headers: {
                            Authorization: `Bearer ${access}`,
                            Accept: 'application/json',
                        },
                    }
                )
                .then((response) => {
                    setContactsForLayout(response.data)
                    // console.log(response)
                })
        }
        getContacts()
    }, [])

    const getContacts = () => {
        axios
            .post(
                'https://mysterious-everglades-24551.herokuapp.com/newcontactgoogle/',
                serverContacts,
                {
                    headers: {
                        Authorization: `Bearer ${access}`,
                        Accept: 'application/json',
                    },
                }
            )
            .then((data) => console.log(data))
        setTimeout(() => {
            window.location.reload()
        }, 3000)
        // window.location.reload()
        // axios
        //     .get('https://mysterious-everglades-24551.herokuapp.com/newcontactgoogle/',
        //         {
        //         headers: {
        //             Authorization: `Bearer ${access}`,
        //             Accept: 'application/json',
        //         },
        //     })
        //     .then((response) => {
        //         setTimeout(() => {
        //             setContactsForLayout(response.data.results)
        //         }, 0)
        //         console.log(contactsForLayout)
        //     })
        // console.log(body)

        // if (contactInfo !== []) {
        //     console.log('Contact info:', contactInfo)
        // }
    }
    return { getContacts, contactInfo, contactsForLayout }
}

export const useSignInWithFacebook = () => {
    const { auth } = useRequestToFirebase()
    const { saveAccessToken } = useUserContext()
    const { saveRefreshToken } = useUserContext()
    const navigate = useNavigate()

    const signInWithFacebook = async () => {
        const provider = new FacebookAuthProvider()
        await signInWithPopup(auth, provider).then((result) => {
            const accessToken = result.user.accessToken
            const body = {
                token: accessToken,
            }
            axios
                .post(
                    'https://mysterious-everglades-24551.herokuapp.com/gettokenfb/',
                    body
                )
                .then((data) => {
                    navigate('/profile')
                    console.log(data.data.data)
                    saveAccessToken(data.data.data.token.access)
                    saveRefreshToken(data.data.data.token.refresh)
                })
        })
    }

    return { signInWithFacebook }
}

// https://mysterious-everglades-24551.herokuapp.com/gettokenfb/
