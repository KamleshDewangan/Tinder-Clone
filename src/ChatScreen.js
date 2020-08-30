import React ,{useState}from 'react';
import Avatar from '@material-ui/core/Avatar'
import './ChatScreen.css'
function ChatScreen() {
    const [input,setInput]=useState();
    const [message,setMessage]=useState([

        {
            name:'Neha',
            msg:'hello How r  u?',
            img:'https://upload.wikimedia.org/wikipedia/commons/7/7b/Shraddha_Kapoor_promoting_Street_Dancer_3D.jpg'
        },
        {
            name:'Neha',
            msg:'tell me and reply me?',
            img:'https://upload.wikimedia.org/wikipedia/commons/7/7b/Shraddha_Kapoor_promoting_Street_Dancer_3D.jpg'
            
        },
        {
            msg:'I m gud '
        }


    ]);
   const submitHandler=e=>{
        e.preventDefault();
        setMessage([...message,{msg:input}])
        setInput("");
        
    }

    return (
        <div className="chatscreen">
            <p className="chatscreen__timestamp">You Matched With Neha on 20/08/2020</p>
           {message.map((m)=>
               m.name?
               (<div className="chatscreen__message">
                   <Avatar src={m.img}/>
                   <p className="chatscreen__messagetext">
                       {m.msg}
                   </p>
                   </div>
           ):
           (
               <div className="chatscreen__message">
                   <p className="chatscreen__usermsg">{m.msg}</p>
                   </div>

           )


           )}
            
            <form className="chatscreen__form">
                <input value={input} onChange={e=>setInput(e.target.value)} type="text" placeholder="Type a message... " className="chatscreen__input" />
                <button type="submit" onClick={submitHandler}>SEND</button>
            </form>
        </div>
    
    )
}

export default ChatScreen
