import React from 'react'
import { Column } from '@ant-design/plots';
function AchatParType(res) {
      const data = res.res
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
        return <div className='container'>
           <h4 className='text-center pt-2 pb-2'>Nombre total des achats par type de client </h4>
           <Column {...config} />
        </div>;
  
}

export default AchatParType