import {React} from 'react'
import "./Page.css"
import Navbar from "../Navbar/Navbar" 
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Page({children}) {
    return (
        <div>
            <Header/>
            <hr/>
            <Navbar/>
            <hr/>
            {children}
            <Footer/>
        </div>
        
        
    )
}

export default Page

