import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRequestToFirebase } from '../../Hook/Request'
import { useUserContext } from '../../Context/UserContext'
import { Link } from 'react-router-dom'

function Navbar({
    showModal,
    signInUsername,
    signInLogOut,
    signUpUsername,
    signUpLogOut,
}) {
    const { auth } = useRequestToFirebase()
    const [user] = useAuthState(auth)
    const { access, removeAccessToken } = useUserContext()
    const { refresh, removeRefreshToken } = useUserContext()

    const removeTokensFromLocalStorage = () => {
        removeAccessToken()
        removeRefreshToken()
    }

    return (
        <div className="navbar-head">
            <div className="logo">
                <a href="/">
                    <img src="./images/logo.svg" alt="ZNS" />
                </a>
            </div>
            {/* {access && refresh && <h2 style={{color: "#fff"}}>Hello, {user.displayName}</h2>} */}
            <div className="links-head lato-font">
                <a className="link" href="">
                    {' '}
                    Функции{' '}
                </a>
                <Dropdown>
                    <Dropdown.Toggle
                        className="dropdownLang"
                        id="dropdown-basic"
                    >
                        <span>Контакты</span>
                        <i className="fal fa-angle-down"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="bg-white">
                        <Dropdown.Item as="button">Контакты</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/team">
                            Команда
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                {!access && !refresh && (
                    <a
                        className="link btn"
                        onClick={() => {
                            showModal('login')
                        }}
                    >
                        {' '}
                        Вход{' '}
                    </a>
                )}
                {!access && !refresh && (
                    <a
                        className="link btnlg"
                        onClick={() => {
                            showModal('signup')
                        }}
                    >
                        {' '}
                        Регистрация{' '}
                    </a>
                )}
                <Dropdown>
                    <Dropdown.Toggle
                        className="dropdownLang"
                        id="dropdown-basic"
                    >
                        <span>Ru</span>
                        <i className="fal fa-angle-down"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"> Ru </Dropdown.Item>
                        <Dropdown.Item href="#/action-2"> En </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="toggle-sidebar">
                    <i className="fal fa-bars"></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar
