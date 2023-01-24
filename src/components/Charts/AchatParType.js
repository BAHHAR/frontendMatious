// Importation de React et des hooks useState et useEffect

import React,{useState,useEffect}  from 'react'
// Importation du composant Column de la bibliothèque ant-design/plots
import { Column } from '@ant-design/plots';
// Importation du fichier GetAchatParTypeService 
import GetAchatParTypeService from '../../Services/AchatParType.service';
// Importation du composant Spin de la bibliothèque antd
import {Spin} from 'antd'


// Définition du composant AchatParType
function AchatParType() {
     
   // variable d'état pour stocker les données du serveur backend
    const [data, setdata] = useState([])

// utilisation du hook useEffect pour récupérer les données du serveur backend lorsque le composant est monté
    useEffect(() => {
      // fonction asynchrone pour récupérer les données et mettre à jour l'état
        const result=async()=>setdata(await GetAchatParTypeService());
        result()
    }, [])

    

// objet de configuration pour le composant Column

        const config = {
          data,
          isGroup: true,
          xField: 'name',
          yField: 'total',
          seriesField: 'gender',
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
// rendu du composant Column avec les données et l'objet de configuration
        return <div className='container'>
           <h4 className='text-center pt-2 pb-2'>Nombre total des achats par type de client </h4>
           <Column {...config} />
        </div>;
  
}

export default AchatParType