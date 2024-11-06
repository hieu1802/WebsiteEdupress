import React from 'react'
import axios from "axios";


const RecentPosts = ({ posts, onSelectPost }) => {

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/v1/blogUser/${id}`
      );
      console.log(response.data.message);

      setUserBlog((prevCourses) =>
        prevCourses.filter((course) => course._id !== id)
      );
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };


  
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