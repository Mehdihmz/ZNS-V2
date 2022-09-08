import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { useCrop } from './Crop'
import Cropper from 'react-cropper'
import { useAddContact } from '../../../../../Hook/Contact'
import { Dropdown } from 'react-bootstrap'
import isEmpty from 'lodash/isEmpty'

const CreateContact = (props) => {
    // ==============This Property For Crop And modal Image=================
    const [chaneConteModal, setChaneConteModal] = useState('basic')
    const [hide, setHide] = useState(true)
    const [dropaddphoto, setDropaddphoto] = useState(false)
    const { setCropper, getCropData, onChange, image, cropData } = useCrop()
    const openaddmodal = (e) => {
        onChange(e)
        setChaneConteModal('addpicture')
        setDropaddphoto(false)
    }
    const saveimage = () => {
        getCropData()
        setChaneConteModal('basic')
    }
    return (
        <div className="create-contact-modal-cont">
            {/* ======================Create Contact Modal For Add New Contact To List=================== */}
            <Modal
                {...props}
                centered
                size={`${chaneConteModal == 'addpicture' ? 'md' : 'xl'}`}
                dialogClassName="create-contact-modal"
            >
                <div>
                    {chaneConteModal === 'basic' && (
                        <Basic
                            setHide={setHide}
                            hide={hide}
                            cropData={cropData}
                            profile={cropData}
                            setDropaddphoto={setDropaddphoto}
                            dropaddphoto={dropaddphoto}
                            onChangeImage={openaddmodal}
                            onHide={props.onHide}
                            Additionally={() =>
                                setChaneConteModal('additionaly')
                            }
                            addpicture={() => setChaneConteModal('addpicture')}
                        />
                    )}
                    {chaneConteModal === 'addpicture' && (
                        <AddPhoto
                            onHide={props.onHide}
                            image={image}
                            setCropper={setCropper}
                            cropped={saveimage}
                        />
                    )}
                </div>
            </Modal>
        </div>
    )
}

const AddPhoto = ({ setCropper, cropped, image, onHide }) => {
    return (
        <div>
            {/* ================Add Photo Section(User Profile Pic)=============== */}
            <div className="form-AddPhoto">
                <div className="close-form">
                    <i className="far fa-times" onClick={onHide}></i>
                </div>
                <div className="d-flex justify-content-center title-form">
                    <p>Add photo</p>
                </div>
                <Cropper
                    style={{ width: '100%' }}
                    zoomTo={0.5}
                    initialAspectRatio={1}
                    preview=".img-preview"
                    src={image}
                    viewMode={1}
                    minCropBoxHeight={10}
                    minCropBoxWidth={10}
                    background={false}
                    responsive={true}
                    autoCropArea={1}
                    checkOrientation={false}
                    onInitialized={(instance) => {
                        setCropper(instance)
                    }}
                    guides={true}
                />
                <div className="d-flex justify-content-center svg-form">
                    <div className="svg1">
                        <svg
                            width="24"
                            height="28"
                            viewBox="0 0 24 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13.7675 7.50004L16.0538 9.78504L14.285 11.5538L8.9825 6.25004L14.285 0.946289L16.0538 2.71504L13.7675 5.00004H17C18.6576 5.00004 20.2473 5.65852 21.4194 6.83062C22.5915 8.00272 23.25 9.59244 23.25 11.25V16.25H20.75V11.25C20.75 10.2555 20.3549 9.30165 19.6517 8.59839C18.9484 7.89513 17.9946 7.50004 17 7.50004H13.7675ZM15.75 13.75V26.25C15.75 26.5816 15.6183 26.8995 15.3839 27.1339C15.1495 27.3683 14.8315 27.5 14.5 27.5H2C1.66848 27.5 1.35054 27.3683 1.11612 27.1339C0.881696 26.8995 0.75 26.5816 0.75 26.25V13.75C0.75 13.4185 0.881696 13.1006 1.11612 12.8662C1.35054 12.6317 1.66848 12.5 2 12.5H14.5C14.8315 12.5 15.1495 12.6317 15.3839 12.8662C15.6183 13.1006 15.75 13.4185 15.75 13.75ZM13.25 15H3.25V25H13.25V15Z"
                                fill="#384047"
                            />
                        </svg>
                    </div>
                    <div className="svg2">
                        <svg
                            width="24"
                            height="28"
                            viewBox="0 0 24 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.2325 7.50004L7.94625 9.78504L9.715 11.5538L15.0175 6.25004L9.715 0.946289L7.94625 2.71504L10.2325 5.00004H7C5.3424 5.00004 3.75269 5.65852 2.58058 6.83062C1.40848 8.00272 0.75 9.59244 0.75 11.25V16.25H3.25V11.25C3.25 10.2555 3.64509 9.30165 4.34835 8.59839C5.05161 7.89513 6.00544 7.50004 7 7.50004H10.2325ZM8.25 13.75V26.25C8.25 26.5816 8.3817 26.8995 8.61612 27.1339C8.85054 27.3683 9.16848 27.5 9.5 27.5H22C22.3315 27.5 22.6495 27.3683 22.8839 27.1339C23.1183 26.8995 23.25 26.5816 23.25 26.25V13.75C23.25 13.4185 23.1183 13.1006 22.8839 12.8662C22.6495 12.6317 22.3315 12.5 22 12.5H9.5C9.16848 12.5 8.85054 12.6317 8.61612 12.8662C8.3817 13.1006 8.25 13.4185 8.25 13.75ZM10.75 15H20.75V25H10.75V15Z"
                                fill="#384047"
                            />
                        </svg>
                    </div>
                </div>
                <div className="d-flex justify-content-center form-description">
                    <textarea
                        name=""
                        id=""
                        cols=""
                        rows="3"
                        placeholder="Add description..."
                    ></textarea>
                </div>
                <div className="d-flex justify-content-center form-button">
                    <button onClick={cropped}>Save</button>
                    <button className="out" onClick={onHide}>
                        Close
                    </button>
                </div>
            </div>
            {/* ================Add Photo Section(User Profile Pic)End=============== */}
        </div>
    )
}
// =======================New Contact Section(Buttons&Inputs)======================
const Basic = ({
    Additionally,
    addpicture,
    onHide,
    onChangeImage,
    profile,
    cropData,
    setHide,
    hide,
}) => {
    const { onChange, save, form } = useAddContact()
    const handleDisabled = () => {
        return !Object.values(form).some(Boolean)
    }
    useEffect(() => {
        if (!cropData) return
        onChange({ target: { name: 'photo', value: cropData } })
    }, [cropData])
    return (
        <div className="new-basic-addcontact">
            <div className="row">
                <div className="col-md-8">
                    <div className="text-center mt-4 mb-3">
                        <h3>New contact</h3>
                    </div>
                    <div className="d-flex justify-content-center">
                        {cropData ? (
                            <img
                                style={{ objectFit: 'cover' }}
                                width="120"
                                height="120"
                                className="rounded-circle"
                                src={profile}
                                alt="image"
                            />
                        ) : (
                            <svg
                                width="120"
                                height="120"
                                viewBox="0 0 120 120"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="1"
                                    y="1"
                                    width="117.888"
                                    height="117.888"
                                    rx="10"
                                    fill="#F9F9F9"
                                    stroke="#F9F9F9"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clipRule="evenodd"
                                    d="M59.2082 15.7354C68.8 15.7354 76.5757 22.5391 76.5757 30.9318V41.0628C76.5757 49.4556 68.8 56.2593 59.2082 56.2593C49.6165 56.2593 41.8408 49.4556 41.8408 41.0628V30.9318C41.8408 22.5391 49.6165 15.7354 59.2082 15.7354Z"
                                    fill="#F9F9F9"
                                    stroke="#E7EBEC"
                                    stroke-width="4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clipRule="evenodd"
                                    d="M99.7315 102.571V98.356C99.7315 79.9094 78.3911 67.8367 59.2076 67.8367C40.024 67.8367 18.6836 79.9094 18.6836 98.356V102.571C18.6836 105.769 21.2755 108.361 24.4727 108.361H93.9424C97.1396 108.361 99.7315 105.769 99.7315 102.571Z"
                                    fill="#F9F9F9"
                                    stroke="#E7EBEC"
                                    stroke-width="4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        )}
                        {/* +++++++Import Photo DropDown+++++++ */}
                        <Dropdown className="add-contact-dropdown">
                            <Dropdown.Toggle as="button">
                                <div className="blue-circle">
                                    <i className="fas fa-plus"></i>
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as="button">
                                    <svg
                                        className="me-2"
                                        width="18"
                                        height="16"
                                        viewBox="0 0 18 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.7666 2.33317L12.2916 3.99984H15.6666V13.9998H2.33329V3.99984H5.70829L7.23329 2.33317H10.7666V2.33317ZM11.5 0.666504H6.49996L4.97496 2.33317H2.33329C1.41663 2.33317 0.666626 3.08317 0.666626 3.99984V13.9998C0.666626 14.9165 1.41663 15.6665 2.33329 15.6665H15.6666C16.5833 15.6665 17.3333 14.9165 17.3333 13.9998V3.99984C17.3333 3.08317 16.5833 2.33317 15.6666 2.33317H13.025L11.5 0.666504ZM8.99996 6.49984C10.375 6.49984 11.5 7.62484 11.5 8.99984C11.5 10.3748 10.375 11.4998 8.99996 11.4998C7.62496 11.4998 6.49996 10.3748 6.49996 8.99984C6.49996 7.62484 7.62496 6.49984 8.99996 6.49984ZM8.99996 4.83317C6.69996 4.83317 4.83329 6.69984 4.83329 8.99984C4.83329 11.2998 6.69996 13.1665 8.99996 13.1665C11.3 13.1665 13.1666 11.2998 13.1666 8.99984C13.1666 6.69984 11.3 4.83317 8.99996 4.83317Z"
                                            fill="#F8F8F8"
                                        />
                                    </svg>
                                    Take a picture
                                </Dropdown.Item>
                                <Dropdown.Item as="button">
                                    <svg
                                        className="me-2"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17.8444 5.55566H2.15553C1.87852 5.55566 1.61287 5.6657 1.41699 5.86157C1.22112 6.05745 1.11108 6.3231 1.11108 6.60011V16.7334C1.11108 17.0104 1.22112 17.2761 1.41699 17.472C1.61287 17.6678 1.87852 17.7779 2.15553 17.7779H17.8444C18.1214 17.7779 18.3871 17.6678 18.583 17.472C18.7788 17.2761 18.8889 17.0104 18.8889 16.7334V6.60011C18.8889 6.3231 18.7788 6.05745 18.583 5.86157C18.3871 5.6657 18.1214 5.55566 17.8444 5.55566ZM17.7778 16.6668H2.2222V6.66677H17.7778V16.6668Z"
                                            fill="#F9F9F9"
                                        />
                                        <path
                                            d="M4.75554 10.8055C5.08517 10.8055 5.4074 10.7078 5.68149 10.5246C5.95557 10.3415 6.16919 10.0812 6.29534 9.77664C6.42148 9.4721 6.45449 9.13699 6.39018 8.81369C6.32587 8.49038 6.16713 8.19341 5.93405 7.96032C5.70096 7.72724 5.40399 7.5685 5.08069 7.50419C4.75738 7.43988 4.42227 7.47289 4.11773 7.59904C3.81319 7.72518 3.55289 7.9388 3.36975 8.21289C3.18662 8.48697 3.08887 8.8092 3.08887 9.13884C3.08887 9.58086 3.26446 10.0048 3.57702 10.3173C3.88958 10.6299 4.31351 10.8055 4.75554 10.8055ZM4.75554 8.24995C4.93222 8.24553 5.10621 8.29388 5.25528 8.38883C5.40435 8.48378 5.52174 8.62101 5.59243 8.78299C5.66313 8.94498 5.68394 9.12436 5.65219 9.29822C5.62044 9.47209 5.53758 9.63254 5.4142 9.75909C5.29082 9.88564 5.13251 9.97253 4.95951 10.0087C4.7865 10.0448 4.60665 10.0285 4.44293 9.96197C4.2792 9.8954 4.13905 9.78153 4.04036 9.63491C3.94166 9.48829 3.88892 9.31558 3.88887 9.13884C3.8888 8.90689 3.97939 8.6841 4.14131 8.51802C4.30324 8.35195 4.52366 8.25575 4.75554 8.24995Z"
                                            fill="#F9F9F9"
                                        />
                                        <path
                                            d="M4.38882 15.5558L7.72215 12.2225L9.48882 13.9891L7.92215 15.5558H9.03326L13.1777 11.4114L16.6666 14.8725V13.7614L13.4444 10.5558C13.3705 10.4825 13.2707 10.4414 13.1666 10.4414C13.0625 10.4414 12.9627 10.4825 12.8888 10.5558L10.0222 13.4225L7.98326 11.3891C7.90938 11.3159 7.80954 11.2747 7.70548 11.2747C7.60143 11.2747 7.50159 11.3159 7.42771 11.3891L3.28882 15.5558H4.38882Z"
                                            fill="#F9F9F9"
                                        />
                                        <path
                                            d="M16.7445 1.66688C16.7445 1.51954 16.6859 1.37823 16.5817 1.27405C16.4776 1.16986 16.3363 1.11133 16.1889 1.11133H3.96669C3.81935 1.11133 3.67804 1.16986 3.57385 1.27405C3.46966 1.37823 3.41113 1.51954 3.41113 1.66688V2.22244H16.7445V1.66688Z"
                                            fill="#F9F9F9"
                                        />
                                        <path
                                            d="M17.8445 3.88905C17.8445 3.74171 17.786 3.6004 17.6818 3.49621C17.5776 3.39203 17.4363 3.3335 17.2889 3.3335H2.8445C2.69715 3.3335 2.55585 3.39203 2.45166 3.49621C2.34747 3.6004 2.28894 3.74171 2.28894 3.88905V4.44461H17.8445V3.88905Z"
                                            fill="#F9F9F9"
                                        />
                                    </svg>
                                    <input
                                        style={{
                                            opacity: 0,
                                            position: 'absolute',
                                            width: '100%',
                                        }}
                                        type="file"
                                        accept=".png, .jpg, .jpeg"
                                        onChange={onChangeImage}
                                    />
                                    Open gallery
                                </Dropdown.Item>
                                <Dropdown.Item as="button">
                                    <svg
                                        className="me-2"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.9025 6.62993H7.96335V9.50576H11.9567C11.585 11.3333 10.0292 12.3833 7.96335 12.3833C7.38529 12.3842 6.81273 12.2711 6.2785 12.0503C5.74426 11.8295 5.25887 11.5055 4.85017 11.0967C4.44146 10.6879 4.11747 10.2024 3.89679 9.66817C3.67611 9.1339 3.56308 8.56131 3.56418 7.98326C3.56319 7.40528 3.6763 6.83278 3.89703 6.2986C4.11776 5.76443 4.44176 5.27907 4.85046 4.87038C5.25916 4.46168 5.74451 4.13768 6.27869 3.91695C6.81287 3.69622 7.38536 3.58311 7.96335 3.58409C9.01251 3.58409 9.96085 3.95659 10.705 4.56576L12.8717 2.39993C11.5517 1.24909 9.85918 0.539094 7.96335 0.539094C6.98485 0.536234 6.01545 0.726852 5.11089 1.09999C4.20633 1.47312 3.38446 2.0214 2.69256 2.71331C2.00065 3.40521 1.45237 4.22707 1.07924 5.13163C0.706103 6.0362 0.515485 7.0056 0.518345 7.98409C0.515374 8.96262 0.705917 9.93207 1.07901 10.8367C1.45211 11.7413 2.00039 12.5632 2.69231 13.2551C3.38424 13.9471 4.20615 14.4953 5.11076 14.8684C6.01537 15.2415 6.98482 15.4321 7.96335 15.4291C11.6858 15.4291 15.0708 12.7216 15.0708 7.98409C15.0708 7.54409 15.0033 7.06993 14.9025 6.62993Z"
                                            fill="#F9F9F9"
                                        />
                                    </svg>
                                    Open Google Photo
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        {/* +++++++Import Photo DropDown End+++++++ */}
                    </div>
                    {/* ===========The Forms Of New Contact Section =========== */}
                    <div className="form-content">
                        <div className="input">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.33657 15.5C1.33616 15.5 1.33565 15.5 1.33502 15.5C1.33115 15.4998 1.32316 15.4995 1.31167 15.4987C1.2885 15.497 1.25214 15.4935 1.2072 15.486C1.11495 15.4706 0.999583 15.4408 0.890273 15.3861C0.782922 15.3324 0.69078 15.2598 0.624358 15.1601C0.560024 15.0636 0.5 14.9125 0.5 14.6667C0.5 14.1284 0.783605 12.9235 1.85355 11.8536C2.90885 10.7983 4.77211 9.83333 8 9.83333C11.2279 9.83333 13.0912 10.7983 14.1464 11.8536C15.2164 12.9235 15.5 14.1284 15.5 14.6667C15.5 14.9125 15.44 15.0636 15.3756 15.1601C15.3092 15.2598 15.2171 15.3324 15.1097 15.3861C15.0004 15.4408 14.8851 15.4706 14.7928 15.486C14.7479 15.4935 14.7115 15.497 14.6883 15.4987C14.6768 15.4995 14.6689 15.4998 14.665 15.5C14.6644 15.5 14.6638 15.5 14.6634 15.5H1.33657ZM11.5 4C11.5 4.92826 11.1313 5.8185 10.4749 6.47487C9.8185 7.13125 8.92826 7.5 8 7.5C7.07174 7.5 6.1815 7.13125 5.52513 6.47487C4.86875 5.8185 4.5 4.92826 4.5 4C4.5 3.07174 4.86875 2.1815 5.52513 1.52513C6.1815 0.868749 7.07174 0.5 8 0.5C8.92826 0.5 9.8185 0.868749 10.4749 1.52513C11.1313 2.1815 11.5 3.07174 11.5 4Z"
                                    stroke="#B3B8BC"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="First name"
                                value={form.first_name}
                                onChange={onChange}
                                name="first_name"
                            />
                        </div>
                        <div className="input">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.33657 15.5C1.33616 15.5 1.33565 15.5 1.33502 15.5C1.33115 15.4998 1.32316 15.4995 1.31167 15.4987C1.2885 15.497 1.25214 15.4935 1.2072 15.486C1.11495 15.4706 0.999583 15.4408 0.890273 15.3861C0.782922 15.3324 0.69078 15.2598 0.624358 15.1601C0.560024 15.0636 0.5 14.9125 0.5 14.6667C0.5 14.1284 0.783605 12.9235 1.85355 11.8536C2.90885 10.7983 4.77211 9.83333 8 9.83333C11.2279 9.83333 13.0912 10.7983 14.1464 11.8536C15.2164 12.9235 15.5 14.1284 15.5 14.6667C15.5 14.9125 15.44 15.0636 15.3756 15.1601C15.3092 15.2598 15.2171 15.3324 15.1097 15.3861C15.0004 15.4408 14.8851 15.4706 14.7928 15.486C14.7479 15.4935 14.7115 15.497 14.6883 15.4987C14.6768 15.4995 14.6689 15.4998 14.665 15.5C14.6644 15.5 14.6638 15.5 14.6634 15.5H1.33657ZM11.5 4C11.5 4.92826 11.1313 5.8185 10.4749 6.47487C9.8185 7.13125 8.92826 7.5 8 7.5C7.07174 7.5 6.1815 7.13125 5.52513 6.47487C4.86875 5.8185 4.5 4.92826 4.5 4C4.5 3.07174 4.86875 2.1815 5.52513 1.52513C6.1815 0.868749 7.07174 0.5 8 0.5C8.92826 0.5 9.8185 0.868749 10.4749 1.52513C11.1313 2.1815 11.5 3.07174 11.5 4Z"
                                    stroke="#B3B8BC"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="Last name"
                                value={form.last_name}
                                onChange={onChange}
                                name="last_name"
                            />
                        </div>
                        <div className="input">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3.65447 1.32854C3.59544 1.2526 3.52092 1.19009 3.43587 1.14516C3.35082 1.10024 3.25719 1.07392 3.16119 1.06796C3.06519 1.062 2.96902 1.07654 2.87907 1.1106C2.78912 1.14467 2.70744 1.19748 2.63947 1.26554L1.60547 2.30054C1.12247 2.78454 0.944471 3.46954 1.15547 4.07054C2.03121 6.55813 3.45577 8.81664 5.32347 10.6785C7.1854 12.5462 9.4439 13.9708 11.9315 14.8465C12.5325 15.0575 13.2175 14.8795 13.7015 14.3965L14.7355 13.3625C14.8035 13.2946 14.8563 13.2129 14.8904 13.1229C14.9245 13.033 14.939 12.9368 14.933 12.8408C14.9271 12.7448 14.9008 12.6512 14.8558 12.5661C14.8109 12.4811 14.7484 12.4066 14.6725 12.3475L12.3655 10.5535C12.2843 10.4906 12.19 10.4469 12.0895 10.4258C11.989 10.4047 11.8851 10.4066 11.7855 10.4315L9.59547 10.9785C9.30315 11.0516 8.99689 11.0477 8.70652 10.9673C8.41614 10.8869 8.15154 10.7326 7.93847 10.5195L5.48247 8.06254C5.26924 7.84958 5.1148 7.58502 5.03418 7.29464C4.95357 7.00426 4.94954 6.69795 5.02247 6.40554L5.57047 4.21554C5.59538 4.11594 5.59734 4.01197 5.57621 3.9115C5.55507 3.81103 5.51139 3.71667 5.44847 3.63554L3.65447 1.32854ZM1.88447 0.511539C2.05947 0.336489 2.2697 0.200669 2.50121 0.1131C2.73272 0.0255312 2.98021 -0.0117841 3.22725 0.00363218C3.47429 0.0190485 3.71522 0.0868436 3.93405 0.202516C4.15288 0.318188 4.3446 0.479091 4.49647 0.674539L6.29047 2.98054C6.61947 3.40354 6.73547 3.95454 6.60547 4.47454L6.05847 6.66454C6.03019 6.77797 6.03172 6.89678 6.06291 7.00945C6.0941 7.12211 6.15388 7.2248 6.23647 7.30754L8.69347 9.76454C8.77631 9.84729 8.87916 9.90718 8.99202 9.93838C9.10488 9.96957 9.22389 9.971 9.33747 9.94254L11.5265 9.39554C11.7831 9.33138 12.0509 9.32639 12.3098 9.38097C12.5686 9.43554 12.8116 9.54823 13.0205 9.71054L15.3265 11.5045C16.1555 12.1495 16.2315 13.3745 15.4895 14.1155L14.4555 15.1495C13.7155 15.8895 12.6095 16.2145 11.5785 15.8515C8.93965 14.9231 6.54374 13.4124 4.56847 11.4315C2.58776 9.45655 1.07708 7.061 0.148471 4.42254C-0.213529 3.39254 0.111471 2.28554 0.851471 1.54554L1.88547 0.511539H1.88447Z"
                                    fill="#B3B8BC"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="+ 375 29 123 45 67"
                                value={form.phone}
                                onChange={onChange}
                                name="phone"
                            />
                        </div>
                        <div className="input">
                            <svg
                                width="16"
                                height="14"
                                viewBox="0 0 16 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clipRule="evenodd"
                                    d="M1 3.02405V11.1193C1 12.237 1.90609 13.1431 3.02381 13.1431H13.1429C14.2606 13.1431 15.1667 12.237 15.1667 11.1193V3.02405C15.1667 1.90633 14.2606 1.00024 13.1429 1.00024H3.02381C1.90609 1.00024 1 1.90633 1 3.02405Z"
                                    stroke="#B3B8BC"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M3.02368 4.03601L8.08321 7.07173L13.1427 4.03601"
                                    stroke="#B3B8BC"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <input
                                type="email"
                                placeholder="E-mail"
                                name="email"
                                value={form.email}
                                onChange={onChange}
                            />
                        </div>
                        <div className="input">
                            <svg
                                width="18"
                                height="16"
                                viewBox="0 0 18 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.5911 0.999878H15.0635C16.1331 0.999878 17.0002 1.86699 17.0002 2.93663V6.40902C17.0002 6.66585 16.8982 6.91216 16.7166 7.09376L10.1385 13.6718C9.38215 14.4282 8.15587 14.4282 7.39952 13.6718L4.32825 10.6006C3.5719 9.84421 3.5719 8.61793 4.32825 7.86158L10.9063 1.28351C11.0879 1.1019 11.3342 0.999878 11.5911 0.999878V0.999878Z"
                                    stroke="#B3B8BC"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M7.31625 13.5888L5.36694 14.5634C4.41023 15.0418 3.24688 14.654 2.76852 13.6973C2.73823 13.6367 2.71114 13.5746 2.68737 13.5112L1.12359 9.34112C0.78683 8.44309 1.15806 7.43383 1.99646 6.96806L9.253 2.93665"
                                    stroke="#B3B8BC"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M15.5473 3.42077C15.5473 2.88595 15.1138 2.45239 14.579 2.45239C14.0442 2.45239 13.6106 2.88595 13.6106 3.42077C13.6106 3.95559 14.0442 4.38914 14.579 4.38914C15.1138 4.38914 15.5473 3.95559 15.5473 3.42077Z"
                                    fill="#B3B8BC"
                                />
                            </svg>
                            <input
                                name="tag"
                                value={form.tag}
                                onChange={onChange}
                                type="text"
                                placeholder="Enter your tags"
                                onKeyDown={(e) => {
                                    if (e.key !== 'Enter') return
                                    const tags = form.tags || []
                                    const value = [...tags, e.target.value]
                                    onChange({
                                        target: {
                                            name: 'tags',
                                            value,
                                        },
                                    })
                                }}
                            />{' '}
                            <div className="d-flex flex-wrap align-items-center gap-1 mt-1">
                                {form.tags?.map((e, i) => (
                                    <span
                                        key={e + i}
                                        className="bg-secondary py-1 px-2 rounded text-white"
                                    >
                                        {e}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="input">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clipRule="evenodd"
                                    d="M14.5 1.61974C15.3284 2.44816 15.3284 3.79131 14.5 4.61974L5 14.1197L1 15.1197L2 11.1761L11.5038 1.62356C12.2868 0.836562 13.5351 0.794123 14.3682 1.49849L14.5 1.61974Z"
                                    stroke="#B3B8BC"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M13 4.11975L14 5.11975"
                                    stroke="#B3B8BC"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="Notes"
                                name="note-title"
                                value={form.NoteTitle}
                                onChange={onChange}
                            />
                        </div>
                        {!hide && (
                            <>
                                <div className="input">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clipRule="evenodd"
                                            d="M14.5 1.61974C15.3284 2.44816 15.3284 3.79131 14.5 4.61974L5 14.1197L1 15.1197L2 11.1761L11.5038 1.62356C12.2868 0.836562 13.5351 0.794123 14.3682 1.49849L14.5 1.61974Z"
                                            stroke="#B3B8BC"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M13 4.11975L14 5.11975"
                                            stroke="#B3B8BC"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder="Contact status"
                                    />
                                </div>
                                <div className="input">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clipRule="evenodd"
                                            d="M14.5 1.61974C15.3284 2.44816 15.3284 3.79131 14.5 4.61974L5 14.1197L1 15.1197L2 11.1761L11.5038 1.62356C12.2868 0.836562 13.5351 0.794123 14.3682 1.49849L14.5 1.61974Z"
                                            stroke="#B3B8BC"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M13 4.11975L14 5.11975"
                                            stroke="#B3B8BC"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder="Date of birth"
                                    />
                                </div>
                                <div className="input">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clipRule="evenodd"
                                            d="M14.5 1.61974C15.3284 2.44816 15.3284 3.79131 14.5 4.61974L5 14.1197L1 15.1197L2 11.1761L11.5038 1.62356C12.2868 0.836562 13.5351 0.794123 14.3682 1.49849L14.5 1.61974Z"
                                            stroke="#B3B8BC"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M13 4.11975L14 5.11975"
                                            stroke="#B3B8BC"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <input type="text" placeholder="Website" />
                                </div>
                                <div className="input">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clipRule="evenodd"
                                            d="M14.5 1.61974C15.3284 2.44816 15.3284 3.79131 14.5 4.61974L5 14.1197L1 15.1197L2 11.1761L11.5038 1.62356C12.2868 0.836562 13.5351 0.794123 14.3682 1.49849L14.5 1.61974Z"
                                            stroke="#B3B8BC"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M13 4.11975L14 5.11975"
                                            stroke="#B3B8BC"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <input type="text" placeholder="Work" />
                                </div>
                                <div className="input">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clipRule="evenodd"
                                            d="M14.5 1.61974C15.3284 2.44816 15.3284 3.79131 14.5 4.61974L5 14.1197L1 15.1197L2 11.1761L11.5038 1.62356C12.2868 0.836562 13.5351 0.794123 14.3682 1.49849L14.5 1.61974Z"
                                            stroke="#B3B8BC"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M13 4.11975L14 5.11975"
                                            stroke="#B3B8BC"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder="Education"
                                    />
                                </div>
                                <div className="d-flex justify-content-center gap-5 mt-4">
                                    <svg
                                        width="36"
                                        height="36"
                                        viewBox="0 0 36 36"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clipRule="evenodd"
                                            d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z"
                                            fill="#55ACEE"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clipRule="evenodd"
                                            d="M17.4609 14.8306L17.4987 15.4535L16.8691 15.3772C14.5776 15.0848 12.5757 14.0934 10.876 12.4282L10.045 11.602L9.83098 12.2122C9.37772 13.5722 9.6673 15.0086 10.6116 15.9746C11.1152 16.5085 11.0019 16.5847 10.1332 16.267C9.83098 16.1653 9.56658 16.089 9.5414 16.1272C9.45326 16.2161 9.75544 17.3728 9.99466 17.8304C10.322 18.466 10.9893 19.0888 11.7196 19.4574L12.3365 19.7498L11.6063 19.7625C10.9012 19.7625 10.876 19.7752 10.9515 20.0421C11.2034 20.8684 12.198 21.7454 13.306 22.1268L14.0866 22.3937L13.4067 22.8004C12.3995 23.3852 11.216 23.7156 10.0324 23.7411C9.46585 23.7538 9 23.8046 9 23.8427C9 23.9699 10.5361 24.6817 11.43 24.9613C14.1118 25.7875 17.2972 25.4316 19.6894 24.0207C21.3892 23.0165 23.0889 21.0209 23.8821 19.0888C24.3102 18.0592 24.7383 16.178 24.7383 15.2755C24.7383 14.6908 24.7761 14.6145 25.4811 13.9154C25.8966 13.5087 26.2869 13.0638 26.3625 12.9367C26.4884 12.6952 26.4758 12.6952 25.8337 12.9113C24.7635 13.2926 24.6124 13.2417 25.1412 12.6697C25.5315 12.263 25.9973 11.5258 25.9973 11.3097C25.9973 11.2715 25.8085 11.3351 25.5944 11.4495C25.3678 11.5766 24.8642 11.7673 24.4865 11.8817L23.8066 12.0978L23.1896 11.6783C22.8497 11.4495 22.3712 11.1953 22.1194 11.119C21.4773 10.941 20.4952 10.9665 19.9161 11.1698C18.3422 11.7418 17.3476 13.2163 17.4609 14.8306Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <svg
                                        width="36"
                                        height="36"
                                        viewBox="0 0 36 36"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clipRule="evenodd"
                                            d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z"
                                            fill="#3B5998"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clipRule="evenodd"
                                            d="M19.8769 28.5836V18.7907H22.5802L22.9385 15.416H19.8769L19.8815 13.7269C19.8815 12.8467 19.9652 12.3751 21.2294 12.3751H22.9193V9H20.2157C16.9681 9 15.8251 10.6371 15.8251 13.3902V15.4163H13.8008V18.791H15.8251V28.5836H19.8769Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <svg
                                        width="36"
                                        height="36"
                                        viewBox="0 0 36 36"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clipRule="evenodd"
                                            d="M0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18Z"
                                            fill="#0077B5"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clipRule="evenodd"
                                            d="M12.9914 11.117C12.9649 9.9153 12.1056 9 10.7101 9C9.31465 9 8.40234 9.9153 8.40234 11.117C8.40234 12.2939 9.28769 13.2355 10.6572 13.2355H10.6832C12.1056 13.2355 12.9914 12.2939 12.9914 11.117ZM12.7237 14.9062H8.64453V27.1625H12.7237V14.9062ZM22.739 14.6206C25.4232 14.6206 27.4356 16.3727 27.4356 20.1373L27.4355 27.1647H23.3564V20.6076C23.3564 18.9606 22.7662 17.8367 21.2895 17.8367C20.1625 17.8367 19.4913 18.5943 19.1964 19.3261C19.0886 19.5884 19.0621 19.9538 19.0621 20.3201V27.165H14.9824C14.9824 27.165 15.0362 16.0588 14.9824 14.9087H19.0621V16.6447C19.6035 15.8102 20.5732 14.6206 22.739 14.6206Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <div className="box-border">
                                    <span className="blue">Drop </span>
                                    <span>yor file here </span>
                                    <span className="blue">or brouse</span>
                                    <p>
                                        All file types supported. Max file size
                                        20MB
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                    {/* ===========The Forms Of New Contact Section =========== */}
                    {/* ============More And Hide Button============= */}
                    <div
                        className="text-center more-cont"
                        onClick={() => setHide(!hide)}
                    >
                        {hide ? (
                            <>
                                <i className="fas fa-angle-down"></i>
                                <span>More</span>
                            </>
                        ) : (
                            <>
                                <i className="fas fa-angle-up"></i>
                                <span>Hide</span>
                            </>
                        )}
                    </div>
                    {/* ============More And Hide Button End============= */}

                    <div className="text-center">
                        <button
                            disabled={handleDisabled()}
                            className="new-save-btn"
                            onClick={save}
                        >
                            Save and close
                        </button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="right-pic">
                        <div
                            className="close mt-1"
                            style={{
                                zIndex: '10000',
                                position: 'absolute',
                                marginLeft: '21rem',
                            }}
                            onClick={onHide}
                        >
                            <i className="far fa-times fs-4"></i>
                        </div>
                        {/* ==========Right Picture(New Contact Section)========== */}
                        <img src="./images/contactnew.png" alt="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateContact
