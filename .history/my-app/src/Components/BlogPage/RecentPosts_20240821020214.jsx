import React from 'react'

const RecentPosts = ({ posts, onSelectPost }) => {
  return (
    <div className='boxRecent'>
        <h4>Recent posts</h4>
        {posts.map(post =>(
            <div className='articles' key={post.id} onClick={() => onSelectPost(post.image, post.title)}>
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