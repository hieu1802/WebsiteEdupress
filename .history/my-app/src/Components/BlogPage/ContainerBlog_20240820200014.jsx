import React from 'react'
import img12 from '../img/img12.png'

function ContainerBlog() {
  return (
    <div className='blogContainer'>
        <div className='blogMain'>
          <div className='blogTitle'>
            <h1>Best LearnPress WordPress Theme Collection for 2023</h1>
          </div>
          <div className='blogContent'>
            <img src={img12}/>
          </div>
        </div>
    </div>
  )
}

export default ContainerBlog