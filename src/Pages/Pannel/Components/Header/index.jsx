import Modal from 'react-bootstrap/Modal'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRequestToFirebase } from '../../../../Hook/Request'
import { useUserContext } from '../../../../Context/UserContext'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginWithGoogle } from '../../../../Hook/Auth'
import { useGetGoogleContacts } from '../../../../Hook/Auth'
import defaultPhoto from '../../../../img/DefaultContact.png'
import { Col, Dropdown } from 'react-bootstrap'
import { ContactContext } from '../../../../Context/ContactContext'
// ===================Panel Header Section=================

function PannelHeader(profile) {
    const [modal, setModal] = useState(false)
    const [admodal, setAdModal] = useState(false)
    const [modalShow, setModalShow] = React.useState(false)

    const navigate = useNavigate()
    const { auth } = useRequestToFirebase()
    const [user] = useAuthState(auth)
    const { access, removeAccessToken } = useUserContext()
    const { refresh, removeRefreshToken } = useUserContext()
    const { removeStartAccess } = useUserContext()
    const { userReg, removeUser } = useUserContext()
    const { removeProcessSession } = useUserContext()
    const { saveCheckLogin } = useUserContext()
    // const {getGoogleContacts} = useLoginWithGoogle();
    const { getContacts } = useGetGoogleContacts()
    const { signInLogOut, signUpUsername } = useLoginWithGoogle()
    let userNameFromLS = localStorage.getItem('user_name')
    let userName = userNameFromLS?.replace(/['"]+/g, '')
    let photoURLFromLS = localStorage.getItem('photo_url')
    let photoURL = photoURLFromLS?.replace(/['"]+/g, '')
    const { contactsForLayout } = useGetGoogleContacts()

    const removeTokensFromLocalStorageAndChangePage = () => {
        removeAccessToken()
        removeRefreshToken()
        removeStartAccess()
        removeUser()
        removeProcessSession()
        saveCheckLogin(false)
        navigate('/')
    }
    // =================Check access For Show Information===================

    const checkAccess = (access && refresh) || userReg
    // ====================================

    return (
        <>
            <div className="pannel-header">
                {/* =================Navbar Panel Header==================== */}
                <div className="d-flex justify-content-between align-items-center">
                    <div
                        className="info"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                            navigate('/profile')
                        }}
                    >
                        <img src={photoURL || defaultPhoto} alt="user-img" />
                        {checkAccess && (
                            <span className="name">
                                {userName || 'Tomasz Kowalski'}
                            </span>
                        )}
                    </div>
                    {!modal && (
                        // =============First Search Section(bg-gray)============
                        <div className="search" onClick={() => setModal(true)}>
                            <img src="./images/search.png" alt="" />
                            <input
                                type="text"
                                placeholder="Search people, notes, documents, events, tags"
                            />
                            <svg
                                onClick={() => setModalShow(true)}
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11 16V5C11 4.73478 11.1054 4.48043 11.2929 4.29289C11.4804 4.10536 11.7348 4 12 4C12.2652 4 12.5196 4.10536 12.7071 4.29289C12.8946 4.48043 13 4.73478 13 5V16H14C14.2652 16 14.5196 16.1054 14.7071 16.2929C14.8946 16.4804 15 16.7348 15 17C15 17.2652 14.8946 17.5196 14.7071 17.7071C14.5196 17.8946 14.2652 18 14 18H13V19C13 19.2652 12.8946 19.5196 12.7071 19.7071C12.5196 19.8946 12.2652 20 12 20C11.7348 20 11.4804 19.8946 11.2929 19.7071C11.1054 19.5196 11 19.2652 11 19V18H10C9.73478 18 9.48043 17.8946 9.29289 17.7071C9.10536 17.5196 9 17.2652 9 17C9 16.7348 9.10536 16.4804 9.29289 16.2929C9.48043 16.1054 9.73478 16 10 16H11ZM18 6V5C18 4.73478 18.1054 4.48043 18.2929 4.29289C18.4804 4.10536 18.7348 4 19 4C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V6H21C21.2652 6 21.5196 6.10536 21.7071 6.29289C21.8946 6.48043 22 6.73478 22 7C22 7.26522 21.8946 7.51957 21.7071 7.70711C21.5196 7.89464 21.2652 8 21 8H20V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20C18.7348 20 18.4804 19.8946 18.2929 19.7071C18.1054 19.5196 18 19.2652 18 19V8H17C16.7348 8 16.4804 7.89464 16.2929 7.70711C16.1054 7.51957 16 7.26522 16 7C16 6.73478 16.1054 6.48043 16.2929 6.29289C16.4804 6.10536 16.7348 6 17 6H18ZM6 9H7C7.26522 9 7.51957 9.10536 7.70711 9.29289C7.89464 9.48043 8 9.73478 8 10C8 10.2652 7.89464 10.5196 7.70711 10.7071C7.51957 10.8946 7.26522 11 7 11H6V19C6 19.2652 5.89464 19.5196 5.70711 19.7071C5.51957 19.8946 5.26522 20 5 20C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V11H3C2.73478 11 2.48043 10.8946 2.29289 10.7071C2.10536 10.5196 2 10.2652 2 10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9H4V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4C5.26522 4 5.51957 4.10536 5.70711 4.29289C5.89464 4.48043 6 4.73478 6 5V9Z"
                                    fill="#AAB4BD"
                                />
                            </svg>
                        </div>
                        // =============First Search Section(bg-gray) END============
                    )}
                    <div className="d-flex align-items-center me-2">
                        {/* ============Add New Contact DropDown============= */}
                        <Dropdown className="add-contact-dropdown">
                            <Dropdown.Toggle as="button">
                                <svg
                                    width="16"
                                    className="me-4"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M15 7H9V1C9 0.448 8.552 0 8 0C7.448 0 7 0.448 7 1V7H1C0.448 7 0 7.448 0 8C0 8.552 0.448 9 1 9H7V15C7 15.553 7.448 16 8 16C8.552 16 9 15.553 9 15V9H15C15.553 9 16 8.552 16 8C16 7.448 15.553 7 15 7Z"
                                        fill="#AAB4BD"
                                    />
                                </svg>{' '}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as="button">
                                    <svg
                                        width="20"
                                        className="icon"
                                        height="20"
                                        viewBox="0 0 15 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.5 2.28125C8.5875 2.28125 9.46875 3.1625 9.46875 4.25C9.46875 5.3375 8.5875 6.21875 7.5 6.21875C6.4125 6.21875 5.53125 5.3375 5.53125 4.25C5.53125 3.1625 6.4125 2.28125 7.5 2.28125ZM7.5 10.7188C10.2844 10.7188 13.2188 12.0875 13.2188 12.6875V13.7188H1.78125V12.6875C1.78125 12.0875 4.71562 10.7188 7.5 10.7188ZM7.5 0.5C5.42812 0.5 3.75 2.17812 3.75 4.25C3.75 6.32188 5.42812 8 7.5 8C9.57187 8 11.25 6.32188 11.25 4.25C11.25 2.17812 9.57187 0.5 7.5 0.5ZM7.5 8.9375C4.99687 8.9375 0 10.1938 0 12.6875V15.5H15V12.6875C15 10.1938 10.0031 8.9375 7.5 8.9375Z"
                                            fill="#F9F9F9"
                                        />
                                    </svg>
                                    New Contact
                                    <div className="dropdown-menu dropdown-submenu">
                                        <Dropdown.Item
                                            as={Link}
                                            to="/AddContact"
                                        >
                                            <svg
                                                width="16"
                                                className="icon"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M15 7H9V1C9 0.448 8.552 0 8 0C7.448 0 7 0.448 7 1V7H1C0.448 7 0 7.448 0 8C0 8.552 0.448 9 1 9H7V15C7 15.553 7.448 16 8 16C8.552 16 9 15.553 9 15V9H15C15.553 9 16 8.552 16 8C16 7.448 15.553 7 15 7Z"
                                                    fill="#F9F9F9"
                                                />
                                            </svg>
                                            Add New
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            as={Link}
                                            to="/AddContact"
                                        >
                                            <svg
                                                width="18"
                                                className="icon"
                                                height="17"
                                                viewBox="0 0 18 17"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12 8.5L8 4.5V7.5H0V9.5H8V12.5L12 8.5ZM18 14.5V2.5C18 1.96957 17.7893 1.46086 17.4142 1.08579C17.0391 0.710714 16.5304 0.5 16 0.5H4C3.46957 0.5 2.96086 0.710714 2.58579 1.08579C2.21071 1.46086 2 1.96957 2 2.5V5.5H4V2.5H16V14.5H4V11.5H2V14.5C2 15.0304 2.21071 15.5391 2.58579 15.9142C2.96086 16.2893 3.46957 16.5 4 16.5H16C16.5304 16.5 17.0391 16.2893 17.4142 15.9142C17.7893 15.5391 18 15.0304 18 14.5Z"
                                                    fill="#AAB4BD"
                                                />
                                            </svg>
                                            Import
                                        </Dropdown.Item>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item as="button">
                                    <svg
                                        width="16"
                                        height="20"
                                        className="icon"
                                        viewBox="0 0 16 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M15 2H12.414L10.707 0.293C10.52 0.105 10.265 0 10 0H6C5.735 0 5.48 0.105 5.293 0.293L3.586 2H1C0.448 2 0 2.448 0 3V19C0 19.552 0.448 20 1 20H15C15.552 20 16 19.552 16 19V3C16 2.448 15.552 2 15 2ZM14 18H2V4H3.586L5.293 5.707C5.48 5.895 5.735 6 6 6H10C10.265 6 10.52 5.895 10.707 5.707L12.414 4H14V18ZM6.414 2H9.586L10.586 3L9.586 4H6.414L5.414 3L6.414 2ZM10.293 9.293L7 12.586L5.707 11.293C5.316 10.902 4.684 10.902 4.293 11.293C3.902 11.684 3.902 12.316 4.293 12.707L6.293 14.707C6.488 14.902 6.744 15 7 15C7.256 15 7.512 14.902 7.707 14.707L11.707 10.707C12.098 10.316 12.098 9.684 11.707 9.293C11.316 8.902 10.684 8.902 10.293 9.293Z"
                                            fill="#F8F8F8"
                                        />
                                    </svg>
                                    New Task
                                </Dropdown.Item>
                                <Dropdown.Item as="button">
                                    <svg
                                        width="20"
                                        className="icon"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M19 2H16V1C16 0.447 15.553 0 15 0C14.447 0 14 0.447 14 1V2H6V1C6 0.447 5.553 0 5 0C4.447 0 4 0.447 4 1V2H1C0.447 2 0 2.447 0 3V19C0 19.553 0.447 20 1 20H19C19.553 20 20 19.553 20 19V3C20 2.447 19.553 2 19 2ZM2 18H18V8H2V18ZM2 6H18V4H2V6ZM6 10C5.447 10 5 10.447 5 11C5 11.553 5.447 12 6 12C6.553 12 7 11.553 7 11C7 10.447 6.553 10 6 10ZM6 14C5.447 14 5 14.447 5 15C5 15.553 5.447 16 6 16C6.553 16 7 15.553 7 15C7 14.447 6.553 14 6 14ZM10 14C9.447 14 9 14.447 9 15C9 15.553 9.447 16 10 16C10.553 16 11 15.553 11 15C11 14.447 10.553 14 10 14ZM10 10C9.447 10 9 10.447 9 11C9 11.553 9.447 12 10 12C10.553 12 11 11.553 11 11C11 10.447 10.553 10 10 10ZM14 10C13.447 10 13 10.447 13 11C13 11.553 13.447 12 14 12C14.553 12 15 11.553 15 11C15 10.447 14.553 10 14 10Z"
                                            fill="#F8F8F8"
                                        />
                                    </svg>
                                    New Event
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        {/* ============Add New Contact DropDown End============= */}
                        {/* =========Navbar Header icons&buttons=========== */}
                        <svg
                            width="20"
                            className="mt-1"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 15C5 13 5 11 5 8C5 5.238 7.239 3 10 3C12.761 3 15 5.238 15 8C15 11 15 13 17 15H3Z"
                                fill="white"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.0002 8C16.0002 5.033 13.8332 2.568 11.0002 2.09V1C11.0002 0.447 10.5522 0 10.0002 0C9.44819 0 9.00019 0.447 9.00019 1V2.09C6.16719 2.568 4.00019 5.033 4.00019 8C4.00019 10.957 4.00019 12.586 2.29319 14.293C2.00719 14.579 1.92119 15.009 2.07619 15.383C2.23119 15.757 2.59519 16 3.00019 16H7.18319C7.06919 16.313 7.00019 16.647 7.00019 17C7.00019 18.654 8.34519 20 10.0002 20C11.6542 20 13.0002 18.654 13.0002 17C13.0002 16.647 12.9302 16.313 12.8162 16H17.0002C17.4042 16 17.7692 15.757 17.9242 15.383C18.0782 15.009 17.9932 14.579 17.7072 14.293C16.0002 12.586 16.0002 10.957 16.0002 8ZM5.01119 14C6.00019 12.208 6.00019 10.285 6.00019 8C6.00019 5.794 7.79419 4 10.0002 4C12.2052 4 14.0002 5.794 14.0002 8C14.0002 10.285 14.0002 12.208 14.9892 14H5.01119ZM11.0002 17C11.0002 17.552 10.5512 18 10.0002 18C9.44819 18 9.00019 17.552 9.00019 17C9.00019 16.448 9.44819 16 10.0002 16C10.5512 16 11.0002 16.448 11.0002 17Z"
                                fill="#AAB4BD"
                            />
                        </svg>
                        {contactsForLayout?.length === 0 ? null : (
                            <a
                                onClick={() => {
                                    getContacts()
                                }}
                                className="link btnlg"
                            >
                                Import new contact
                            </a>
                        )}

                        {checkAccess && (
                            <a
                                className="link btnlg"
                                onClick={() => {
                                    signInLogOut()
                                    removeTokensFromLocalStorageAndChangePage()
                                }}
                            >
                                Log Out
                            </a>
                        )}
                    </div>
                    {/* =========Navbar Header icons&buttons=========== */}
                </div>
            </div>
            {/* ============SearchModal And AdvanceSearchModal=========== */}
            {modal && (
                <SearchModal
                    show={modal}
                    setShowModal={() => setModalShow(true)}
                    onHide={() => setModal(false)}
                />
            )}
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

const SearchModal = ({
    show = false,
    onHide = () => {},
    setShowModal = () => {},
}) => {
    //============== this property for searchFilter===============
    const modalRef = useRef()
    const { contactList, setActiveUser } = useContext(ContactContext)
    const { contactInfo } = useGetGoogleContacts()
    const { contactsForLayout } = useGetGoogleContacts()
    let userNameFromLS = localStorage.getItem('user_name')
    const [filterText, setFilterText] = useState('')
    const handleOutsideClick = (e) => {
        const isOutside = !modalRef.current.contains(e.target)
        isOutside && onHide()
    }
    const renderGoogleContacts = () => {
        if (!Boolean(filterText)) {
            return contactsForLayout
        }
        try {
            const text = filterText.toLowerCase()
            return contactsForLayout.filter((e) => {
                const fullName = `${e.first_name} + ${e.last_name}`
                return fullName.toLowerCase().search(text) !== -1
            })
        } catch (e) {
            return contactsForLayout
        }
    }
    const renderItems = () => {
        if (!Boolean(filterText)) {
            return contactList
        }
        try {
            const text = filterText.toLowerCase()
            return contactList.filter((e) => {
                const fullName = `${e.first_name} ${e.last_name}`
                return fullName.toLowerCase().search(text) !== -1
            })
        } catch (e) {
            return contactList
        }
    }
    useEffect(() => {
        setTimeout(() => {
            window.addEventListener('click', handleOutsideClick)
        }, 500)
        return () => {
            window.removeEventListener('click', handleOutsideClick)
        }
    }, [])
    // =========searchFilter End===========
    return (
        <>
            {/* =============Search Modal Section============= */}
            <div className="search-modal" ref={modalRef}>
                <div className="card-main paad">
                    <div className="search-head">
                        <div className="left">
                            <input
                                type="text"
                                value={filterText}
                                onChange={({ target }) =>
                                    setFilterText(target.value)
                                }
                            />
                            <i
                                className="far fa-times fs-4"
                                onClick={onHide}
                            ></i>
                        </div>
                        <div className="right d-flex flex-center align-items-center ">
                            <i className="fas fa-microphone fs-4"></i>
                            <svg
                                onClick={setShowModal}
                                className="advanceSearchBtn"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11 16V5C11 4.73478 11.1054 4.48043 11.2929 4.29289C11.4804 4.10536 11.7348 4 12 4C12.2652 4 12.5196 4.10536 12.7071 4.29289C12.8946 4.48043 13 4.73478 13 5V16H14C14.2652 16 14.5196 16.1054 14.7071 16.2929C14.8946 16.4804 15 16.7348 15 17C15 17.2652 14.8946 17.5196 14.7071 17.7071C14.5196 17.8946 14.2652 18 14 18H13V19C13 19.2652 12.8946 19.5196 12.7071 19.7071C12.5196 19.8946 12.2652 20 12 20C11.7348 20 11.4804 19.8946 11.2929 19.7071C11.1054 19.5196 11 19.2652 11 19V18H10C9.73478 18 9.48043 17.8946 9.29289 17.7071C9.10536 17.5196 9 17.2652 9 17C9 16.7348 9.10536 16.4804 9.29289 16.2929C9.48043 16.1054 9.73478 16 10 16H11ZM18 6V5C18 4.73478 18.1054 4.48043 18.2929 4.29289C18.4804 4.10536 18.7348 4 19 4C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V6H21C21.2652 6 21.5196 6.10536 21.7071 6.29289C21.8946 6.48043 22 6.73478 22 7C22 7.26522 21.8946 7.51957 21.7071 7.70711C21.5196 7.89464 21.2652 8 21 8H20V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20C18.7348 20 18.4804 19.8946 18.2929 19.7071C18.1054 19.5196 18 19.2652 18 19V8H17C16.7348 8 16.4804 7.89464 16.2929 7.70711C16.1054 7.51957 16 7.26522 16 7C16 6.73478 16.1054 6.48043 16.2929 6.29289C16.4804 6.10536 16.7348 6 17 6H18ZM6 9H7C7.26522 9 7.51957 9.10536 7.70711 9.29289C7.89464 9.48043 8 9.73478 8 10C8 10.2652 7.89464 10.5196 7.70711 10.7071C7.51957 10.8946 7.26522 11 7 11H6V19C6 19.2652 5.89464 19.5196 5.70711 19.7071C5.51957 19.8946 5.26522 20 5 20C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V11H3C2.73478 11 2.48043 10.8946 2.29289 10.7071C2.10536 10.5196 2 10.2652 2 10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9H4V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4C5.26522 4 5.51957 4.10536 5.70711 4.29289C5.89464 4.48043 6 4.73478 6 5V9Z"
                                    fill="#AAB4BD"
                                />
                            </svg>
                            <i className="far fa-search fs-4"></i>
                        </div>
                    </div>
                    <div className="res d-flex align-items-center">
                        <i className="far fa-search"></i>
                        {!userNameFromLS ? (
                            <span>Result: {renderItems().length}</span>
                        ) : (
                            <span>
                                Result: {renderGoogleContacts()?.length}
                            </span>
                        )}
                    </div>
                    <div className="contacts">
                        {!userNameFromLS
                            ? renderItems().map((e) => (
                                  <div
                                      key={e.id}
                                      className="contact"
                                      onClick={() => {
                                          setActiveUser(e)
                                          onHide()
                                      }}
                                  >
                                      <img src={e.img} alt={e.name} />
                                      <div>
                                          <div>
                                              {`${e.first_name} ${e.last_name}`}
                                              <p
                                                  className="pb p gray"
                                                  style={{ color: 'gray' }}
                                              >
                                                  {e.work_experience}
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              ))
                            : null}
                        {contactsForLayout
                            ? renderGoogleContacts().map((e, i) => (
                                  <div
                                      key={i}
                                      className="contact"
                                      onClick={() => {
                                          setActiveUser(e)
                                          onHide()
                                      }}
                                  >
                                      <img src={e.photo} alt={e.uname} />
                                      <div>
                                          <div>
                                              {e.first_name === null
                                                  ? 'Name and family name not specified'
                                                  : `${e.first_name} ${e.last_name}` ||
                                                    `${e.first_name} ${e.last_name}`}
                                              <p
                                                  className="pb p gray"
                                                  style={{ color: 'gray' }}
                                              >
                                                  {e.work}
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              ))
                            : null}
                    </div>
                    <div className="tags">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.1297 0.520791C15.6381 0.503719 16.8786 1.7049 16.9102 3.21302L17.0156 8.24408C17.0313 8.99324 16.7406 9.71636 16.2108 10.2462L9.78345 16.6735C8.70951 17.7475 6.9683 17.7475 5.89436 16.6735L0.944615 11.7238C-0.129326 10.6498 -0.129327 8.90862 0.944614 7.83468L7.3987 1.3806C7.9068 0.872495 8.5936 0.58345 9.31212 0.575317L14.1297 0.520791ZM15.4105 3.24444C15.3962 2.55892 14.8323 2.01294 14.1467 2.02069L9.3291 2.07522C9.0025 2.07892 8.69032 2.2103 8.45936 2.44126L3.98067 6.91995L10.6982 13.6375L15.1501 9.18555C15.3909 8.94471 15.5231 8.61602 15.5159 8.27549L15.4105 3.24444ZM9.63752 14.6981L2.92001 7.98061L2.00527 8.89534C1.51712 9.3835 1.51712 10.175 2.00528 10.6631L6.95502 15.6129C7.44318 16.101 8.23464 16.101 8.72279 15.6129L9.63752 14.6981ZM13.115 4.59432C13.1402 4.61952 13.1811 4.61952 13.2063 4.59432C13.2315 4.56913 13.2315 4.52828 13.2063 4.50308C13.1811 4.47789 13.1402 4.47789 13.115 4.50308C13.0899 4.52828 13.0899 4.56913 13.115 4.59432ZM12.4079 5.30143C12.8237 5.71715 13.4977 5.71715 13.9134 5.30143C14.3291 4.88571 14.3291 4.2117 13.9134 3.79598C13.4977 3.38026 12.8237 3.38026 12.4079 3.79598C11.9922 4.2117 11.9922 4.88571 12.4079 5.30143Z"
                                fill="#AAB4BD"
                            />
                        </svg>
                        <span className="title">Tags</span>
                        <span className="item">Key</span>
                    </div>
                    <div className="attach">
                        <i className="far fa-paperclip"></i>
                        <span className="title">Attachments</span>
                        <div className="item">
                            <svg
                                width="35"
                                height="36"
                                viewBox="0 0 35 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21.4168 16.8955L9.31006 14.7627V30.5225C9.3102 30.6938 9.34407 30.8633 9.40972 31.0214C9.47537 31.1795 9.57153 31.3231 9.69269 31.4441C9.81386 31.5651 9.95766 31.661 10.1159 31.7264C10.2741 31.7918 10.4437 31.8253 10.6149 31.8252H31.5055C31.6769 31.8256 31.8467 31.7923 32.0052 31.727C32.1637 31.6617 32.3078 31.5659 32.4292 31.4449C32.5506 31.3239 32.6469 31.1802 32.7127 31.0219C32.7785 30.8636 32.8124 30.6939 32.8126 30.5225V24.7158L21.4168 16.8955Z"
                                    fill="#185C37"
                                />
                                <path
                                    d="M21.4168 3.3877H10.6149C10.4437 3.38755 10.2741 3.42113 10.1159 3.48652C9.95766 3.55191 9.81386 3.64782 9.69269 3.76878C9.57153 3.88974 9.47537 4.03339 9.40972 4.19151C9.34407 4.34964 9.3102 4.51914 9.31006 4.69035V10.4971L21.4168 17.6064L27.8272 19.7393L32.8126 17.6064V10.4971L21.4168 3.3877Z"
                                    fill="#21A366"
                                />
                                <path
                                    d="M9.31006 10.4971H21.4168V17.6064H9.31006V10.4971Z"
                                    fill="#107C41"
                                />
                                <path
                                    opacity="0.1"
                                    d="M17.9747 9.07532H9.31006V26.8488H17.9747C18.32 26.847 18.6507 26.7094 18.8951 26.4655C19.1396 26.2217 19.2781 25.8914 19.2807 25.5461V10.378C19.2781 10.0327 19.1396 9.70239 18.8951 9.45856C18.6507 9.21473 18.32 9.07703 17.9747 9.07532Z"
                                    fill="black"
                                />
                                <path
                                    opacity="0.2"
                                    d="M17.2627 9.78613H9.31006V27.5596H17.2627C17.608 27.5579 17.9387 27.4202 18.1831 27.1763C18.4275 26.9325 18.5661 26.6022 18.5686 26.2569V11.0888C18.5661 10.7435 18.4275 10.4132 18.1831 10.1694C17.9387 9.92554 17.608 9.78785 17.2627 9.78613Z"
                                    fill="black"
                                />
                                <path
                                    opacity="0.2"
                                    d="M17.2627 9.78613H9.31006V26.1377H17.2627C17.608 26.136 17.9387 25.9983 18.1831 25.7545C18.4275 25.5106 18.5661 25.1803 18.5686 24.835V11.0888C18.5661 10.7435 18.4275 10.4132 18.1831 10.1694C17.9387 9.92554 17.608 9.78785 17.2627 9.78613Z"
                                    fill="black"
                                />
                                <path
                                    opacity="0.2"
                                    d="M16.5507 9.78613H9.31006V26.1377H16.5507C16.8959 26.136 17.2266 25.9983 17.4711 25.7545C17.7155 25.5106 17.854 25.1803 17.8566 24.835V11.0888C17.854 10.7435 17.7155 10.4132 17.4711 10.1694C17.2266 9.92554 16.8959 9.78785 16.5507 9.78613Z"
                                    fill="black"
                                />
                                <path
                                    d="M3.49344 9.78613H16.5506C16.8965 9.78584 17.2283 9.92289 17.4732 10.1672C17.7181 10.4114 17.856 10.7429 17.8566 11.0888V24.1241C17.856 24.47 17.7181 24.8015 17.4732 25.0457C17.2283 25.29 16.8965 25.427 16.5506 25.4268H3.49344C3.32213 25.427 3.15245 25.3936 2.99409 25.3282C2.83574 25.2629 2.6918 25.167 2.57052 25.0461C2.44924 24.9251 2.35299 24.7814 2.28726 24.6232C2.22154 24.465 2.18764 24.2954 2.1875 24.1241V11.0888C2.18764 10.9175 2.22154 10.7479 2.28726 10.5897C2.35299 10.4315 2.44924 10.2878 2.57052 10.1668C2.6918 10.0459 2.83574 9.94997 2.99409 9.88464C3.15245 9.81932 3.32213 9.78585 3.49344 9.78613Z"
                                    fill="url(#paint0_linear_1_1021)"
                                />
                                <path
                                    d="M6.23438 21.8425L8.98078 17.5944L6.46516 13.3704H8.48531L9.85797 16.0752C9.98484 16.3311 10.0767 16.5215 10.1183 16.6483H10.1369C10.2266 16.4427 10.3217 16.2447 10.4212 16.0511L11.8891 13.3747H13.7484L11.1683 17.5747L13.8141 21.8458H11.8355L10.2495 18.8807C10.1759 18.7532 10.1133 18.6196 10.0625 18.4815H10.0362C9.99 18.6161 9.92835 18.7449 9.8525 18.8654L8.21953 21.8425H6.23438Z"
                                    fill="white"
                                />
                                <path
                                    d="M31.5066 3.3877H21.4167V10.4971H32.8125V4.69035C32.8124 4.51905 32.7785 4.34945 32.7128 4.19126C32.647 4.03307 32.5508 3.88937 32.4295 3.7684C32.3082 3.64742 32.1643 3.55153 32.0059 3.48621C31.8476 3.42088 31.6779 3.38741 31.5066 3.3877Z"
                                    fill="#33C481"
                                />
                                <path
                                    d="M21.4167 17.6064H32.8125V24.7158H21.4167V17.6064Z"
                                    fill="#107C41"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_1_1021"
                                        x1="4.91531"
                                        y1="8.76238"
                                        x2="15.1287"
                                        y2="26.4505"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#18884F" />
                                        <stop
                                            offset="0.5"
                                            stopColor="#117E43"
                                        />
                                        <stop offset="1" stopColor="#0B6631" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div style={{ marginLeft: '10px' }}>
                                <div>Keto diet.xls</div>
                                <div className="light">16.5 MB</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* =========Search Modal Section End========= */}
        </>
    )
}
function MyVerticallyCenteredModal(props) {
    return (
        // =============Advance Search Modal Section=============
        <Modal {...props} size="lg">
            <div className="d-flex justify-content-between p-3">
                <p className="ad-title fs-5 ms-4 mb-0 fw-bold ms-0">
                    Advanced Search
                </p>
                <svg
                    onClick={props.onHide}
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-2 mt-1"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.2132 13.4454L9.90986 8.14214L15.2132 2.83883C15.7011 2.35093 15.7011 1.55897 15.2132 1.07107C14.7253 0.583164 13.9333 0.583164 13.4454 1.07107L8.14209 6.37437L2.83879 1.07107C2.35088 0.583165 1.55893 0.583165 1.07102 1.07107C0.583118 1.55897 0.583118 2.35093 1.07102 2.83884L6.37432 8.14214L1.07102 13.4454C0.582233 13.9342 0.583117 14.7253 1.07102 15.2132C1.55892 15.7011 2.35 15.702 2.83879 15.2132L8.14209 9.9099L13.4454 15.2132C13.9342 15.702 14.7253 15.7011 15.2132 15.2132C15.7011 14.7253 15.7019 13.9342 15.2132 13.4454Z"
                        fill="#AAB4BD"
                    />
                </svg>
            </div>
            <div className="advanced-modal mt-0">
                <div className="search-head box">
                    <div className="left">
                        <input type="text" />
                        <i className="far fa-times"></i>
                    </div>
                    <div className="right">
                        <i className="fas fa-microphone"></i>
                        <i className="far fa-search"></i>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center my-5">
                    <span>Location</span>
                    <input
                        className="box"
                        style={{ width: '85%' }}
                        type="text"
                        placeholder="Enter in which you added the contact"
                    />
                </div>
                <p>What time period was the contact added?</p>
                <div className="from me-4">
                    <p>From</p>
                    <div className="row ">
                        <div className="col-4">
                            <div className="box d-flex align-items-center justify-content-between ">
                                <span>Day</span>
                                <svg
                                    width="10"
                                    height="6"
                                    viewBox="0 0 10 6"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.56716 6L9.13432 0H0L4.56716 6Z"
                                        fill="#AAB4BD"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="box d-flex align-items-center justify-content-between">
                                <span>Month</span>
                                <svg
                                    width="10"
                                    height="6"
                                    viewBox="0 0 10 6"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.56716 6L9.13432 0H0L4.56716 6Z"
                                        fill="#AAB4BD"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="box d-flex align-items-center justify-content-between">
                                <span>Year</span>
                                <svg
                                    width="10"
                                    height="6"
                                    viewBox="0 0 10 6"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.56716 6L9.13432 0H0L4.56716 6Z"
                                        fill="#AAB4BD"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="from mt-3 me-4">
                    <p>To</p>
                    <div className="row">
                        <div className="col-4">
                            <div className="box d-flex align-items-center justify-content-between">
                                <span>Day</span>
                                <svg
                                    width="10"
                                    height="6"
                                    viewBox="0 0 10 6"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.56716 6L9.13432 0H0L4.56716 6Z"
                                        fill="#AAB4BD"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="box d-flex align-items-center justify-content-between">
                                <span>Month</span>
                                <svg
                                    width="10"
                                    height="6"
                                    viewBox="0 0 10 6"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.56716 6L9.13432 0H0L4.56716 6Z"
                                        fill="#AAB4BD"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="box d-flex align-items-center justify-content-between">
                                <span>Year</span>
                                <svg
                                    width="10"
                                    height="6"
                                    viewBox="0 0 10 6"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.56716 6L9.13432 0H0L4.56716 6Z"
                                        fill="#AAB4BD"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row footer justify-content-between ms-5">
                    <div className="footer-btns d-flex gap-4 ms-4 mb-4 ">
                        <Col md={6} sm={6}>
                            <button
                                className="close-btn mt-4"
                                onClick={props.onHide}
                            >
                                Close
                            </button>
                        </Col>
                        <Col md={6} sm={6}>
                            <button className="save-btn mt-4">Search</button>
                        </Col>
                    </div>
                </div>
            </div>
        </Modal>
        // ================Advance Search Modal Section End=================
    )
}
//  ============SearchModal And AdvanceSearchModal End===========

export default PannelHeader
