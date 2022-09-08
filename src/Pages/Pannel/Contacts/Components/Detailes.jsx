import React, { useContext, useEffect, useRef, useState } from 'react'
import Note from '../Note'
import Info from '../Info'
import { ContactContext } from '../../../../Context/ContactContext'
import Modal from 'react-bootstrap/Modal'
import Files from '../File'
import { Dropdown } from 'react-bootstrap'

function Detailes({
    tab,
    setTab,
    sharemodalShow,
    setShareModalShow,
    infotab,
    setInfoTab,
    notemodalShow,
    setNoteModalShow,
    setShowMenu,
    showmenu,
}) {
    const { activeUser, contactList } = useContext(ContactContext)
    return (
        <>
            {/* =====Right Section Of User Panel(Info,Notes,File and History Modal======) */}

            <div className="content paad">
                <div className="d-flex align-items-center justify-content-between">
                    <h1 className="title">
                        {activeUser?.first_name === null ? (
                            <span className="bold_name">
                                Name and family name not specified
                            </span>
                        ) : (
                            `${activeUser?.first_name} ${activeUser?.last_name}` ||
                            `${activeUser?.first_name} ${activeUser?.last_name}`
                        )}
                    </h1>
                    {/* ==============Three Points Modal============== */}
                    <div
                        className="d-flex me-2"
                        style={{ position: 'relative' }}
                    >
                        <Dropdown>
                            <Dropdown.Toggle
                                as="button"
                                className="px-3 contact-menu1-toggle"
                            >
                                <svg
                                    width="4"
                                    height="18"
                                    viewBox="0 0 4 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2 13.9999C3.104 13.9999 4 14.8959 4 15.9999C4 17.1039 3.104 17.9999 2 17.9999C0.896 17.9999 0 17.1039 0 15.9999C0 14.8959 0.896 13.9999 2 13.9999ZM2 6.99987C3.104 6.99987 4 7.89587 4 8.99988C4 10.1039 3.104 10.9999 2 10.9999C0.896 10.9999 0 10.1039 0 8.99988C0 7.89587 0.896 6.99987 2 6.99987ZM2 -2.47955e-05C3.104 -2.47955e-05 4 0.895975 4 1.99998C4 3.10398 3.104 3.99998 2 3.99998C0.896 3.99998 0 3.10398 0 1.99998C0 0.895975 0.896 -2.47955e-05 2 -2.47955e-05Z"
                                        fill="#AAB4BD"
                                    />
                                </svg>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="contact-menu1">
                                <Dropdown.Item
                                    as="button"
                                    className="child-menu"
                                >
                                    <div className="child-icon">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.4546 0.000244141C12.1209 0.00105218 11.7906 0.0679255 11.4829 0.197006C11.1752 0.326087 10.8961 0.51482 10.6617 0.752317L0.905696 10.5077L0.867444 10.7008L0.192491 14.0941L0 14.9998L0.906313 14.8073L4.29959 14.1323L4.49208 14.0934L14.248 4.33808C14.4862 4.10409 14.6753 3.825 14.8044 3.51713C14.9335 3.20925 15 2.87874 15 2.54489C15 2.21104 14.9335 1.88053 14.8044 1.57266C14.6753 1.26478 14.4862 0.985699 14.248 0.7517C14.0135 0.514241 13.7343 0.325579 13.4265 0.196603C13.1186 0.0676267 12.7883 0.000890078 12.4546 0.000244141ZM12.4546 1.17617C12.7655 1.17617 13.0789 1.31807 13.38 1.61976C13.9803 2.21945 13.9803 2.87034 13.38 3.47064L12.937 3.89449L11.1046 2.06274L11.5291 1.61976C11.8308 1.31807 12.1436 1.17617 12.4546 1.17617ZM10.2378 2.9308L12.069 4.76255L4.60807 12.2228C4.20528 11.4348 3.56403 10.7939 2.7757 10.3917L10.2378 2.9308ZM1.98599 11.3949C2.35113 11.5418 2.68281 11.7609 2.96112 12.0393C3.23942 12.3176 3.45861 12.6492 3.60551 13.0144L1.58065 13.4191L1.98599 11.3949Z"
                                                fill="#F9F9F9"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="child-text">Edit</span>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item
                                    as="button"
                                    className="child-menu"
                                >
                                    <div className="child-icon">
                                        <i className="fa fa-history"></i>
                                    </div>
                                    <div>
                                        <span className="child-text">
                                            Change history
                                        </span>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item
                                    as="button"
                                    className="child-menu"
                                    onClick={() => setShareModalShow(true)}
                                >
                                    <div className="child-icon">
                                        <i className="fas fa-share-alt"></i>
                                    </div>
                                    <div>
                                        <span className="child-text">
                                            Share contact
                                        </span>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item
                                    as="button"
                                    className="child-menu"
                                >
                                    <div className="child-icon">
                                        <i className="far fa-star"></i>
                                    </div>
                                    <div>
                                        <span className="child-text">
                                            Add to favourites
                                        </span>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item
                                    as="button"
                                    className="child-menu"
                                >
                                    <div className="child-icon">
                                        <i className="far fa-trash-alt"></i>
                                    </div>
                                    <div>
                                        <span className="child-text">
                                            Delete contact
                                        </span>
                                    </div>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <p className="p p-color ">
                    {activeUser?.work_experience}
                    {activeUser?.profession === ''
                        ? 'Profession not specified'
                        : activeUser?.profession}
                </p>
                {/* ==========Right Section Tabs(info,notes,file,history)=========== */}
                <div className="d-flex align-items-center pt-4">
                    <div
                        className="card-info"
                        style={{ backgroundColor: tab == 'info' && '#1d9bf0' }}
                        onClick={() => setTab('info')}
                    >
                        <p
                            className="p color-gray"
                            style={{ color: tab == 'info' && '#fff' }}
                        >
                            Info
                        </p>
                    </div>
                    <div
                        className="card-info"
                        style={{ backgroundColor: tab == 'note' && '#1d9bf0' }}
                        onClick={() => setTab('note')}
                    >
                        <p
                            className="p color-gray"
                            style={{ color: tab == 'note' && '#fff' }}
                        >
                            Notes
                        </p>
                    </div>
                    <div
                        className="card-info"
                        style={{ backgroundColor: tab == 'file' && '#1d9bf0' }}
                        onClick={() => setTab('file')}
                    >
                        <p
                            className="p color-gray"
                            style={{ color: tab == 'file' && '#fff' }}
                        >
                            File
                        </p>
                    </div>
                    <div
                        className="card-info"
                        style={{
                            backgroundColor: tab == 'history' && '#1d9bf0',
                        }}
                        onClick={() => setTab('history')}
                    >
                        <p
                            className="p color-gray"
                            style={{ color: tab == 'history' && '#fff' }}
                        >
                            History
                        </p>
                    </div>
                </div>
                <div className="pt-4 scroll">
                    {tab == 'info' && <Info activeUser={activeUser} />}
                    {tab == 'note' && (
                        <Note
                            notemodalShow={notemodalShow}
                            setNoteModalShow={setNoteModalShow}
                        />
                    )}
                    {tab == 'file' && <Files />}
                </div>
            </div>
            <MyVerticallyCenteredModal
                show={sharemodalShow}
                onHide={() => setShareModalShow(false)}
                setInfoTab={setInfoTab}
                infotab={infotab}
                contactList={contactList}
            />
        </>
    )
}

function MyVerticallyCenteredModal(props) {
    // ===========Select All Contact In Share Contact=========
    const selectAllContact = () => {
        let inputs = window.document.getElementsByClassName('select-contact')
        ;[...inputs].forEach((input) => {
            input.checked = true
        })
    }
    // =================Show Contact List In Share Contact==================
    const [text, setText] = useState('')
    const renderGoogleContacts = () => {
        if (!Boolean(text)) {
            return props.contactList
        }
        try {
            const txt = text.toLowerCase()
            return props.contactList.filter((e) => {
                const fullName = `${e.first_name} ${e.last_name}`
                return fullName.toLowerCase().search(txt) !== -1
            })
        } catch (e) {
            return props.contactList
        }
    }

    return (
        // ==============Share Contact Modal(in Three Points DropDown)=============
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className="p-4">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <img
                            className="icon object "
                            src="./images/Vector (1).png"
                            alt="image"
                        />
                        <p className="p font padg">Share contact</p>
                    </div>
                    <svg
                        onClick={props.onHide}
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.2132 13.4454L9.90986 8.14214L15.2132 2.83883C15.7011 2.35093 15.7011 1.55897 15.2132 1.07107C14.7253 0.583164 13.9333 0.583164 13.4454 1.07107L8.14209 6.37437L2.83879 1.07107C2.35088 0.583165 1.55892 0.583165 1.07102 1.07107C0.583118 1.55897 0.583118 2.35093 1.07102 2.83884L6.37432 8.14214L1.07102 13.4454C0.582233 13.9342 0.583117 14.7253 1.07102 15.2132C1.55892 15.7011 2.35 15.702 2.83879 15.2132L8.14209 9.9099L13.4454 15.2132C13.9342 15.702 14.7253 15.7011 15.2132 15.2132C15.7011 14.7253 15.7019 13.9342 15.2132 13.4454Z"
                            fill="#AAB4BD"
                        />
                    </svg>
                </div>
                <div className="card-moodal d-flex mt-3">
                    <div>
                        <img src="./images/user1.jfif" alt="image" />
                    </div>
                    <div className="des ">
                        <p className="p p-name">elerna popra</p>
                        <p className="p p-name p-color">
                            Frontend developer at PTHTS
                        </p>
                    </div>
                </div>
                <div className="chose pt-2">
                    <p className="p font-sm p-color">
                        {' '}
                        Choose fields for share
                    </p>
                </div>
                <Modal.Body>
                    <div className="d-flex">
                        <p
                            onClick={() => props.setInfoTab('inside')}
                            style={{
                                borderBottomColor:
                                    props.infotab == 'inside' && '#1D9BF0',
                                color: props.infotab == 'inside' && '#384047',
                            }}
                            className="p font-md p-color "
                        >
                            with members of ZNS
                        </p>
                        <p
                            onClick={() => props.setInfoTab('outside')}
                            style={{
                                borderBottomColor:
                                    props.infotab == 'outside' && '#1D9BF0',
                                color: props.infotab == 'outside' && '#384047',
                            }}
                            className="p font-md p-color space"
                        >
                            with other people
                        </p>
                    </div>
                    {props.infotab == 'inside' ? (
                        <div>
                            <div className="d-flex align-items-center justify-content-between  mt-4">
                                <div className="search d-flex">
                                    <i className="far fa-search"></i>
                                    <input
                                        onChange={({ target: { value } }) => {
                                            setText(value)
                                        }}
                                        type="text"
                                        placeholder="Search contacts or enter e-mail"
                                    />
                                </div>
                                <div
                                    className="span-sharemodal"
                                    style={{ cursor: 'pointer' }}
                                    onClick={selectAllContact}
                                >
                                    Select All
                                </div>
                            </div>
                            {props.contactList
                                ? renderGoogleContacts().map((contact, i) => {
                                      {
                                          /* console.log(contact) */
                                      }
                                      return (
                                          <label
                                              key={i}
                                              className="checkbox-circle  ithemm d-flex"
                                              htmlFor={`check-${i}`}
                                          >
                                              <input
                                                  type="checkbox"
                                                  className="select-contact"
                                                  id={`check-${i}`}
                                              />
                                              <span className="label" />
                                              <img
                                                  src={contact.img}
                                                  alt={contact.first_name}
                                              />
                                              <p>
                                                  {contact.first_name +
                                                      ' ' +
                                                      contact.last_name}
                                              </p>
                                          </label>
                                      )
                                  })
                                : null}
                        </div>
                    ) : (
                        <div>
                            <div className="select">
                                <label htmlFor="select">File type</label>
                                <select name="select">
                                    <option value="" disabled selected hidden>
                                        Choose
                                    </option>
                                    <option value="">one</option>
                                    <option value="">two</option>
                                    <option value="">three</option>
                                </select>
                            </div>
                            <div className="copy-link">
                                <p>or copy link</p>
                                <div className="container-max d-flex align-items-center justify-content-between">
                                    <svg
                                        width="24"
                                        height="25"
                                        viewBox="0 0 24 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4.22202 20.278C4.6859 20.7425 5.23699 21.1108 5.84364 21.3617C6.45029 21.6126 7.10054 21.7411 7.75702 21.74C8.41365 21.7411 9.06404 21.6125 9.67085 21.3617C10.2777 21.1108 10.8289 20.7425 11.293 20.278L14.121 17.449L12.707 16.035L9.87902 18.864C9.31549 19.425 8.55269 19.7399 7.75752 19.7399C6.96235 19.7399 6.19955 19.425 5.63602 18.864C5.07453 18.3007 4.75923 17.5378 4.75923 16.7425C4.75923 15.9471 5.07453 15.1842 5.63602 14.621L8.46502 11.793L7.05102 10.379L4.22202 13.207C3.28583 14.1454 2.76007 15.4169 2.76007 16.7425C2.76007 18.068 3.28583 19.3395 4.22202 20.278ZM19.778 11.793C20.7137 10.8542 21.2392 9.58288 21.2392 8.25746C21.2392 6.93204 20.7137 5.66068 19.778 4.72196C18.8396 3.78577 17.5681 3.26001 16.2425 3.26001C14.9169 3.26001 13.6455 3.78577 12.707 4.72196L9.87902 7.55096L11.293 8.96496L14.121 6.13596C14.6846 5.57495 15.4474 5.25999 16.2425 5.25999C17.0377 5.25999 17.8005 5.57495 18.364 6.13596C18.9255 6.69923 19.2408 7.46213 19.2408 8.25746C19.2408 9.05279 18.9255 9.81569 18.364 10.379L15.535 13.207L16.949 14.621L19.778 11.793Z"
                                            fill="#AAB4BD"
                                        />
                                        <path
                                            d="M8.46401 17.45L7.04901 16.036L15.536 7.55005L16.95 8.96505L8.46401 17.45Z"
                                            fill="#AAB4BD"
                                        />
                                    </svg>
                                    <div className="input">
                                        <input type="text" />
                                        <p>copy link</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Modal.Body>
                <div>
                    <div className="d-flex justify-content-center buton pb-4">
                        <div className="close" onClick={props.onHide}>
                            {' '}
                            <button>Close</button>
                        </div>
                        <div className="share">
                            <button>Share</button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
        // ==============Share Contact Modal(in Three Points DropDown) End=============
    )
}

export default Detailes
