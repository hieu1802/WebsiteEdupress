import React from 'react'



const RecentPosts = ({ posts, onSelectPost, handleDelete }) => {
  const account = JSON.parse(localStorage.getItem("loggedInUser"));
  const userRole = account?.role;



  return (
    <div className='boxRecent'>
      <h4>Recent posts</h4>
      {posts.map(post => (
        <div className='articles' key={post.id} onClick={() => onSelectPost(post.image, post.title, post.content)}>
          <div className='articlesImg'>
            <img src={`http://localhost:8080/images/${post.image}`} />
          </div>
          <div className='articlesContents'>
            <p>{post.title}</p>
            {userRole === 'admin' && (
              <p style={{ color: "red", cursor: "pointer" }} onClick={(e) => { e.stopPropagation(); handleDelete(post._id); }}>
                Xóa bài viết
              </p>
            )}                </div>
        </div>
      ))}
    </div>
  )
}

export default RecentPosts