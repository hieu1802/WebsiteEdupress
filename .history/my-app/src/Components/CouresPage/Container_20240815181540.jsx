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
                        <h4>by <span>Determined-Poitras</span></h4>
                        <h5>Create an LMS Website with LearnPress</h5>
                        <div className='iconsValue'>

                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Container