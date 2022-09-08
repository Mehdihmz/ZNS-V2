import React from 'react'
import InputPassword from '../../components/InputPassword'
import { useNewPassword } from '../../Hook/Auth'
import { Spinner } from 'react-bootstrap'
const NewPassword = ({ setpage, onHide }) => {
    const { submitForm, onChange, loading } = useNewPassword()
    return (
        <div className="auth">
            <div className="auth-header">
                <div className="links" />
                <div className="action">
                    <i onClick={onHide} className="far fa-times"></i>
                </div>
            </div>

            <div className="auth-body pt-0" style={{ marginTop: '-20px' }}>
                <h3 className="title">Восстановление пароля</h3>
                <p>
                    Придумайте новый и надежный пароль, <br /> который вы нигде
                    не используете
                </p>

                <InputPassword
                    label="Введите новый пароль"
                    onChange={onChange}
                    name="new_password"
                    placeholder="Введите пароль"
                />
                <InputPassword
                    label="Подтвердите пароль"
                    onChange={onChange}
                    name="re_new_password"
                    placeholder="Введите пароль"
                />

                <div className="form-group">
                    <button
                        onClick={submitForm}
                        disabled={loading}
                        className="btn btn-primary"
                    >
                        {loading ? (
                            <Spinner size="sm" animation="border" />
                        ) : (
                            'Изменить пароль'
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

export default NewPassword
