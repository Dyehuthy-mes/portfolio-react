import React from 'react'
import Page from "../../components/Page/Page"
import Card from '../../components/Card/Card'
import picture from "../../static/faceAbout.png"



function AboutMe() {
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

export default AboutMe
