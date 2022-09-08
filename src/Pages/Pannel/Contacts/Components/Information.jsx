import React, { useContext } from 'react'
import { ContactContext } from '../../../../Context/ContactContext'
import defaultPhoto from '../../../../img/DefaultContact.png'

function Information(
    {
        // profile = {}
    }
) {
    const { activeUser } = useContext(ContactContext)
    return (
        // ==============Middle Panel Section (Create Event) ===================
        <div className="content  align-items-center height-card">
            <div className="event">
                <div className="img-selected">
                    <div className="card-small">
                        <span>Hot</span>
                    </div>
                    <div className="icon-cont">
                        <img
                            className="icon"
                            src={
                                activeUser?.photo ||
                                activeUser?.img ||
                                defaultPhoto
                            }
                            alt={activeUser?.uname}
                        />
                    </div>
                </div>
                <div className="create-btn">
                    <button>Create event</button>
                </div>
                <div className="d-flex bottom-section-event mb-1">
                    <div className="img-group d-flex ms-4 mb-5 align-items-center justify-content-center ">
                        <div className="user-img ms-1">
                            <img
                                className="icon margin"
                                src="./images/user2.jfif"
                                alt="user-2"
                            />
                        </div>
                        <div className="user-img">
                            <img
                                className="icon margin"
                                src="./images/user3.jfif"
                                alt="user-3"
                            />
                        </div>
                        <div className="user-img">
                            <img
                                className="icon margin"
                                src="./images/user4.jfif"
                                alt="image"
                            />
                        </div>
                        <div className="user-img">
                            <img
                                className="icon margin"
                                src="./images/user5.jfif"
                                alt="image"
                            />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center text-center  align-items-center ms-5">
                        <p
                            className="p small pt-3 text-center ms-1 mb-4"
                            style={{ color: '#1d9bf0' }}
                        >
                            Common 10
                        </p>
                        <div className="d-flex ms-3 mb-3">
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M14.7761 0.520791C16.2844 0.503719 17.525 1.7049 17.5566 3.21302L17.662 8.24408C17.6777 8.99324 17.387 9.71636 16.8571 10.2462L10.4298 16.6735C9.35587 17.7475 7.61467 17.7475 6.54073 16.6735L1.59098 11.7238C0.517036 10.6498 0.517036 8.90862 1.59098 7.83468L8.04506 1.3806C8.55316 0.872495 9.23996 0.58345 9.95848 0.575317L14.7761 0.520791ZM16.0569 3.24444C16.0425 2.55892 15.4787 2.01294 14.793 2.02069L9.97546 2.07522C9.64886 2.07892 9.33668 2.2103 9.10572 2.44126L4.62703 6.91995L11.3445 13.6375L15.7965 9.18555C16.0373 8.94471 16.1694 8.61602 16.1623 8.27549L16.0569 3.24444ZM10.2839 14.6981L3.56637 7.98061L2.65164 8.89534C2.16348 9.3835 2.16348 10.175 2.65164 10.6631L7.60139 15.6129C8.08954 16.101 8.881 16.101 9.36915 15.6129L10.2839 14.6981ZM13.7614 4.59432C13.7866 4.61952 13.8275 4.61952 13.8526 4.59432C13.8778 4.56913 13.8778 4.52828 13.8526 4.50308C13.8275 4.47789 13.7866 4.47789 13.7614 4.50308C13.7362 4.52828 13.7362 4.56913 13.7614 4.59432ZM13.0543 5.30143C13.47 5.71715 14.144 5.71715 14.5598 5.30143C14.9755 4.88571 14.9755 4.2117 14.5598 3.79598C14.144 3.38026 13.47 3.38026 13.0543 3.79598C12.6386 4.2117 12.6386 4.88571 13.0543 5.30143Z"
                                    fill="#1d9bf0"
                                />
                            </svg>
                            <p
                                className="p p-color padding"
                                style={{ color: '#1d9bf0' }}
                            >
                                5
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // ==============Middle Panel Section (Create Event) End ===================
    )
}

export default Information
