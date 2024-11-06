import React from 'react'
import ManagementCourse from './ManagementCourse'
import ManagementUsersBlog from './ManagementUsersBlog'


function ContainerManagement() {
  return (
    <div className='managementContainer'>
      <ManagementCourse/>
      <ManagementUsersBlog/>
    </div>
  )
}

export default ContainerManagement