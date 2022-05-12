import React ,{useContext, useEffect, useState}from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDownload} from '@fortawesome/free-solid-svg-icons'
import { Songs } from '../context';


export default function ListSong() {
 
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setidSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setidSong(idSong)
    handleSetSong(idSong)
  };
  useEffect(() => {
    setidSong(song.id)
  }, [song])
  return (
    <div className='col-span-2 bg-slate-700 overflow-y-scroll'>
        <table className='w-full text-1xl '>
            <thead className=' text-white '>
                  <tr>
                    <th>#</th>
                    <th className='text-left'>Title</th>
                    <th>Author</th>
                    <th>    <FontAwesomeIcon icon={faDownload} /></th>


                  </tr>
            </thead>
            <tbody>
               { DataSongs.map((song,index)=>(
                <tr
              key={index}
              className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 ${idSong === song.id && 'bg-slate-600 text-teal-400'}`}
              onClick={() => handlePlaySong(song.id)}
            >
                        <td className='font-bold ' >{index+1}</td>
                        <td className='text-left '>{song.name}</td> 
                        <td>{song.author}</td>
                        <td>
                        <a href={song.url}/>
                        <button id='buttonDownload'>    <FontAwesomeIcon icon={faDownload} /></button>
                    
                        </td>
                 </tr>
               ))}


              
            </tbody>



        </table>
    
    </div>
  )
}
// import React, { useContext, useEffect, useState } from "react";
// import { Songs } from "../context_1";

// export default function ListSongs() {
//   const { DataSongs, handleSetSong, song } = useContext(Songs);
//   const [idSong, setidSong] = useState(0);
//   const handlePlaySong = (idSong) => {
//     setidSong(idSong)
//     handleSetSong(idSong)
//   };
//   useEffect(() => {
//     setidSong(song.id)
//   }, [song])
//   return (
//     <div className="col-span-2  overflow-y-scroll">
//       <table className="table-auto w-full">
//         <thead className="text-white h-12">
//           <tr>
//             <th className="w-[10%]">#</th>
//             <th className="text-left">Title</th>
//             <th className="w-[10%]">Author</th>
//             <th className="w-[10%]">
//               <i className="fa fa-download"></i>
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {DataSongs.map((song, index) => (
//             <tr
//               key={index}
//               className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 ${idSong === song.id && 'bg-slate-600 text-teal-400'}`}
//               onClick={() => handlePlaySong(song.id)}
//             >
//               <td className="text-center">{index + 1}</td>
//               <td>{song.name}</td>
//               <td className="text-center">{song.author}</td>
//               <td className="text-center">
//                 <a href={song.url}>
//                   <i className="fa fa-download"></i>
//                 </a>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
