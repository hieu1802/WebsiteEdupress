import React, { useState, useEffect } from "react";
import img12 from "../img/img12.png";
import axios from "axios";
import RecentPosts from "./RecentPosts";
import { recentPosts } from "../data/blogData";
import FormAddBlog from "./FormAddBlog";

function ContainerBlog() {
  const [mainImage, setMainImage] = useState(img12);
  const [mainTitle, setMainTitle] = useState(
    "Best LearnPress WordPress Theme Collection for 2021"
  );
  const [mainContent, setMainContent] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit u arcu duis dui egestas volutpat. Quisque nec non amet quis"
  );
  const [isOpen, setIsOpen] = useState(false);
  const [Blog, setBlog] = useState([]);

  const handleSelectPost = (image, title, content) => {
    setMainImage(`http://localhost:8080/images/${image}`);
    setMainTitle(title);
    setMainContent(content);
  };

  const handleAddPost = (newPost) => {
    setMainTitle(newPost.title);
    setMainContent(newPost.content);
    setMainImage(newPost.image);
  };
  const handleAddPostClick = () => {
    setIsOpen(true);
  };

  const handleCloseForm = () => {
    setIsOpen(false);
  };


  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/blogUser/")
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the courses!", error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/v1/blogUser/${id}`
      );
      console.log(response.data.message);
      alert('Xóa thành công')

      setBlog((prevCourses) =>
        prevCourses.filter((course) => course._id !== id)
      );
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };



  return (
    <div className="blogContainer">
      <div className="blogMain">
        <div className="blogTitle">
          <h1>{mainTitle}</h1>
        </div>
        <div className="blogDetail">
          <img src={mainImage} className="blogImg" alt="main" />
          <div className="blogContent">
            <p>{mainContent}</p>
          </div>
        </div>
      </div>
      <div className="blogSideBar">
        <div className="category">
          <div className="categoryNav">
            <h4>Category</h4>
            <div className="buttonAdd" onClick={handleAddPostClick}>
              <span>Thêm bài viết</span>
            </div>
          </div>

          {isOpen && (
            <FormAddBlog onSubmit={handleAddPost} onClose={handleCloseForm} />
          )}
          <div className="cateBox">
            <p>Commercial</p>
            <p>15</p>
          </div>
          <div className="cateBox">
            <p>Office</p>
            <p>15</p>
          </div>
          <div className="cateBox">
            <p>Shop</p>
            <p>15</p>
          </div>
          <div className="cateBox">
            <p>Educate</p>
            <p>15</p>
          </div>
          <div className="cateBox">
            <p>Academy</p>
            <p>15</p>
          </div>
          <div className="cateBox">
            <p>Single family home</p>
            <p>15</p>
          </div>
        </div>
        <RecentPosts posts={Blog} onSelectPost={handleSelectPost}  handleDelete={handleDelete}/>

        <div className="tags">
          <h4>Tags</h4>
          <div className="hastag">
            <div className="boxTags">Free Couses</div>
            <div className="boxTags">Maketings</div>
            <div className="boxTags">LMS</div>
            <div className="boxTags">Free Couses</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContainerBlog;
