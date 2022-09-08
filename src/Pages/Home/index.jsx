import { Splide, SplideSlide } from '@splidejs/react-splide'
import React, { Fragment, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Navbar, Header } from '../../components'
import ModalAuth from './Components/ModalAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRequestToFirebase } from '../../Hook/Request'
import { useLoginWithGoogle } from '../../Hook/Auth'

function Home() {
    const [showAuth, setshowAuth] = useState(null)
    const { auth } = useRequestToFirebase()
    const [user, loading, error] = useAuthState(auth)
    const { reqLoading } = useLoginWithGoogle()

    return (
        <Fragment>
            <ModalAuth
                show={showAuth}
                page={showAuth}
                onHide={() => {
                    setshowAuth()
                }}
            />
            <header className="head-page">
                <Navbar
                    showModal={(page) => {
                        setshowAuth(page)
                    }}
                />
                <Header
                    showModal={(page) => {
                        setshowAuth(page)
                    }}
                 />
            </header>
            <section className="section-one">
                <Container>
                    <div className="text-center">
                        <div className="wraper">
                            <h3 className="days-one-font">ZNS</h3>
                            <p>
                                Мы создали удобную платформу для вашей работы с
                                контактами, задачами и планами. Воплотили в
                                реальность .................................{' '}
                            </p>
                        </div>
                    </div>
                    <div className="row d-flex mt-5">
                        <Col lg={4} className="left order-lg-1 order-2">
                            <h4>
                                Все ваши контакты. <br />
                                Из всех социальных сетей. В ZNS
                            </h4>
                            <p>
                                Объединяйте все ваши контакты из <br />
                                социальных сетей, мессенджеров и <br />
                                почты в одном удобном приложении.
                            </p>
                        </Col>
                        <Col lg={7} className="right order-lg-2 order-1">
                            <Row>
                                <Col xs={3} className="box-img">
                                    <img
                                        className="icon"
                                        src="./images/WhatsApp.svg"
                                        alt="image"
                                    />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img
                                        src="./images/user1.jfif"
                                        alt="image"
                                    />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img
                                        className="icon"
                                        src="./images/LinkedIN.svg"
                                        alt="image"
                                    />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img
                                        src="./images/user3.jfif"
                                        alt="image"
                                    />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img
                                        src="./images/user2.jfif"
                                        alt="image"
                                    />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img
                                        className="icon"
                                        src="./images/Telegram.svg"
                                        alt="image"
                                    />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img
                                        src="./images/user4.jfif"
                                        alt="image"
                                    />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img
                                        className="icon"
                                        src="./images/INST.svg"
                                        alt="image"
                                    />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img
                                        className="icon"
                                        src="./images/Skype.svg"
                                        alt="image"
                                    />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img
                                        src="./images/user5.jfif"
                                        alt="image"
                                    />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img
                                        className="icon"
                                        src="./images/Outlook.svg"
                                        alt="image"
                                    />
                                </Col>
                                <Col xs={3} className="box-img">
                                    <img
                                        src="./images/user6.jfif"
                                        alt="image"
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </Container>
            </section>
            <section className="section-tow">
                <img src="./images/map-2.png" className="map" alt="" />
                <div className="description">
                    <h4>
                        Найдите нужного человека, <br /> даже если забыли его
                        имя.
                    </h4>
                    <p>
                        Просто введите место или время когда контакт был <br />{' '}
                        записан и ZNS найдет его.
                    </p>
                    <a
                        onClick={() => {
                            setshowAuth('signup')
                        }}
                        className="btn-active"
                    >
                        Бесплатная регистрация
                    </a>
                </div>
            </section>
            <section className="section-three">
                <Container>
                    <div className="box">
                        <div className="title text-center">
                            <h3 className="days-one-font">
                                Вместе с ZNS Вы сможете:
                            </h3>
                        </div>
                        <Splide
                            options={{
                                pagination: false,
                                arrows: false,
                                perPage: 4,
                                start: 1,
                                focus: 'center',
                                breakpoints: {
                                    700: {
                                        perPage: 1,
                                        fixedWidth: '90%',
                                    },
                                    900: {
                                        perPage: 2,
                                    },
                                    1024: {
                                        perPage: 3,
                                    },
                                },
                            }}
                        >
                            <SplideSlide>
                                <div className="card-info">
                                    <div className="layer-light light-5"></div>
                                    <div className="layer-light light-6"></div>
                                    <div className="content">
                                        <h5 className="title">
                                            Совместно работать с контактами
                                        </h5>
                                        <p className="description">
                                            Не следует, однако забывать, что
                                            постоянное
                                            информационно-пропагандистское
                                            обеспечение нашей Не следует, однако
                                            забывать, что постоянное
                                            информационно-пропагандистское
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="card-info">
                                    <div className="layer-light light-3"></div>
                                    <div className="layer-light light-4"></div>
                                    <div className="content">
                                        <h5 className="title">
                                            Найти нужного вам человека
                                        </h5>
                                        <p className="description">
                                            Не следует, однако забывать, что
                                            постоянное
                                            информационно-пропагандистское
                                            обеспечение нашей Не следует, однако
                                            забывать, что постоянное
                                            информационно-пропагандистское
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="card-info">
                                    <div className="layer-light light-2"></div>
                                    <div className="content">
                                        <h5 className="title">
                                            Создавать заметки и делиться ими
                                        </h5>
                                        <p className="description">
                                            Не следует, однако забывать, что
                                            постоянное
                                            информационно-пропагандистское
                                            обеспечение нашей Не следует, однако
                                            забывать, что постоянное
                                            информационно-пропагандистское
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="card-info">
                                    <div className="layer-light light-1"></div>
                                    <div className="content">
                                        <h5 className="title">
                                            Собрать переписки в одном месте
                                        </h5>
                                        <p className="description">
                                            Не следует, однако забывать, что
                                            постоянное
                                            информационно-пропагандистское
                                            обеспечение нашей Не следует, однако
                                            забывать, что постоянное
                                            информационно-пропагандистское
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </Container>
            </section>

            <section className="section-four">
                <Container>
                    <Row className="justify-content-around align-items-center">
                        <Col lg={4} className="phones text-center">
                            <img src="./images/Iphone.svg" alt="" />
                            <div className="layer-light" />
                        </Col>
                        <Col lg={4} className="descriptions">
                            <h2>Скачай приложение ZNS на iOS или Android </h2>
                            <p>
                                Скачайте ZNS и присоединяйтесь к десяткам
                                миллионов пользователей. Оцените удобный сервис
                                общения, поиска контактов и планирования своих
                                задач.
                            </p>
                            <div className="links">
                                <a href="/">
                                    <img
                                        src="./images/AppleAppStore.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="/">
                                    <img src="./images/googleplay.svg" alt="" />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    )
}
export default Home
