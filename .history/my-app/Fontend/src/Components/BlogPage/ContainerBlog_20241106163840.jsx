import React, { useState } from 'react'
import img12 from '../img/img12.png'

import RecentPosts from './RecentPosts'
import { recentPosts } from '../data/blogData';

function ContainerBlog() {

  const [mainImage, setMainImage] = useState(img12)
  const [mainTitle, setMainTitle] = useState('Best LearnPress WordPress Theme Collection for 2021');
  const [mainContent, setMainContent] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit u arcu duis dui egestas volutpat. Quisque nec non amet quis')
  const [isOpen, setIsOpen] = useState(false); 
  

  const handleSelectPost = (image, title, content) => {
    setMainImage(image);
    setMainTitle(title);
    setMainContent(content) 
  };


  const toggleContent = () => setIsOpen(!isOpen);





  return (
    <div className='blogContainer'>
        <div className='blogMain'>
          <div className='blogTitle'>
            <h1>{mainTitle}</h1>
          </div>
          <div className='blogDetail'>
            <img src={mainImage} className='blogImg' alt='main'/>
            <div className='blogContent'>
                <p>{mainContent}</p>
                
            </div>
            
          </div>

        </div>
        <div className='blogSideBar'>
          <div className='category'>
              <div className='categoryNav'>
                  <h4>Category</h4>
                  <div className='buttonAdd'><span onClick={toggleContent}>Thêm bài viết</span></div>
              </div>
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