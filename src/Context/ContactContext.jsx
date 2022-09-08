import React, { useEffect, useState } from 'react'
import { useAxios } from '../Hook/Request'
export const ContactContext = React.createContext({})

export default function ContactProvider({ children }) {
    const { axios, token } = useAxios()
    const [contactList, setContactList] = useState([])
    const [activeUser, setActiveUser] = useState({})

    const getRandomImg = (i = 0) => {
        const imgs = [
            '/images/user2.jfif',
            '/images/user1.jfif',
            '/images/user10.png',
            '/images/user6.jfif',
            '/images/user3.jfif',
        ]
        const index = i % imgs.length
        return imgs[index]
    }
    const baseData = {
        tells: ['(+43)555 666 999', '(+43)333 777 999'],
        website: 'Www.ZNS.Com',
        education: {
            title: 'Escuela Tecnica Superior Ingeniería Informática',
            desc: 'Ingeniería de software',
            date: '2010 - 2012',
        },
        birthday: '8/6',
        location: [
            'USA, Florida, Miami',
            'USA, Florida, Miami',
            'Spain, Barcelona',
        ],
    }
    const getContactList = () => {
        const url = '/person/'
        axios.get(url).then((res) => {
            const data = res.data.results.map((e, i) => ({
                img: getRandomImg(i),
                ...baseData,
                ...e,
            }))
            setContactList((p) => [...p, ...data])
            setActiveUser(data[0])
        })
        axios
            .get('/contact/', { headers: { Authentication: token } })
            .then((res) => {
                const data = res.data.results.map((e, i) => ({
                    img: getRandomImg(i),
                    ...baseData,
                    ...e,
                }))
                setContactList((p) => [...p, ...data])
            })
    }

    useEffect(getContactList, [])

    return (
        <ContactContext.Provider
            value={{ activeUser, setActiveUser, contactList }}
        >
            {children}
        </ContactContext.Provider>
    )
}
