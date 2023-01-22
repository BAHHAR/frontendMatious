import React from 'react'
import { Column } from '@ant-design/plots';


function MoyenneDeRatingParSexe(res) {
    const data = res.res
      const config = {
        data,
        xField: 'gender',
        yField: 'avg',
        seriesField: 'gender',
    
       
        
      };
      return <div className='container'>
         <h4 className='text-center pt-2 pb-2'>Moyenne de rating par sexe </h4>
         <Column {...config} />
      </div>;
}

export default MoyenneDeRatingParSexe