import React, { useEffect, useContext } from 'react'
import { useGetGoogleContacts } from '../../../../Hook/Auth'
import { ContactContext } from '../../../../Context/ContactContext'
import defaultPhoto from '../../../../img/DefaultContact.png'

function List({ setShow }) {
    const { contactInfo } = useGetGoogleContacts()
    const { contactsForLayout } = useGetGoogleContacts()
    const { contactList, activeUser, setActiveUser } =
        useContext(ContactContext)

    const list = contactsForLayout ? contactsForLayout : contactList
    const isActive = (id = -1) => {
        return activeUser?.id === id && 'active'
    }
    useEffect(() => {
        if (contactsForLayout) {
            setActiveUser(contactsForLayout[0])
        } else {
            setActiveUser(contactList[0])
        }
    }, [contactsForLayout, contactList])

    return (
        // =================List Contact (first Section In Panel)====================
        <div className="content height-card">
            <div className="heders">
                <div className="heder-res">
                    <div className="icon-1">
                        <i className="fas fa-angle-left"></i>
                    </div>
                    <div className="text-heder">
                        <span>Contacts</span>
                    </div>
                    <div className="icons">
                        <i id="icon-2" className="far fa-search"></i>
                        <i id="icon-3" className="fal fa-plus"></i>
                    </div>
                </div>
            </div>
            {list.map((item, i) => {
                return (
                    <div
                        className={`contacts mb-1 color ${isActive(item.id)}`}
                        key={item.id || i}
                        onClick={() => setActiveUser(item)}
                    >
                        <div className="d-flex align-items-center">
                            <div className="box-img">
                                <img
                                    className="icon"
                                    src={item.photo || item.img || defaultPhoto}
                                    alt="image"
                                />
                            </div>
                            <p className="p ">
                                {item.first_name === null ? (
                                    <span className="bold_name">
                                        Name and family name not specified
                                    </span>
                                ) : (
                                    `${item.first_name} ${item.last_name}` ||
                                    `${item.first_name} ${item.last_name}`
                                )}
                            </p>
                        </div>
                        <div className="star">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4.70949 12.8906L8.06713 11.3445L8.95928 11.7659L11.2857 12.8647L10.7264 9.21582L11.4336 8.55613L12.724 7.35255L9.48948 6.81537L9.04394 5.96168L7.98499 3.93262L6.39959 6.8902L5.39517 7.04646L3.29692 7.37288L5.27222 9.21585L5.13084 10.1391L4.70949 12.8906ZM3.19974 15.5807C3.03414 15.5807 2.86934 15.533 2.73014 15.439C2.49014 15.2763 2.36533 15.0032 2.40774 14.7286L3.15094 9.87526L0.234122 7.15385C0.0221212 6.95611 -0.0530793 6.66509 0.0381213 6.39869C0.129322 6.1323 0.372523 5.93605 0.667725 5.89053L5.06615 5.20626L7.28376 1.0693C7.42056 0.814845 7.72057 0.646949 8.00377 0.656649C8.30857 0.658142 8.58537 0.820814 8.71897 1.07676L10.8422 5.14507L15.3398 5.89202C15.6334 5.94052 15.8734 6.13752 15.963 6.40243C16.0526 6.66807 15.9766 6.9576 15.7654 7.15385L12.8478 9.87526L13.5918 14.7286C13.6334 15.0047 13.5086 15.2793 13.2654 15.4412C13.023 15.6039 12.703 15.6255 12.4382 15.5002L8.05577 13.4302L3.55414 15.5031C3.44214 15.5554 3.32054 15.5807 3.19974 15.5807Z"
                                    fill="#AAB4BD"
                                />
                            </svg>
                        </div>
                    </div>
                )
            })}
        </div>
        // =================List Contact (first Section In Panel)End====================
    )
}

export default List
