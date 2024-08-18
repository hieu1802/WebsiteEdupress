import React from 'react'
import './Container.css'
import img12 from '../img/img12.png'


function Container() {
  return (
    <div className='container'>
       <div className='boxProduct'>
            <h2>All Courses</h2>
            <div className='boxContent'>
                <div className='boxImg'>
                    <img src={img12}/>
                </div>
                <div className='boxTexT'>
                    <div className='text'>
                        <h3>by <span>Determined-Poitras</span></h3>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Container