import React from 'react'

const ResultSet = ({ onHide, setpage }) => {
    return (
        <div className="auth">
            <div className="auth-header">
                <div className="links" />
                <div className="action">
                    <i onClick={onHide} className="far fa-times"></i>
                </div>
            </div>
            <div className="auth-body pt-0" style={{ marginTop: '-20px' }}>
                <div className="text-center">
                    <img src="./images/success.svg" alt="success" />
                </div>
                <h3 className="title text-center">Поздравляем!</h3>
                <p className="text-center">Ваш пароль успешно изменен!</p>
                <div className="form-group">
                    <button
                        onClick={() => {
                            setpage('login')
                        }}
                        className="btn btn-primary"
                    >
                        Войти в ZNS
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ResultSet
