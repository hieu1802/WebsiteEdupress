import BlogData from '../models/BlogData.js';
import multer from 'multer';



  export const createBlog = async (req, res) => {
    try {
      const { title, content } = req.body;
      const image = req.file ? req.file.path : null;
  
      if (!title || !content) {
        return res.status(400).json({ message: "Title and content are required" });
      }
  
      const blog = new BlogData({ title, content, image });
      await blog.save();
      res.status(201).json(blog);
    } catch (error) {
      console.error("Error in createBlog:", error);
      res.status(500).json({ error: error.message });
    }
  };

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogData.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Lấy blog theo ID
export const getBlogById = async (req, res) => {
    try {
        const blog = await BlogData.findById(req.params.id);
        if (!blog) return res.status(404).json({ error: "Blog không tồn tại" });
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Cập nhật blog
export const updateBlog = async (req, res) => {
    try {
        const blog = await BlogData.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!blog) return res.status(404).json({ error: "Blog không tồn tại" });
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Xóa blog
export const deleteBlog = async (req, res) => {
    try {
        const blog = await BlogData.findByIdAndDelete(req.params.id);
        if (!blog) return res.status(404).json({ error: "Blog không tồn tại" });
        res.status(200).json({ message: "Đã xóa blog" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

