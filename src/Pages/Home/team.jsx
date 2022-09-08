import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Navbar } from '../../components'
import ModalAuth from './Components/ModalAuth'

const teamList = [
    {
        img: '/images/team/1.jpg',
        name: 'Егор Новиков ',
        description: 'Менеджер проекта',
        linkedin: 'https://www.linkedin.com/in/jahor-\nnovikau-87835615/',
    },
    {
        img: '/images/team/2.jpg',
        name: 'Руслан Слепухин ',
        description: 'Backend разработчик',
        linkedin: 'https://www.linkedin.com/in/ruslan-\nsliapukhin-b12a4551 ',
    },
    {
        img: '/images/team/3.jpg',
        name: 'Александр Давидчик  ',
        description: 'Backend разработчик',
        linkedin: 'https://www.linkedin.com/in/davidchik/',
    },
    {
        img: '/images/team/4.jpg',
        name: 'Никита Шалимо  ',
        description: 'Frontend разработчик',
        linkedin: 'https://www.linkedin.com/in/nikita-\nshalimo-640b2b21b/',
    },
    {
        img: '/images/team/5.jpg',
        name: 'Мехди Хормози ',
        description: 'Frontend разработчик',
        linkedin: 'https://www.linkedin.com/in/hormozi/',
    },
    {
        img: '/images/team/6.jpg',
        name: 'Анастасия Ерофеенко ',
        description: 'UX/UI дизайнер',
        linkedin: 'https://www.linkedin.com/in/yerafeyenka/',
    },
]
function Team() {
    const [showAuth, setshowAuth] = useState(null)
    return (
        <React.Fragment>
            <ModalAuth
                show={showAuth}
                page={showAuth}
                onHide={() => {
                    setshowAuth()
                }}
            />

            <div className="team">
                <header
                    className="head-page"
                    style={{ background: 'transparent', zIndex: '2' }}
                >
                    <Navbar
                        showModal={(page) => {
                            setshowAuth(page)
                        }}
                    />
                </header>
                <Container className="text-center">
                    <div>
                        <span className="layerTop"></span>
                        <span className="layerRight"></span>
                        <span className="layerBottom"></span>
                    </div>
                    <Row>
                        <div className="forward-btn d-flex align-items-center justify-content-start mt-3 ">
                            <a
                                className="d-flex align-items-center gap-2"
                                href="/"
                            >
                                ZNS<i className="fa fa-angle-right"></i>
                                Контакты
                                <i className="fa fa-angle-right"></i>
                            </a>
                        </div>
                        <div className="team-header-title d-flex align-items-center justify-content-center">
                            <h1>Команда</h1>
                        </div>
                        {teamList.map((e, i) => (
                            <Col
                                style={{ zIndex: '2' }}
                                xs="12"
                                md="6"
                                lg="4"
                                className="mt-5 team-info mb-5"
                                key={i}
                            >
                                <div className="img-section">
                                    <img
                                        className="rounded-circle"
                                        src={e.img}
                                        alt={e.name}
                                    />
                                </div>
                                <h3>{e.name}</h3>
                                <p>{e.description}</p>
                                <a href={e.linkedin}>{e.linkedin}</a>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}
export default Team
