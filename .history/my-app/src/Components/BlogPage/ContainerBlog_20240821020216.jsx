import React, { useState } from 'react'
import img12 from '../img/img12.png'
import img11 from '../img/img11.png'
import img10 from '../img/img10.png'
import RecentPosts from './RecentPosts'

function ContainerBlog() {

  const [mainImage, setMainImage] = useState(img12)
  const [mainTitle, setMainTitle] = useState('Best LearnPress WordPress Theme Collection for 2023');

  const recentPosts = [
    {
      id: 1,
      title: 'Best LearnPress WordPress Theme Collection for 2023',
      image: img12
    },
    {
      id: 2,
      title: 'Best CSS WordPress Theme Collection for 2024',
      image: img11
    },
    {
      id: 3,
      title: 'Best HTML Theme Collection for 2025',
      image: img10
    }
  ];

  const handleSelectPost = (image, title) => {
    setMainImage(image);
    setMainTitle(title);
  };




  return (
    <div className='blogContainer'>
        <div className='blogMain'>
          <div className='blogTitle'>
            <h1>{mainTitle}</h1>
          </div>
          <div className='blogDetail'>
            <img src={mainImage} className='blogImg' alt='main'/>
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
          <RecentPosts posts={recentPosts} onSelectPost={handleSelectPost}/>
          <div className='tags'>
                  <h4>Tags</h4>
                  <div className='hastag'>
                      <div className='boxTags'>Free Couses</div>
                      <div className='boxTags'>Maketings</div>
                      <div className='boxTags'>LMS</div>
                      <div className='boxTags'>Free Couses</div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default ContainerBlog