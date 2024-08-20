import React from 'react'

const RecentPosts = ({ posts, onImageSelect }) => {
  return (
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
          </div>
  )
}

export default RecentPosts