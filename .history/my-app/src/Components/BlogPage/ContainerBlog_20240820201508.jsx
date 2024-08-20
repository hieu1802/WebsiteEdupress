import React from 'react'
import img12 from '../img/img12.png'

function ContainerBlog() {
  return (
    <div className='blogContainer'>
        <div className='blogMain'>
          <div className='blogTitle'>
            <h1>Best LearnPress WordPress Theme Collection for 2023</h1>
          </div>
          <div className='blogDetail'>
            <img src={img12} className='blogImg'/>
            <div className='blogContent'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id 
                  sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel enim eu turpis imperdiet. 

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices 
                  mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus.
                </p>
            </div>
          </div>

        </div>
    </div>
  )
}

export default ContainerBlog