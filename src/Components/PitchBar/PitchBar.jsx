import React from 'react'
import './PitchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faBarcode, faDollarSign, faMessage, faCreditCard } from '@fortawesome/free-solid-svg-icons'

function PitchBar() {
  return (
    <div className='containerPitchBar'>
      <div className='cardPitchBar'>
        <span className='icon'><FontAwesomeIcon icon={faTruck} /></span>
        <div className='elementPitchBar'>
            <span>FRETE GRÁTIS</span>
            <a>Clique aqui</a>
        </div>
      </div>
      <div className='cardPitchBar'>
        <span className='icon'><FontAwesomeIcon icon={faBarcode} /></span>
        <div className='elementPitchBar'>
            <p>10% Off</p>
            <span>NO BOLETO</span>
        </div>
      </div>
      <div className='cardPitchBar'>
        <span className='icon'><FontAwesomeIcon icon={faDollarSign} /></span>
        <div className='elementPitchBar'>
            <p>CASHBACK</p>
            <span><a>G PONTOS</a></span>
        </div>
      </div>
      <div className='cardPitchBar'>
        <span className='icon'><FontAwesomeIcon icon={faMessage} /></span>
        <div className='elementPitchBar'>
            <span>NUTRICIONISTA <br></br>ONLINE</span>
            <a>Clique aqui</a>
        </div>
      </div>
      <div className='cardPitchBar'>
      <span className='icon'><FontAwesomeIcon icon={faCreditCard} /></span>
        <div className='elementPitchBar'>
            <span>6X SEM JUROS</span>
        </div>
      </div>
    </div>
  )
}

export default PitchBar
