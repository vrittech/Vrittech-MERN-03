import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        minLength: [5, 'Minimum length for full name should be 5']
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
    },
    roles: {
        type: String,
        enum: ['student', 'instructor', 'admin'],
        default: 'student'
    },
    jwt: {
        type: String,
    },
    fcm: {
        type: String,
    }
})

const User = mongoose.model('User', userSchema);

export default User;