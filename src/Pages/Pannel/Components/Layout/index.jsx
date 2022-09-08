import React from 'react'
import { Container } from 'react-bootstrap'
import Menu from '../Menu'
import Header from '../Header'
import Footer from '../Footer'
import ContactProvider from '../../../../Context/ContactContext'

function Layout({ children }) {
    return (
        // ==================Panel Layout (merge menu,header,footer)===================
        <ContactProvider>
            <Container fluid>
                <div className="row">
                    <div className="side-cont p-0">
                        <Menu />
                    </div>
                    <div className="main-cont p-0">
                        <Header />
                        <div className="pannel-main">{children}</div>
                        <Footer />
                    </div>
                </div>
            </Container>
        </ContactProvider>
    )
}

export default Layout
