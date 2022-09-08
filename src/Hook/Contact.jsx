import { useEffect, useState } from 'react'
import { useAxios } from './Request'

export const useAddContact = () => {
    const { axios } = useAxios()
    const user = localStorage.getItem('user')
    const token = JSON.parse(user) ?? {}
    const [isLoading, setIsLoading] = useState(false)
    const [form, setForm] = useState({})
    const onChange = ({ target: { name, value } }) => {
        const isTags = name === 'tags'
        setForm((p) => ({
            ...p,
            [name]: value,
            ...(isTags && { tag: '' }),
        }))
    }
    const save = () => {
        setIsLoading(true)
        const data = { ...form }
        data.tags = JSON.stringify(data.tags)
        axios
            .post('contact/', data, {
                headers: { Authorization: `Bearer ${token.access}` },
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return {
        onChange,
        save,
        form,
        isLoading,
    }
}
