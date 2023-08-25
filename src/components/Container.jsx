import { useEffect } from "react";

import ChatList from "./ChatList";
import ChatForm from "./ChatForm";
import { useChat } from "../context/ChatContext";

function Container() {
    const { setMessages } = useChat();

    useEffect(() => {


    })

    return (
        <div  className="App">
        <ChatList/>
        <ChatForm />

        </div>
    )
}

export default Container;