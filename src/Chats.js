import React from 'react'
import './Chats.css'
import Chat from "./Chat";


import IconButton from '@material-ui/core/IconButton'
import './Chats.css'
function Chats() {
    // const history=useHistory();
    return (
        <div className="chats">
          
         
            <Chat 
                name="Neha"

                message="hello r  r u?"

                proPic="https://scontent.fbho4-2.fna.fbcdn.net/v/t31.0-8/10387066_681248955328544_5182486362524355724_o.jpg?_nc_cat=109&_nc_sid=174925&_nc_ohc=nuHrK5gPZPoAX85QFvX&_nc_ht=scontent.fbho4-2.fna&oh=e9e8dbed77671507bc41dc843774aedd&oe=5F704A2F"
                timeStamp="35 minutes ago"
            />
          
          
            
      
        

            <Chat  name="Priya"

                message="whtsapp?"

                proPic="https://scontent.fbho4-2.fna.fbcdn.net/v/t1.0-9/95896393_2964691493650934_2544153315491446784_o.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=jXcr6VrSePsAX-zSRbP&_nc_ht=scontent.fbho4-2.fna&oh=1254633f97166e68aed608c49e2434b1&oe=5F6DE549"
                timeStamp="1 hour ago"
            />
        </div>
    )
}

export default Chats
