import React from 'react'
import Page from "../../components/Page/Page"
import Card from '../../components/Card/Card'
import picture from "../../static/cvPhoto.png"
import "./Home.css"

export default function Home() {
    return (
        <div>
        <hr/>
        <Page>
        <Card
            avatar={picture}
            id="Marcos Santiago Anastasio Campot"
            name="FrontEnd Developer"
            gender="Buenos Aires"
            />
        </Page>   
        </div>
        
    )
}
