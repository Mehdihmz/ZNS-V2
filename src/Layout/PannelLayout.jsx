import React from 'react'
import './index.scss'
import { Container } from 'react-bootstrap'
import { PannelFooter, PannelHeader, PannelSidebar } from '../components'

function PannelLayout({ children }) {
    return (
        <Container fluid>
            <div className="row">
                <div className="side-cont p-0 ">
                    <PannelSidebar />
                </div>
                <div className="main-cont p-0">
                    <PannelHeader />
                    <div className="pannel-main">{children}</div>
                    <PannelFooter />
                </div>
            </div>
        </Container>
    )
}

export default PannelLayout
