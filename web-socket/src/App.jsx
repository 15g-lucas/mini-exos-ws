import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Dashboard} from "./components/Dashboard.jsx";
import {Chat} from "./components/Chat.jsx";

function App() {
    const [socket, setSocket] = useState(null)
    const [kpi, setKpi] = useState(null)
    
    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080')
        setSocket(ws)

        ws.onmessage = (event) =>{
            if(JSON.parse(event.data).service === 'KPI'){
               setKpi(JSON.parse(event.data).response)
            }
        }

    }, []);
    
    return <>
        <div style={{display: 'flex'}}>
            <Dashboard kpi={kpi}/>
            <Chat socket={socket}/>
        </div>
    </>
}

export default App
