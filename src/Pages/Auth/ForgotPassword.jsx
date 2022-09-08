import React from 'react'
import { useResetPassword } from '../../Hook/Auth'
import { Spinner } from 'react-bootstrap'
const ForgotPassword = ({ setpage, onHide }) => {
    const { submitForm, onChange, loading } = useResetPassword(setpage)
    return (
        <div className="auth">
            <div className="auth-header">
                <div className="links" />
                <div className="action">
                    <i onClick={onHide} className="far fa-times"></i>
                </div>
            </div>

            <div className="auth-body pt-0" style={{ marginTop: '-20px' }}>
                <h3 className="title">Забыли пароль?</h3>
                <p>
                    Введите почтовый ящик, указанный при <br /> регистрации и мы
                    пришлем вам <br /> инструкцию по восстановлению пароля
                </p>
                <div className="form-group">
                    <label htmlFor="">Введите адрес электронной почты</label>
                    <input
                        type="email"
                        onChange={onChange}
                        name="email"
                        className="form-control"
                        placeholder="Введите ваш e-mail"
                    />
                </div>

                <div className="form-group">
                    <button
                        onClick={submitForm}
                        disabled={loading}
                        className="btn btn-primary"
                    >
                        {loading ? (
                            <Spinner size="sm" animation="border" />
                        ) : (
                            'Сбросить пароль'
                        )}
                    </button>
                </div>
                <div className="text-center">
                    <a
                        onClick={() => {
                            setpage('login')
                        }}
                        style={{ textDecoration: 'none' }}
                    >
                        <i className="far fa-angle-left"></i>
                        <span className="back mx-2">Вернуться назад</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
