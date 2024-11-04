import BlogData from '../models/BlogData.js';

export const createBlog = async (req, res) => {
    try {
        const blog = new BlogData(req.body);
        await blog.save();
        res.status(201).json(blog);
    } catch (error) {
        res.status(400).json({ error: error.message });
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

