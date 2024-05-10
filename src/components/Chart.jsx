import React from 'react'
import { BarChart,CartesianGrid,Tooltip,XAxis,YAxis, Bar, Legend } from 'recharts'

const Charts = () => {
    const data = [
        {
            "name": "January",
            "users": 2780,
            "books": 3908,
            "bills":3000
          },
          {
            "name": "February",
            "users": 1890,
            "books": 4800,
            "bills":3730
          },
        {
          "name": "April",
          "users": 4000,
          "books": 2400,
          "bills":2000
        },
        {
          "name": "March",
          "users": 3000,
          "books": 1398,
          "bills":2700
        },
        {
          "name": "May",
          "users": 2000,
          "books": 9800,
          "bills":2400
        }
        
        
      ]
      
                                  
      
  return (
    <>
        <BarChart width={700} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="books" fill="#8884d8" width={40}/>
        <Bar dataKey="users" fill="#82ca9d" />
        <Bar dataKey="bills" fill='#111827'/>
      </BarChart>
    </>
  )
}

export default Charts