import React from 'react'
import Card from '../components/Card'
import { dashboardData } from '../constants'
import { dashboardIcon } from '../assets/images/index'



const Dashboard = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'Sales',
            data: [100, 200, 150, 400, 250],
            backgroundColor: '#42A5F5',
        },
    ],
};
  return (
    <section className=' flex flex-col p-5'>
      <div className=' flex items-center gap-3 mt-10 ml-6'>
        <img src={dashboardIcon} alt='dashboard' width={30} height={30} />
        <p className=' text-2xl font-serif font-bold'>Dashboard</p>
      </div>
      <div className=' flex my-10 gap-5'> 
          {dashboardData.map((data)=>
            <Card src={data.imgURL} value={data.value} title={data.label}/>
        )}
      </div>
    </section>
    
  )
}

export default Dashboard