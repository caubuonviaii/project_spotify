import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMusic} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <div className='h-24 bg-slate-900 text-white text-center leading-[6rem] text-3xl'>

            <FontAwesomeIcon icon={faMusic} />
                 Spotify

    </div>
    
  )
}
