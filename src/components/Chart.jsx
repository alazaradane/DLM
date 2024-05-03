import React from 'react'
import { BarChart,CartesianGrid,Tooltip,XAxis,YAxis, Bar, Legend } from 'recharts'

const Charts = () => {
    const data = [
        {
            "name": "January",
            "uv": 2780,
            "pv": 3908
          },
          {
            "name": "February",
            "uv": 1890,
            "pv": 4800
          },
        {
          "name": "April",
          "uv": 4000,
          "pv": 2400
        },
        {
          "name": "March",
          "uv": 3000,
          "pv": 1398
        },
        {
          "name": "May",
          "uv": 2000,
          "pv": 9800
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
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </>
  )
}

export default Charts