import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Col } from 'react-bootstrap'

function Note({ setNoteModalShow, notemodalShow }) {
    let userNameFromLS = localStorage.getItem('user_name')
    let userName = userNameFromLS?.replace(/['"]+/g, '')
    // ==============Note Contact List=================
    const noteContact = [
        {
            id: 1,
            title: 'Agree on the conditions',
            by: 'by Tomasz Kowalski',
            date: '22/09/2021',
            des: 'Meeting on the checkout area. We talked about the upcoming meeting...',
        },
        {
            id: 1,
            title: 'Agree on the conditions',
            by: 'by Tomasz Kowalski',
            date: '22/09/2021',
            des: 'Meeting on the checkout area. We talked about the upcoming meeting...',
        },
        {
            id: 1,
            title: 'Agree on the conditions',
            by: 'by Tomasz Kowalski',
            date: '22/09/2021',
            des: 'Meeting on the checkout area. We talked about the upcoming meeting...',
        },
    ]
    return (
        // =============Note Contact Section===========
        <div className="note-contacts">
            <div className="d-flex align-items-center blue-title">
                <i className="fas fa-plus"></i>
                <div>New Note</div>
            </div>
            {noteContact.map((item, i) => (
                <div
                    className="card-main paad mb-4"
                    key={i}
                    onClick={() => setNoteModalShow(true)}
                >
                    <div className="item">
                        <div className="d-flex">
                            <div className="item-title">{item.title}</div>
                            <span className="item-light">
                                {userName ? userName : item.by}
                            </span>
                        </div>
                        <span className="item-light">{item.date}</span>
                        <div className="item-des">{item.des}</div>
                    </div>
                </div>
            ))}

            <InfoModal
                show={notemodalShow}
                onHide={() => setNoteModalShow(false)}
            />
        </div>
        // =============Note Contact Section End===========
    )
}
function InfoModal(props) {
    return (
        // =============Notes Modal(When click on NotesList)=========
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header
                style={{ border: 'none', padding: '22px' }}
                closeButton
            ></Modal.Header>
            <Modal.Body>
                <div className="note-contacts">
                    <div className="item">
                        <div className="d-flex">
                            <div className="item-title fs-5">
                                Agree on the conditions
                            </div>
                            <span className="item-light">
                                by Tomasz Kowalski
                            </span>
                        </div>
                        <span className="item-light">22/09/2021</span>
                        <div className="item-des">
                            Integer habitasse augue mattis non ipsum non
                            venenatis urna mattis quis, adipiscing sapien aenean
                            leo, quis, faucibus. Molestie sed id faucibus.
                            Efficitur aenean mattis pellentesque odio. Tempus
                            interdum accumsan dui mauris non vulputate urna
                            tortor, non accumsan in dictum. Platea
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <div className="file">
                                <div className="d-flex">
                                    <div className="blue-circle">
                                        <i className="far fa-file"></i>
                                    </div>
                                    <div>
                                        <div className="file-title">
                                            Frame 1.pdf
                                        </div>
                                        <div className="item-light">
                                            16.5 MB
                                        </div>
                                    </div>
                                </div>
                                <i className="far fa-trash-alt trash"></i>
                            </div>
                            <span className="item-light">
                                last edit 22/09/2021 by{' '}
                                <span style={{ textDecoration: 'underline' }}>
                                    Sam Cole
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <div className="note-modal-footer row justify-content-between align-items-center px-4">
                <Col md={7} sm={12}>
                    <div className="d-flex modal-footer-icons pt-2 pb-4">
                        <i className="far fa-pen"></i>
                        <i className="fas fa-share-alt"></i>
                        <i className="far fa-paperclip"></i>
                        <i className="far fa-trash-alt"></i>
                    </div>
                </Col>
                <Col md={5} sm={12}>
                    <div className="row justify-content-between pt-2 pb-4">
                        <Col md={6} sm={6}>
                            <button
                                className="close-btn"
                                onClick={props.onHide}
                            >
                                Close
                            </button>
                        </Col>
                        <Col md={6} sm={6}>
                            <button className="save-btn">Save</button>
                        </Col>
                    </div>
                </Col>
            </div>
        </Modal>
    )
}

export default Note
