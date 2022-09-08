import React from 'react'

const ResultSend = ({ onHide, setpage }) => {
    return (
        <div className="auth">
            <div className="auth-header">
                <div className="links" />
                <div className="action">
                    <i onClick={onHide} className="far fa-times"></i>
                </div>
            </div>
            <div className="auth-body pt-0" style={{ marginTop: '-20px' }}>
                <h3 className="title">Проверьте почту!</h3>
                <p className="box-success">
                    Проверьте почтовый ящик указанный при регистрации, мы
                    выслали вам инструкции по восстановлению пароля
                </p>
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

export default ResultSend
