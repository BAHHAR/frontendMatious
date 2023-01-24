import React,{useState,useEffect} from 'react'
import { Column } from '@ant-design/plots';
import GetMoyenneDeRatingParSexeService from '../../Services/MoyenneDeRatingParSexe.service';
import {Spin} from 'antd'

function MoyenneDeRatingParSexe() {

    // variable d'état pour stocker les données du serveur backend
        const [data, setdata] = useState([])

        
    // utilisation du hook useEffect pour récupérer les données du serveur backend lorsque le composant est monté
        useEffect(() => {
            // fonction asynchrone pour récupérer les données et mettre à jour l'état
            const result=async()=>setdata(await GetMoyenneDeRatingParSexeService());
            result();
        }, [])
        
    
      const config = {
        data,
        xField: 'gender',
        yField: 'avg',
        seriesField: 'gender',
    
       
        
      };


      if(data.length==0) 
            return <div className='MySpin'>
                        <Spin  size="large" >
                            <div className='pb-5'/>
                            <div className='text-primary container pt-5'>
                                <h3>Loading</h3>
                            </div>
                        </Spin>
                    </div> 


      return <div className='container'>
         <h4 className='text-center pt-2 pb-2'>Moyenne de rating par sexe </h4>
         <Column {...config} />
      </div>;
}

export default MoyenneDeRatingParSexe