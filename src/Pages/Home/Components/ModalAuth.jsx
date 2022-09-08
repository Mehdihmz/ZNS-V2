import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import ForgotPassword from '../../Auth/ForgotPassword'
import Login from '../../Auth/Login'
import NewPassword from '../../Auth/NewPassword'
import ResultSend from '../../Auth/ResultSend'
import ResultSet from '../../Auth/ResultSet'
import SignUp from '../../Auth/SignUp'
import { useLoginWithGoogle } from '../../../Hook/Auth'
import { useSignInWithFacebook } from '../../../Hook/Auth'
const ModalAuth = (props) => {
    const { signInWithGoogle } = useLoginWithGoogle()
    const { signInWithFacebook } = useSignInWithFacebook()
    const [page, setpage] = useState('login')
    useEffect(() => {
        if (props.page) {
            setpage(props.page)
        }
    }, [props])

    const render = () => {
        switch (page) {
            case 'login':
                return (
                    <Login
                        setpage={setpage}
                        onHide={props.onHide}
                        signInWithGoogle={() => {
                            signInWithGoogle()
                        }}
                        signInWithFacebook={() => {
                            signInWithFacebook()
                        }}
                    />
                )
            case 'signup':
                return (
                    <SignUp
                        setpage={setpage}
                        onHide={props.onHide}
                        signInWithGoogle={() => {
                            signInWithGoogle()
                        }}
                        signInWithFacebook={() => {
                            signInWithFacebook()
                        }}
                    />
                )
            case 'forgotpassword':
                return (
                    <ForgotPassword setpage={setpage} onHide={props.onHide} />
                )
            case 'successSendLink':
                return <ResultSend setpage={setpage} onHide={props.onHide} />
            case 'newPassword':
                return <NewPassword setpage={setpage} onHide={props.onHide} />
            case 'successSetPassword':
                return <ResultSet setpage={setpage} onHide={props.onHide} />
        }
    }
    return (
        <Modal
            centered
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Body className="show-grid auth-modal">{render()}</Modal.Body>
        </Modal>
    )
}

export default ModalAuth
