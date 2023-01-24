import React,{useState} from 'react'
import AchatParType from './Charts/AchatParType'
import GrossVolumeParProduct from './Charts/GrossVolumeParProduct'
import MoyenneDeRatingParSexe from './Charts/MoyenneDeRatingParSexe'
import HeaderCards from './layout/HeaderCards'

import CityParTypeCustomer from './Charts/CityParTypeCustomer'



function Index() {
    
  return (
    <>
        <h1 className='text-center text-primary pt-5 pb-5'>Entretien Technique Matious   <h1>Réalisé par :</h1><h1>BAHHAR Zakariya </h1></h1>
        <HeaderCards />
        <div className='container pt-5'>
            <div className='section-body'>
                <div className='bodyCard card  p-3 '>
                    {/* afficher la charte de Revenue brut ( Gross volume ) par catégorie ( Product Line ) */}
                        <GrossVolumeParProduct/>
                </div>
                <div className='bodyCard card  p-3'>
                    {/*afficher la charte qui visualise le Nombre total des achats par type de client */}
                        <AchatParType />
                </div>
            </div>
            <div className='section-body'>
                <div className='bodyCard card p-3 '>
                    {/*afficher la charte qui visualise Moyenne de rating par sexe */}
                    <MoyenneDeRatingParSexe />
                </div>
                <div className='bodyCard card  p-3 '>
                    {/* afficher la charte qui visualise la ville par type de client */}
                    <CityParTypeCustomer/>
                </div>
            </div>
        </div>  
        
        
  </>
  )
}

export default Index