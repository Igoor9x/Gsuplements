import React from 'react'
import './SearchBarResponsive.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function SearchBarResponsive() {
  return (
    <div className='containerSearchBarResponsive'>
      <div className='maxWidthSearchBarResponsive'>
        <input type='text' placeholder='Encontre o suplemento ideal para você' />
        <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
      </div>
    </div>
  )
}

export default SearchBarResponsive
