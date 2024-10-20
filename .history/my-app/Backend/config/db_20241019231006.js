import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


async function connect() {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log('connect successfuly!!!')
    } catch (error) {
        console.log('connect failure', error)
    }


}
export default connect;
