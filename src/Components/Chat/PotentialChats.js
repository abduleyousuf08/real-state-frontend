// import React, { useContext } from 'react'
// import { ChatContext } from '../../Context/ChatContext'
// import { AuthContext } from '../../Context/AuthContext'

// function PotentialChats() {
//     const { potentialChats, createChat } = useContext(ChatContext)
//     const { user } = useContext(AuthContext)
    
//     return (
//         <div>
//             {potentialChats && potentialChats.map((u, index)=>{
//                 return (
//                     <div 
//                         className=''
//                         key={index} 
//                         onClick={() => createChat(user._id, u._id)}
//                     >
//                         {u.name}
//                         <span className='user-online'></span>
//                     </div>
//                 );
//             })}
//         </div>
//     )
// }

// export default PotentialChats
