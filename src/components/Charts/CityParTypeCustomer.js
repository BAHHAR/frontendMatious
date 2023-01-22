import React from 'react'
import { Column } from '@ant-design/plots';

function CityParTypeCustomer(res) {
    const data = res.res
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
      return <div className='container'>
         <h4 className='text-center pt-2 pb-2'>Nombre de produit par ville </h4>
         <Column {...config} />
      </div>;

}

export default CityParTypeCustomer