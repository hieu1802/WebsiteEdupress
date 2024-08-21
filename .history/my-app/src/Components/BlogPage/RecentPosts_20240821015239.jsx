import React from 'react'

const RecentPosts = ({ posts, onImageSelect }) => {
  return (
    <div className='boxRecent'>
        <h4>Recent posts</h4>
        {posts.map(post =>(
            <div className='articles'>
                <div className='articlesImg'>
                    <img src={post.image} />
                </div>
                <div className='articlesContents'>
                    <p>{post.title}</p>
                </div>
        </div>
        ))}
    </div>
  )
}

export default RecentPosts