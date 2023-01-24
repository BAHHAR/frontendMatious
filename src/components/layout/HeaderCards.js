import React,{useState,useEffect}  from 'react'
import {
    PeopleFill,
    StarFill,
    GenderMale,
    GenderFemale
} from 'react-bootstrap-icons'
import {Spin} from 'antd'
import GetMiscellaneousService from '../../Services/Miscellaneous.service'

function HeaderCards() {
    const [data, setdata] = useState({})
    const {TotalCostumers,RateFemales,RateMales,avg}=data
    console.log(data)

    useEffect(async() => {
      const result=await GetMiscellaneousService();
      setdata(result)
    }, [])
    

    if(typeof data === "undefined") 
            return <div className='MySpin'>
                        <Spin  size="large" >
                            <div className='pb-5'/>
                            <div className='text-primary container pt-5'>
                                <h3>Loading</h3>
                            </div>
                        </Spin>
                    </div> 



  return (
    <div className='cardsHeaders'>
        <div className='cardsHeaders_card card '>
            <div className='container cardsHeaders_card_card row'>
                    <div className='col-10 mt-2 pl-3'>
                        <p><b>Customers</b></p>
                        <h6 className='text-center pt-3'>{TotalCostumers}</h6>
                    </div>
                    <div className='col-1 pt-4'>
                    <PeopleFill className='cardsHeaders_card1Icon' size={24}/>
                    </div>
            </div>
        </div>
        <div className='cardsHeaders_card card'>
            <div className='container cardsHeaders_card_card row'>
                    <div className='col-10 mt-2 pl-3'>
                        <p><b>Average of rating</b></p>
                        <h6 className='text-center'>{avg}</h6>
                    </div>
                    <div className='col-1 pt-4'>
                    <StarFill className='cardsHeaders_card2Icon' size={24}/>
                    </div>
            </div>
        </div>
        <div className='cardsHeaders_card card'>
            <div className='container cardsHeaders_card_card row'>
                    <div className='col-10 mt-2 pl-3'>
                        <p><b>Female rate</b></p>
                        <h6 className='text-center'>{RateFemales}%</h6>
                    </div>
                    <div className='col-1 pt-4'>
                    <GenderFemale className='cardsHeaders_card3Icon' size={24}/>
                    </div>
            </div>
        </div>
        <div className='cardsHeaders_card card'>
        <div className='container cardsHeaders_card_card row'>
                    <div className='col-10 mt-2 pl-3'>
                        <p><b>Male rate</b></p>
                        <h6 className='text-center'>{RateMales}%</h6>
                    </div>
                    <div className='col-1 pt-4'>
                    <GenderMale className='cardsHeaders_card4Icon' size={24}/>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderCards