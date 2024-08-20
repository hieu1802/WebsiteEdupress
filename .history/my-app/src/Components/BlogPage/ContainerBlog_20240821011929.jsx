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
            <div className='blogTag'>
              <div className='boxTags'>Tags:</div>
              <div className='boxTags'>Free Couses</div>
              <div className='boxTags'>Maketings</div>
              <div className='boxTags'>LMS</div>
              <div className='boxTags'>Edupress</div>
              <div className='boxTags'>Free Couses</div>
            </div>
          </div>

        </div>
        <div className='blogSideBar'>
          <div className='category'>
              <h4>Category</h4>
              <div className='cateBox'>
                  <p>Commercial</p>
                  <p>15</p>
              </div>
              <div className='cateBox'>
                  <p>Office</p>
                  <p>15</p>
              </div>
              <div className='cateBox'>
                  <p>Shop</p>
                  <p>15</p>
              </div>
              <div className='cateBox'>
                  <p>Educate</p>
                  <p>15</p>
              </div>
              <div className='cateBox'>
                  <p>Academy</p>
                  <p>15</p>
              </div>
              <div className='cateBox'>
                  <p>Single family home</p>
                  <p>15</p>
              </div>
          </div>
          <div className='boxRecent'>
              <h4>Recent posts</h4>
              <div className='articles'>
                  <div className='articlesImg'>
                      <img src={img12} />
                  </div>
                  <div className='articlesContents'>
                      <p>Best LearnPress WordPress Theme Collection for 2023</p>
                  </div>
              </div>
              <div className='articles'>
                  <div className='articlesImg'>
                      <img src={img12} />
                  </div>
                  <div className='articlesContents'>
                      <p>Best LearnPress WordPress Theme Collection for 2023</p>
                  </div>
              </div>
              <div className='articles'>
                  <div className='articlesImg'>
                      <img src={img12} />
                  </div>
                  <div className='articlesContents'>
                      <p>Best LearnPress WordPress Theme Collection for 2023</p>
                  </div>
              </div>
              <div className='tags'>
                  <h4>Tags</h4>
              </div>
          </div>
        </div>
    </div>
  )
}

export default ContainerBlog