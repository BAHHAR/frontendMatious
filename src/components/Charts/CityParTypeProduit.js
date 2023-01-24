import React,{useState,useEffect}  from 'react'
import { Column } from '@ant-design/plots';
import GetCityParTypeProduitService from '../../Services/CityParTypeCustomer.service';
import {Spin} from 'antd'

function CityParTypeProduit() {
   // variable d'état pour stocker les données du serveur backend
    const [data, setdata] = useState([])

    // utilisation du hook useEffect pour récupérer les données du serveur backend lorsque le composant est monté
    useEffect(() => {
       // fonction asynchrone pour récupérer les données et mettre à jour l'état
      const result=async()=>setdata(await GetCityParTypeProduitService());
      result()
    }, [])
    
    // objet de configuration pour le composant Column
      const config = {
        data,
        isGroup: true,
        xField: 'city',
        yField: 'total',
        seriesField: 'product',
        label: {
          position: 'middle',
          layout: [
            {
              type: 'interval-adjust-position',
            }, 
            {
              type: 'interval-hide-overlap',
            }, 
            {
              type: 'adjust-color',
            },
          ],
        },
       
        
      };

// instruction conditionnelle pour vérifier si les données sont vides et afficher un spinner de chargement
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
         <h4 className='text-center pt-2 pb-2'>Nombre de produit par ville </h4>
         <Column {...config} />
      </div>;

}

export default CityParTypeProduit