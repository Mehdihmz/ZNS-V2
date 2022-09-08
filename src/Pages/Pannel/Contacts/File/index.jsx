import React, { useEffect, useRef, useState } from 'react'

const Files = () => {
    const refTable = useRef()
    const menu = useRef()
    const [showMenu, setshowMenu] = useState(false)
    const [positionMenu, setpositionMenu] = useState({ x: 0, y: 0 })
    // ===========Method For Close Modal When Click outSide===========
    useEffect(() => {
        if (showMenu) {
            function handleClickOutside(event) {
                if (menu.current && !menu.current.contains(event.target)) {
                    setshowMenu(false)
                }
            }
            document.addEventListener('mousedown', handleClickOutside)
        }
    }, [showMenu])
    // ===============Open File Menu===============
    const openMenu = (event) => {
        event.preventDefault()
        const { clientX, type, clientY } = event
        console.log(type)
        const { top, left } = refTable.current.getBoundingClientRect()
        if (type === 'contextmenu') {
            setpositionMenu({ x: clientX - left, y: clientY - top })
            setshowMenu(true)
        }
    }
    useEffect(() => {
        if (document.getElementsByClassName('file')) {
            const files = document.getElementsByClassName('file')

            ;[].forEach.call(files, (element) => {
                element.addEventListener('contextmenu', openMenu)
            })
        }
    }, [])

    return (
        // =============File Section (Buttons&information)===================
        <div className="files">
            <div className="header-files">
                <div className="add-file">
                    <i className="fal fa-plus" /> <span>Add File</span>
                </div>
                <ul className="sort">
                    <li className="item-sort activ">All</li>
                    <li className="item-sort">Docs</li>
                    <li className="item-sort">Photo</li>
                    <li className="item-sort">Audio</li>
                    <li className="item-sort">Links</li>
                    <li className="item-sort">Other</li>
                </ul>
            </div>
            <div className="content-files">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <div className="title">
                                    <span>Name</span>
                                    <div className="sort">
                                        <i className="fas fa-triangle up"></i>
                                        <i className="fas fa-triangle down"></i>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="title">
                                    <span>Owner</span>
                                    <div className="sort">
                                        <i className="fas fa-triangle up"></i>
                                        <i className="fas fa-triangle down"></i>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="title">
                                    <span>Last modified</span>
                                    <div className="sort">
                                        <i className="fas fa-triangle up"></i>
                                        <i className="fas fa-triangle down"></i>
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody id="parentMenu" ref={refTable}>
                        <tr className="file">
                            <td>
                                <div className="name">
                                    <img src="./images/Excel.png" alt="" />
                                    <div>
                                        <span className="text">
                                            Document 2.xls
                                        </span>
                                        <span className="size">16.5 MB</span>
                                    </div>
                                </div>
                            </td>
                            <td className="owner">Me</td>
                            <td className="date">
                                <span>22/09/2021</span>
                                <span className="creator">Me</span>
                            </td>
                        </tr>
                        <tr className="file">
                            <td>
                                <div className="name">
                                    <img src="./images/Excel.png" alt="" />
                                    <div>
                                        <span className="text">
                                            Document 2.xls
                                        </span>
                                        <span className="size">16.5 MB</span>
                                    </div>
                                </div>
                            </td>
                            <td className="owner">Me</td>
                            <td className="date">
                                <span>22/09/2021</span>
                                <span className="creator">Me</span>
                            </td>
                        </tr>
                        <tr className="file">
                            <td>
                                <div className="name">
                                    <img src="./images/Excel.png" alt="" />
                                    <div>
                                        <span className="text">
                                            Document 2.xls
                                        </span>
                                        <span className="size">16.5 MB</span>
                                    </div>
                                </div>
                            </td>
                            <td className="owner">Me</td>
                            <td className="date">
                                <span>22/09/2021</span>
                                <span className="creator">Me</span>
                            </td>
                        </tr>
                        <div
                            className={`menu ${showMenu ? 'd-flex' : 'd-none'}`}
                            ref={menu}
                            style={{
                                top: positionMenu.y,
                                left: positionMenu.x,
                            }}
                            id="menu-actions"
                        >
                            <ul>
                                <div className="menu-list">
                                    <div className="menu-icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div>
                                        <li className="menu-li">view file</li>
                                    </div>
                                </div>
                                <div className="menu-list">
                                    <div className="menu-icon active-menu">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div>
                                        <li className="menu-li">share file</li>
                                    </div>
                                </div>
                                <div className="menu-list">
                                    <div className="menu-icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div>
                                        <li className="menu-li">
                                            add to event
                                        </li>
                                    </div>
                                </div>
                                <div className="menu-list">
                                    <div className="menu-icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div>
                                        <li className="menu-li">add to task</li>
                                    </div>
                                </div>
                                <div className="menu-list">
                                    <div className="menu-icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div>
                                        <li className="menu-li">delete</li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </tbody>
                </table>
            </div>
        </div>
        // =============File Section (Buttons&information)End===================
    )
}

export default Files
