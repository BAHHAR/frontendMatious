import axios from 'axios'
import React,{useState,useEffect} from 'react'
import AchatParType from './Charts/AchatParType'
import GrossVolumeParProduct from './Charts/GrossVolumeParProduct'
import MoyenneDeRatingParSexe from './Charts/MoyenneDeRatingParSexe'
import HeaderCards from './HeaderCards'
import {Spin} from 'antd'
import CityParTypeCustomer from './Charts/CityParTypeCustomer'
import {PlusSquareFill} from 'react-bootstrap-icons'


function Index() {
    const [res, setres] = useState([])
    const [res1, setres1] = useState([])
    const [res2, setres2] = useState([])
    const [res3, setres3] = useState({})
    const [res4, setres4] = useState([])

    
    const getGrossVolumeParProduct=()=>{
        axios.get("http://localhost:5000/ProductsLine")
            .then((data)=>setres(data.data))
    }
    const getAchatParType=()=>{
        axios.get("http://localhost:5000/TotalAchatParType")
            .then((data)=>setres1(data.data))
    }
    const getMoyenneDeRatingParSexe=()=>{
        axios.get("http://localhost:5000/MoyenneRatingParGender")
            .then((data)=>setres2(data.data))
    }
    const getMiscellaneous=()=>{
        axios.get("http://localhost:5000/Miscellaneous")
            .then((data)=>setres3(data.data))
    }
    const getCityParTypeCustomer=()=>{
        axios.get("http://localhost:5000/CityParTypeCustomer")
            .then((data)=>setres4(data.data))
    }
    useEffect(() => {
      getGrossVolumeParProduct();
      getAchatParType();
      getMoyenneDeRatingParSexe();
      getMiscellaneous();
      getCityParTypeCustomer();
    }, [])
    
    if(res.length==0 || res1.length==0 || res2.length==0 || res4.length==0 || typeof(res3)=="undefined")
        return <div className='MySpin'>
            <Spin  size="large" >
                <div className='pb-5'/>
        <div className='text-primary container pt-5'>
            <h3>Loading</h3>
        </div>
      </Spin>
        </div>
  return (
    <>
    <h1 className='text-center text-primary pt-5 pb-5'>Entretien Technique Matious   <h1>Réalisé par :</h1><h1>BAHHAR Zakariya </h1></h1>
    <HeaderCards res={res3}/>
    <div className='container mt-5 text-center'>
    <button className='col btn btn-primary'>
        <PlusSquareFill size={24}/>
        <p className='pt-1'><b>Uploader Fichier csv</b></p>
    </button>
    </div>
    <div className='container pt-5'>
       <div className='section-body'>
            <div className='bodyCard card  p-3 '>
                    <GrossVolumeParProduct res={res}/>
            </div>
            <div className='bodyCard card  p-3'>
                    <AchatParType res={res1}/>
            </div>
        </div>
        <div className='section-body'>
            <div className='bodyCard card p-3 '>
                <MoyenneDeRatingParSexe res={res2}/>
            </div>
            <div className='bodyCard card  p-3 '>
                <CityParTypeCustomer res={res4}/>
            </div>
         </div>
    </div>  
        
        
  </>
  )
}

export default Index