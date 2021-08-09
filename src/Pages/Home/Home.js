import React,{useState} from 'react'
import Page from "../../components/Page/Page"
import Card from '../../components/Card/Card'
import "./Home.css"

export default function Home() {
    const [stylehook,setStyleHook] = useState("clase1")
    const toggle = ()=> {
        if(stylehook==="clase1"){
            setStyleHook("clase2");
        }else{
            setStyleHook("clase1")
        }
    }
    return (
        <div>
        <hr/>
        <Page>
            <Card
            avatar="https://e7.pngegg.com/pngimages/676/661/png-clipart-neon-genesis-evangelion-shinji-ikari-raising-project-neon-genesis-evangelion-shinji-ikari-raising-project-yoshiyuki-sadamoto-misato-katsuragi-mug-child-face.png" 
            id="003356779912" 
            name="Shinji" 
            gender="male"
            />
            <h1 className={stylehook}>Prueba hooks</h1>
            <button onClick={()=>toggle()}>Toggle</button>
        </Page>   
        </div>
        
    )
}
