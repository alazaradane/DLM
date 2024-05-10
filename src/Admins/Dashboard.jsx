import React, { useState } from 'react'
import Card from '../components/Card'
import { dashboardData } from '../constants'
import { dashboardIcon } from '../assets/images/index'
import Charts from '../components/Chart'
import api from '../api/api'
import { useEffect } from 'react'


const Dashboard = () => {

  const [dashApiData, setDashApiData] = useState(dashboardData)

  useEffect(() => {
    api.get('/details')
      .then(response => {
        setDashApiData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  return (
    <section className=' flex flex-col p-5'>
      <div className=' flex items-center gap-3 mt-10 ml-6'>
        <img src={dashboardIcon} alt='dashboard' width={30} height={30} />
        <p className=' text-2xl font-serif font-bold'>Dashboard</p>
      </div>
      <div className=' flex my-10 gap-5'> 
          {dashApiData.map((data)=>
            <Card src={data.imgURL} value={data.value} title={data.label}/>
        )}
      </div>
      <div>
        <Charts/>
      </div>
    </section>
    
  )
}

export default Dashboard