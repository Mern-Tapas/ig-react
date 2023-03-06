import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../../assets/css/leads.css"
import instance from '../../axios'

function Leads() {


  const [leadsdata, setleads] = useState([])


  useEffect(() => {
    getleads()
  }, [])

  //comments


  const getleads = async () => {

    await axios.get('').then((response) => {
      console.log(response.data.data)
      setleads(response.data.data)
    }).catch((error) => {
      console.log(error)
    })

  }

  const [lead, setlead] = useState({})

  const getdata = async (id) => {
    await axios.get(`leads/${id}`).then((response) => { console.log(response) }).catch((error) => { console.log(error) })
  }






  return (
    <div className='leads-pages ' style={{ height: "100%" }}>
      <div >

      </div>
      <div style={{ overflow: "scroll" }}>
        <div>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">Handle</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {leadsdata.map((data) => {
                return <tr>
                  <td >{data.service}</td>
                  <td >{data.name}</td>
                  <td >{}</td>
                  <td >Handle</td>
                  <td >Handle</td>
                  <td><button onClick={() => { getdata(data._id) }}>View</button></td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div >


      </div>
    </div>
  )
}

export default Leads