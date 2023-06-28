import mongoose from 'mongoose';
import UserInterface from '../interface/user.interface';

const userSchema = new mongoose.Schema<UserInterface>({
    fullName: {
        type: String,
        minLength: [5, 'Minimum length for full name should be 5']
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    roles: {
        type: String,
        enum: ['student', 'instructor', 'admin'],
        default: 'student'
    },
    enrolledCourse: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course'
            }
        ]
    },
    jwt: {
        type: String,
    },
    fcm: {
        type: String,
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpire: {
        type: Date
    },
}, {
    timestamps: true
})

const User = mongoose.model<UserInterface>('User', userSchema);

export default User;