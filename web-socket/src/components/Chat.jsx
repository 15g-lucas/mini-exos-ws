import {useState} from "react";

export const Chat = ({socket}) => {
    const [message, setMessage] = useState('')

    const [responsesHistory, setResponsesHistory] = useState([])

    const sendMessage = (e) => {
        e.preventDefault()
        setResponsesHistory(prevState => [...prevState, message])
        const data = {
            "service": "message",
            "action": "send",
            "response": message
        }
        if (socket) {
            socket.send(JSON.stringify(data))
        }

        socket.onmessage = (event) => {
            if (JSON.parse(event.data).service === 'message') {
                setResponsesHistory(prevState => [...prevState, JSON.parse(event.data).response] )
            }
        }

        setMessage('')
    }

    if (!socket) return 

    return <>
        <div className="chat">
            <form onSubmit={sendMessage}>
                <div className="responses">
                    {responsesHistory.map((response, index) => {
                        console.log(index % 2)
                        return <div className={`${index % 2 === 1 ? 'response' : 'prompt'}`}>{response}</div>
                    })}
                </div>
                <div className="input-group mb-3 chat__input">
                    <input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        type="text" className="form-control" placeholder="Message..."
                        aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <button
                        type={'submit'}
                        className="input-group-text" id="basic-addon2">Send
                    </button>
                </div>
            </form>
        </div>
    </>
}