import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import isEmpty from 'lodash/isEmpty'
import { Layout } from '../Components'
import Detailes from './Components/Detailes'
import Information from './Components/Information'
import List from './Components/List'
import { useGetGoogleContacts } from '../../../Hook/Auth'
function Contacts() {
    const [show, setShow] = useState(false)
    const [tab, setTab] = useState('info')
    const [sharemodalShow, setShareModalShow] = React.useState(false)
    const [infotab, setInfoTab] = useState('inside')
    const [notemodalShow, setNoteModalShow] = React.useState(false)
    const [showmenu, setShowMenu] = useState(false)
    const { contactsForLayout, getContacts } = useGetGoogleContacts()
    if (contactsForLayout?.length === 0) {
        return (
            <Layout>
                {/* =======import contact from google======== */}
                <div className="profile">
                    <Container fluid>
                        <Row>
                            <div className="btn-container">
                                <div className="container-import">
                                    <button
                                        onClick={() => {
                                            getContacts()
                                        }}
                                        type="button"
                                        className="button-27"
                                    >
                                        Import google contacts
                                    </button>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </div>
            </Layout>
        )
    }
    return (
        <Layout>
            {/* Layout For Show The Sections (list,information,details) */}
            <div className="profile">
                <Container fluid>
                    <Row>
                        <Col
                            className={`${
                                show ? 'contacts-hide' : 'contacts-res'
                            }`}
                            xl={3}
                        >
                            <List setShow={setShow} />
                        </Col>
                        <Col className="card-res me-4 ms-4" xl={2}>
                            <Information />
                        </Col>
                        <Col className="card-res" xl={6}>
                            <Detailes
                                setTab={setTab}
                                tab={tab}
                                sharemodalShow={sharemodalShow}
                                setShareModalShow={setShareModalShow}
                                infotab={infotab}
                                setInfoTab={setInfoTab}
                                notemodalShow={notemodalShow}
                                setNoteModalShow={setNoteModalShow}
                                showmenu={showmenu}
                                setShowMenu={setShowMenu}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    )
}

export default Contacts
