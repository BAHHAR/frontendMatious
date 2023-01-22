import React from 'react'
import { Bar } from '@ant-design/plots';

function GrossVolumeParProduct(res) {
    const data = res.res
      const config = {
        data,
        xField: '_id',
        yField: 'total',
        seriesField: '_id',
    legend: {
      position: 'top-left',
    },
       
        
      };
      return <div className='container'>
         <h4 className='text-center pt-2 pb-2'>Revenue brut par catégorie </h4>
         <Bar {...config} />
      </div>;
}

export default GrossVolumeParProduct
