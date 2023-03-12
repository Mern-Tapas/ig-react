import React, { useEffect } from 'react'
import instance from '../../instance'

function Users() {

  useEffect(() => {
    instance.get("dashboard/users").then((response) => console.log(response)).catch((error) => console.log(error))
  }, [])


  return (
    <div>Users</div>
  )
}

export default Users