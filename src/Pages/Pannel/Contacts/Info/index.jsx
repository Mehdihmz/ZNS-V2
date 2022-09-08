import React, { useContext, useState } from 'react'
import { Col } from 'react-bootstrap'
import { ContactContext } from '../../../../Context/ContactContext'

function Info({
    sharemodalShow,
    setShareModalShow,
    infotab,
    setInfoTab,
    activeUser,
}) {
    return (
        <div>
            {/* ============Info Section================ */}
            <div className="row space media-border-info ms-1 ">
                {/* ===========Phone Section in Info============ */}
                <Col className="mb-3 " lg={4}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="pdn-svg d-flex">
                            <svg
                                width="16"
                                height="20"
                                viewBox="0 0 16 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.3713 17.6206C9.2887 17.0222 6.27146 15.36 4.37771 12.7136C1.62667 8.86979 1.95568 3.87466 2.21337 1.96L5.71314 2.54597L5.80263 5.52519L4.606 5.89171C4.24912 6.00141 4.00636 6.32979 4.00603 6.7022C4.0054 8.69689 5.14379 12.8607 9.46398 14.3445C9.81321 14.4606 10.2049 14.3438 10.4247 14.0443L11.1676 13.0332L13.9618 14.0937L13.3713 17.6206ZM15.2164 12.7513L11.1672 11.2131C10.8078 11.0755 10.4059 11.1966 10.1803 11.5047L9.44088 12.5103C6.58599 11.2366 5.91245 8.53034 5.75388 7.31156L6.92062 6.9538C7.28644 6.84215 7.53242 6.49969 7.52061 6.1175L7.38993 1.79464C7.37841 1.39013 7.0821 1.05064 6.6816 0.98358L1.6544 0.141869C1.20865 0.0672378 0.78255 0.353737 0.684698 0.794118C0.617924 1.09519 -0.907247 8.22892 2.98896 13.6855C5.09972 16.641 8.37452 18.5037 12.7356 19.2338C13.1411 19.3017 13.5552 19.3599 13.9786 19.4084C14.4274 19.4595 14.8375 19.1505 14.912 18.7054L15.7526 13.6849C15.8194 13.2858 15.5945 12.8955 15.2164 12.7513Z"
                                    fill="#AAB4BD"
                                />
                            </svg>
                            <p className="p p-color left">
                                Phone{' '}
                                <span className="media-circle-info">:</span>
                            </p>
                        </div>
                        <i className="fal fa-plus media-plus-icon" />
                    </div>
                </Col>
                <Col className="mb-3 media-col9-margin" lg={8}>
                    <div>
                        <div className="namber-color">
                            <span>
                                <p
                                    className="p gray"
                                    style={{ marginLeft: '-0.5rem' }}
                                >
                                    {activeUser?.tells &&
                                        activeUser?.tells?.map((e, i) => (
                                            <React.Fragment key={e + i}>
                                                {i !== 0 && <br />}
                                                {e}
                                            </React.Fragment>
                                        ))}
                                    {activeUser?.phone}
                                </p>
                            </span>
                        </div>
                    </div>
                </Col>
                {/* ===========Phone Section in Info============ */}
                {/* ===========Email Section in Info============ */}

                <div className="row space media-border-info">
                    <Col className="mb-3" lg={4}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 17 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M1.69996 13.6001V4.60198L7.89901 10.801C8.06476 10.9668 8.28235 11.0501 8.49995 11.0501C8.71755 11.0501 8.93515 10.9668 9.1009 10.801L15.3 4.60198V13.6001H1.69996ZM14.0981 3.40036L8.50001 8.99846L2.90191 3.40036H14.0981ZM16.15 1.70018H0.85C0.3808 1.70018 0 2.08013 0 2.55018V14.4502C0 14.9202 0.3808 15.3002 0.85 15.3002H16.15C16.6192 15.3002 17 14.9202 17 14.4502V2.55018C17 2.08013 16.6192 1.70018 16.15 1.70018Z"
                                        fill="#B8BCC2"
                                    />
                                </svg>

                                <p className="p p-color left">
                                    Email{' '}
                                    <span className="media-circle-info">:</span>
                                </p>
                            </div>
                            <i className="fal fa-plus media-plus-icon" />
                        </div>
                    </Col>
                    <Col className="mb-3 media-col9-margin" lg={8}>
                        {activeUser?.email === '' ? (
                            <p className="p gray">-</p>
                        ) : (
                            <p className="p gray">{activeUser?.email}</p>
                        )}
                    </Col>
                    {/* ===========Email Section in Info============ */}
                </div>
                <div className="row space media-border-info">
                    {/* ===========Website Section in Info============ */}

                    <Col className="mb-3" lg={4}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 17 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12.7158 9.3503H15.2411C14.9181 11.9258 13.1501 14.0525 10.7761 14.9C11.6473 13.6556 12.5424 11.8111 12.7158 9.3503ZM4.28471 9.3503C4.45726 11.8111 5.35316 13.6556 6.22441 14.9C3.84951 14.0525 2.08236 11.9258 1.75936 9.3503H4.28471ZM4.28471 7.6502H1.75936C2.08236 5.07385 3.84951 2.94715 6.22441 2.0997C5.35316 3.3441 4.45726 5.1886 4.28471 7.6502ZM5.98553 7.65035C6.22863 4.68045 7.69998 2.80705 8.49983 1.99445C9.29968 2.80705 10.771 4.6813 11.015 7.65035H5.98553ZM5.98553 9.3503H11.015C10.7719 12.3202 9.29883 14.1945 8.49983 15.0054C7.70083 14.1927 6.22863 12.3194 5.98553 9.3503ZM12.6997 7.65034C12.5246 5.18959 11.6432 3.33829 10.7728 2.09899C13.1494 2.94559 14.9174 5.07314 15.2412 7.65034H12.6997ZM-0.000244141 8.5003C-0.000244141 13.1864 3.81286 17.0003 8.49976 17.0003C13.1867 17.0003 16.9998 13.1864 16.9998 8.5003C16.9998 3.8134 13.1867 0.000301361 8.49976 0.000301361C3.81286 0.000301361 -0.000244141 3.8134 -0.000244141 8.5003Z"
                                        fill="#B8BCC2"
                                    />
                                </svg>
                                <p className="p p-color left">
                                    Website{' '}
                                    <span className="media-circle-info">:</span>
                                </p>
                            </div>
                            <i className="fal fa-plus media-plus-icon" />
                        </div>
                    </Col>
                    <Col className="mb-3 media-col9-margin" lg={8}>
                        <p className="p gray">{activeUser?.website || '-'}</p>
                    </Col>
                    {/* ===========Website Section in Info============ */}
                </div>
                <div className="row space media-border-info">
                    {/* ===========Social Section in Info============ */}

                    <Col className="mb-3" lg={4}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 17 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M16.6546 0.166196C16.3971 -0.0233544 16.0554 -0.0531044 15.7698 0.0896956L0.469791 7.7397C0.192691 7.87825 0.0124914 8.15705 0.000591402 8.4673C-0.0121586 8.7767 0.146791 9.0691 0.411991 9.2289L5.94974 12.5515V16.1496C5.94974 16.4445 6.10274 16.7174 6.35349 16.8729C6.48949 16.9571 6.64504 16.9996 6.79974 16.9996C6.92979 16.9996 7.05984 16.9698 7.17969 16.9103L10.4717 15.2639L13.162 16.8789C13.2971 16.9588 13.4476 16.9996 13.5997 16.9996C13.7213 16.9996 13.8428 16.9741 13.9559 16.9214C14.2117 16.8041 14.3919 16.5669 14.4378 16.289L16.9878 0.988996C17.0405 0.673646 16.9122 0.355746 16.6546 0.166196ZM12.9665 14.7785L7.9991 11.7984L14.8033 3.75657L12.9665 14.7785ZM7.64975 14.7743V13.5707L8.7437 14.2277L7.64975 14.7743ZM12.8263 3.46158L6.52267 10.9118L2.61437 8.56753L12.8263 3.46158Z"
                                        fill="#B8BCC2"
                                    />
                                </svg>
                                <p className="p p-color left ">
                                    Social{' '}
                                    <span className="media-circle-info">:</span>
                                </p>
                            </div>
                            <i className="fal fa-plus media-plus-icon" />
                        </div>
                    </Col>
                    <Col className="mb-3 media-col9-margin" lg={8}>
                        <img
                            className="icon p-right"
                            src="./images/twitter.png"
                            alt="image"
                        />
                        <img
                            className="icon p-right"
                            src="./images/facebook.png"
                            alt="image"
                        />
                        <img
                            className="icon"
                            src="./images/linkedin.png"
                            alt="image"
                        />
                    </Col>
                    {/* ===========Social Section in Info============ */}
                </div>
                <div className="row space media-border-info">
                    {/* ===========DateOfBirthday Section in Info============ */}

                    <Col className="mb-3" lg={4}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <img
                                    className="icon"
                                    src="./images/2 Tone.png"
                                    alt="image"
                                />
                                <p className="p p-color left">
                                    Date of birthday{' '}
                                    <span className="media-circle-info">:</span>
                                </p>
                            </div>
                            <i className="fal fa-plus media-plus-icon" />
                        </div>
                    </Col>
                    <Col className="mb-3 media-col9-margin" lg={8}>
                        <div className="namber-color">
                            <p className="p gray">
                                {activeUser?.event_birthday}
                            </p>
                        </div>
                    </Col>
                    {/* ===========DateOfBirthday Section in Info============ */}
                </div>
                <div className="row space media-border-info">
                    {/* ===========Location Section in Info============ */}

                    <Col className="mb-3" lg={4}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <svg
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M9.50002 0.00050354C5.30957 0.00050354 1.90002 3.4091 1.90002 7.6005C1.90002 14.7198 8.73717 18.7089 9.02882 18.8751C9.17417 18.9587 9.33757 19.0005 9.50002 19.0005C9.66247 19.0005 9.82588 18.9587 9.97122 18.8751C10.2629 18.7089 17.1 14.7198 17.1 7.6005C17.1 3.4091 13.6905 0.00050354 9.50002 0.00050354ZM9.49907 16.9229C8.05412 15.9434 3.80002 12.6308 3.80002 7.6005C3.80002 4.45695 6.35647 1.9005 9.50002 1.9005C12.6436 1.9005 15.2 4.45695 15.2 7.6005C15.2 12.6127 10.9421 15.9396 9.49907 16.9229ZM9.50002 9.5C8.45217 9.5 7.60002 8.64785 7.60002 7.6C7.60002 6.55215 8.45217 5.7 9.50002 5.7C10.5479 5.7 11.4 6.55215 11.4 7.6C11.4 8.64785 10.5479 9.5 9.50002 9.5ZM9.50002 3.8C7.40432 3.8 5.70002 5.5043 5.70002 7.6C5.70002 9.6957 7.40432 11.4 9.50002 11.4C11.5957 11.4 13.3 9.6957 13.3 7.6C13.3 5.5043 11.5957 3.8 9.50002 3.8Z"
                                        fill="#B8BCC2"
                                    />
                                </svg>
                                <p className="p p-color left">
                                    Location{' '}
                                    <span className="media-circle-info">:</span>
                                </p>
                            </div>
                            <i className="fal fa-plus media-plus-icon" />
                        </div>
                    </Col>
                    <Col className="mb-3 media-col9-margin" lg={8}>
                        <p className="p pb gray">
                            <span className="p gray">
                                {activeUser?.location?.map((e, i) => (
                                    <React.Fragment key={e + i}>
                                        {i !== 0 && <br />}
                                        {e}
                                    </React.Fragment>
                                ))}
                            </span>
                        </p>
                    </Col>
                    {/* ===========Location Section in Info============ */}
                </div>
                <div className="row space media-border-info">
                    {/* ===========Education Section in Info============ */}

                    <Col className="mb-3" lg={4}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <img
                                    className="icon"
                                    src="./images/tabler_school.png"
                                    alt="image"
                                />
                                <p className="p p-color left">
                                    Education{' '}
                                    <span className="media-circle-info">:</span>
                                </p>
                            </div>
                            <i className="fal fa-plus media-plus-icon" />
                        </div>
                    </Col>
                    <Col className="mb-3 media-col9-margin" lg={8}>
                        <p className="p pb gray">Education</p>
                        <p className="p pb light f">Education</p>
                        <p className="p pb light f">Education</p>
                    </Col>
                    {/* ===========Education Section in Info============ */}
                </div>
                <div className="row space media-border-info">
                    {/* ===========WorkExperience Section in Info============ */}

                    <Col className="mb-3" lg={4}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <img
                                    className="icon"
                                    src="./images/Vector.png"
                                    alt="image"
                                />
                                <p className="p p-color left">
                                    Work{' '}
                                    <span className="media-circle-info">:</span>
                                </p>
                            </div>
                            <i className="fal fa-plus media-plus-icon" />
                        </div>
                    </Col>
                    <Col className="mb-3 media-col9-margin" lg={8}>
                        <React.Fragment key={1}>
                            <p className="p pb gray">
                                {activeUser?.work_experience}
                                {activeUser?.work === ''
                                    ? '-'
                                    : activeUser?.work}
                            </p>
                            <p className="p pb light f">Date</p>
                        </React.Fragment>
                    </Col>
                    {/* ===========WorkExperience Section in Info============ */}
                </div>
            </div>
            {/* ============Info Section End================ */}
        </div>
    )
}

export default Info
