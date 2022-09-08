import React, { useState } from 'react'
import 'cropperjs/dist/cropper.css'

// ===================Cropper Image feature==================

const defaultSrc =
    'https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg'

export const useCrop = () => {
    const [image, setImage] = useState()
    const [cropData, setCropData] = useState()
    const [cropper, setCropper] = useState()
    const onChange = (e) => {
        e.preventDefault()
        let files
        if (e.dataTransfer) {
            files = e.dataTransfer.files
        } else if (e.target) {
            files = e.target.files
        }
        const reader = new FileReader()
        reader.onload = () => {
            setImage(reader.result)
        }
        reader.readAsDataURL(files[0])
    }

    const getCropData = () => {
        if (!!cropper) {
            setCropData(cropper.getCroppedCanvas().toDataURL())
        }
    }

    return { getCropData, onChange, image, setCropper, cropData }
}
