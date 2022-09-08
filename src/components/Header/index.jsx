import React from 'react'
import { Col } from 'react-bootstrap'
function Header({ showModal }) {
    let loadingCheck = localStorage.getItem('loading')

    if (loadingCheck) {
        return (
            <div className="header blackout">
                <span className="layer-top"></span>
                <span className="layer-right"></span>
                <span className="layer-center"></span>
                <span className="layer-left-bottom"></span>
                <Col className="left" md={5} xl={4}>
                    <h2 className="days-one-font">
                        Управляйте своими контактами с ZNS{' '}
                    </h2>
                    <p>
                        Регистрируясь в ZNS, вы получаете продукт, помогающий
                        вам организовать контакты из социальных сетей, почты и
                        мессенджеров.
                    </p>
                    <div className="lds-roller">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="d-block d-lg-none cover2">
                        <img
                            src="./images/interface.svg"
                            style={{ width: '100%' }}
                            alt="cover"
                        />
                    </div>
                    <a
                        onClick={() => {
                            showModal('signup')
                        }}
                    >
                        {' '}
                        Бесплатная регистрация
                    </a>
                    ;
                    <Col className="right" md={6} xl={12}>
                        <img src="./images/cover.png" alt="cover" />
                    </Col>
                </Col>
            </div>
        )
    }

    return (
        <div className="header">
            <span className="layer-top"></span>
            <span className="layer-right"></span>
            <span className="layer-center"></span>
            <span className="layer-left-bottom"></span>
            <Col className="left" md={5} xl={4}>
                <h2 className="days-one-font">
                    Управляйте своими контактами с ZNS{' '}
                </h2>
                <p>
                    Регистрируясь в ZNS, вы получаете продукт, помогающий вам
                    организовать контакты из социальных сетей, почты и
                    мессенджеров.
                </p>

                <div className="d-block d-lg-none cover2">
                    <img
                        src="./images/interface.svg"
                        style={{ width: '100%' }}
                        alt="cover"
                    />
                </div>

                <a
                    onClick={() => {
                        showModal('signup')
                    }}
                >
                    Бесплатная регистрация
                </a>
            </Col>
            <Col className="right" md={7} xl={8}>
                <img src="./images/mainHeader.png" alt="cover" />
            </Col>
        </div>
    )
}

export default Header
