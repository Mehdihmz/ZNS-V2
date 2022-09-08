import React, { useState } from 'react'
import PannelLayout from '../../../Components/Layout'
import CreateContact from './CreateContact'
const AddContact = () => {
    const [show, setshow] = useState(false)
    return (
        <PannelLayout>
            {/* ==========Add Contact Section=========== */}
            <div className="AddContact">
                <div className="row">
                    <div className="box">
                        <div className="top-continer">
                            <div className="icone">
                                <img
                                    src="/images/addContactIcon.png"
                                    alt="addContactIcon"
                                />
                            </div>
                            <div className="text">
                                <p className="title">
                                    Your contact list is empty
                                </p>
                                <p className="title">Add your first contact</p>
                            </div>
                            <div
                                onClick={() => setshow(true)}
                                className="btn add mt-3 mb-2 "
                            >
                                <svg
                                    width="12"
                                    height="13"
                                    viewBox="0 0 12 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.25 5.75H6.75V1.25C6.75 0.836 6.414 0.5 6 0.5C5.586 0.5 5.25 0.836 5.25 1.25V5.75H0.75C0.336 5.75 0 6.086 0 6.5C0 6.914 0.336 7.25 0.75 7.25H5.25V11.75C5.25 12.1648 5.586 12.5 6 12.5C6.414 12.5 6.75 12.1648 6.75 11.75V7.25H11.25C11.6648 7.25 12 6.914 12 6.5C12 6.086 11.6648 5.75 11.25 5.75Z"
                                        fill="#F9F9F9"
                                    />
                                </svg>
                                <button>
                                    <span>Add New Contact</span>
                                </button>
                            </div>
                        </div>
                        <div className="border-continer">
                            <span className="line" />
                            <span className="text">or import from</span>
                            <span className="line" />
                        </div>
                        <div className="bottom-continer">
                            <div className="line  ">
                                <div className="social">
                                    <svg
                                        width="50"
                                        height="50"
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M28.6 15.322C28.6 14.3175 28.5099 13.3516 28.3424 12.4243H15V17.9042H22.6243C22.2958 19.6751 21.2977 21.1755 19.7974 22.18V25.7346H24.3758C27.0546 23.2683 28.6 19.6364 28.6 15.322Z"
                                            fill="#4285F4"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M15.0002 29.1669C18.8252 29.1669 22.032 27.8984 24.376 25.7347L19.7976 22.1802C18.529 23.0302 16.9063 23.5324 15.0002 23.5324C11.3104 23.5324 8.18731 21.0404 7.07329 17.6919H2.34033V21.3624C4.6714 25.9923 9.46231 29.1669 15.0002 29.1669Z"
                                            fill="#34A853"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7.07328 17.692C6.78994 16.842 6.62896 15.934 6.62896 15.0003C6.62896 14.0666 6.78994 13.1586 7.07328 12.3086V8.63818H2.34032C1.38085 10.5507 0.833496 12.7143 0.833496 15.0003C0.833496 17.2863 1.38085 19.4499 2.34032 21.3624L7.07328 17.692Z"
                                            fill="#FBBC05"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M15.0002 6.46798C17.0801 6.46798 18.9476 7.18275 20.4157 8.58654L24.479 4.52328C22.0256 2.23729 18.8188 0.833496 15.0002 0.833496C9.46231 0.833496 4.6714 4.00812 2.34033 8.63805L7.07329 12.3085C8.18731 8.96002 11.3104 6.46798 15.0002 6.46798Z"
                                            fill="#EA4335"
                                        />
                                    </svg>
                                    <svg
                                        width="50"
                                        height="50"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0 13.4167C0 8.67091 0 6.29803 0.938221 4.49188C1.72885 2.96985 2.96985 1.72885 4.49188 0.938221C6.29803 0 8.67091 0 13.4167 0H26.5833C31.3291 0 33.702 0 35.5081 0.938221C37.0301 1.72885 38.2711 2.96985 39.0618 4.49188C40 6.29803 40 8.67091 40 13.4167V26.5833C40 31.3291 40 33.702 39.0618 35.5081C38.2711 37.0301 37.0301 38.2711 35.5081 39.0618C33.702 40 31.3291 40 26.5833 40H13.4167C8.67091 40 6.29803 40 4.49188 39.0618C2.96985 38.2711 1.72885 37.0301 0.938221 35.5081C0 33.702 0 31.3291 0 26.5833V13.4167Z"
                                            fill="#1265BF"
                                        />
                                        <path
                                            d="M8.97829 12.4224C10.8947 12.4224 12.4483 10.8688 12.4483 8.95241C12.4483 7.03599 10.8947 5.48242 8.97829 5.48242C7.06187 5.48242 5.5083 7.03599 5.5083 8.95241C5.5083 10.8688 7.06187 12.4224 8.97829 12.4224Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M15.6262 14.9868H21.3771V17.6214C21.3771 17.6214 22.9377 14.5002 27.1838 14.5002C30.9715 14.5002 34.1093 16.3661 34.1093 22.0536V34.0469H28.1497V23.5069C28.1497 20.1518 26.3585 19.7828 24.9936 19.7828C22.1609 19.7828 21.676 22.2261 21.676 23.9445V34.0469H15.6262V14.9868Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M5.95342 14.9868H12.0032V34.0469H5.95342V14.9868Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ============Add Contact Section End=========== */}
            {/* ============Create New Contact Modal============== */}
            <CreateContact show={show} onHide={() => setshow(false)} />
            {/* ============Create New Contact Modal End============== */}
        </PannelLayout>
    )
}

export default AddContact
