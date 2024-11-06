import BlogUserData from "../models/BlogUserData.js";

export const createBlogUser = async (req, res) => {
    const { image, title, content, userId } = req.body;

    try {
        const newBlogPost = new BlogUserData({
            image,
            title,
            content,
        });

        const savedBlogPost = await newBlogPost.save();
        res.status(201).json(savedBlogPost);
    } catch (error) {
        console.error('Error creating blog post:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
export const getAllBlogUser = async (req, res) => {
    try {
        const blogs = await BlogUserData.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Xóa blog
export const deleteBlogUser = async (req, res) => {
    try {
        const blog = await BlogUserData.findByIdAndDelete(req.params.id);
        if (!blog) return res.status(404).json({ error: "Blog không tồn tại" });
        res.status(200).json({ message: "Đã xóa blog" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
