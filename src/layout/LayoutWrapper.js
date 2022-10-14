import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'

const LayoutWrapper = (props) => {
  return (
    <>
        <Header/>
            {props.children}
        <Footer/>
    </>
    )
}

export default LayoutWrapper