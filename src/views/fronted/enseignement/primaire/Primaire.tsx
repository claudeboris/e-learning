import React from 'react'
//import Header from '../../../../layouts/fronted/header/Header'
import './Primaire.css'
import HeaderEnseignement from '../../../../components/fronted/enseignement/HeaderEnseignement'

type Props = {}

const Primaire = (props: Props) => {
  return (
    <div className='body-enseignement'>
        <HeaderEnseignement/>
    </div>
  )
}

export default Primaire