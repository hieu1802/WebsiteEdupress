import React from 'react'



const RecentPosts = ({ posts, onSelectPost,handleDelete}) => {

  

  
  return (
    <div className='boxRecent'>
        <h4>Recent posts</h4>
        {posts.map(post =>(
            <div className='articles' key={post.id} onClick={() => onSelectPost(post.image, post.title, post.content)}>
                <div className='articlesImg'>
                    <img src={`http://localhost:8080/images/${post.image}`} />
                </div>
                <div className='articlesContents'>
                    <p>{post.title}</p>
                    <p style={{color:"red"}} onClick={() => handleDelete(post._id)} >Xóa bài viết</p>
                </div>
        </div>
        ))}
    </div>
  )
}

export default RecentPosts