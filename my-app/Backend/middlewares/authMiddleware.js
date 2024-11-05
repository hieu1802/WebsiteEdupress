import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const authenticateUser = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.userId = decoded.id; // Lưu thông tin người dùng đã xác thực vào request
        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid token" });
    }
};
export { authenticateUser }