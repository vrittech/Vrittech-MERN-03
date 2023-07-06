import { Request, Response } from "express"
import { ObjectId } from "mongoose";
import Course from "../models/courses.model";
import Section from "../models/section.model";
import Lecture from "../models/lectures.model";
import cloudinary from "../config/cloudinary.config";
import fs from 'fs';

export const createCourses = async (req: any, res: Response) => {
    const { title, description, price, duration, sections, categories, content } = req.body;

    const instructorId = req.user._id;
    try {
        const course = new Course({
            title,
            description,
            instructorId,
            price,
            duration,
            sections: [],
            categories,
            content
        })

        await course.save();

        if (sections.length > 0) {
            for (let sectionData of sections) {

                const section = new Section({
                    title: sectionData.title,
                    lectures: []
                })

                await section.save();

                for (let lectureData of sectionData.lectures) {
                    const lecture = new Lecture({
                        title: lectureData.title,
                        content: lectureData.content,
                        duration: lectureData.duration,
                    })
                    let result;
                    for (let file of req.files) {
                        if (file.mimetype === 'image/jpeg'
                            || file.mimetype === 'image/png'
                            || file.mimetype === 'image/jpg') {
                            result = await cloudinary.v2.uploader.upload(file.path);

                        } else {
                            result = await cloudinary.v2.uploader.upload(file.path, {
                                resource_type: 'video',
                                folder: 'videos'
                            });
                        }
                        lecture.lectureUrl = result.secure_url;
                        await lecture.save();
                    }



                    section.lectures.push(lecture._id);

                }
                await section.save();

                course.sections.push(section._id);
            }

            await course.save();

            for (let file of req.files) {
                if (fs.existsSync(file.path)) {
                    fs.unlinkSync(file.path);
                }
            }
        }

        return res.status(201).json({
            status: true,
            message: 'Course created successfully',
            data: course
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: 'An error occured while creating this course',
            error
        })
    }
}

export const editCourses = async (req: any, res: Response) => {
    const { title, description, price, duration, sections, categories, content } = req.body;

    const instructorId = req.user._id;
    try {
        const course = new Course({
            title,
            description,
            instructorId,
            price,
            duration,
            sections: [],
            categories,
            content
        })

        await course.save();

        if (sections.length > 0) {
            for (let sectionData of sections) {

                const section = new Section({
                    title: sectionData.title,
                    lectures: []
                })

                await section.save();

                for (let lectureData of sectionData.lectures) {
                    const lecture = new Lecture({
                        title: lectureData.title,
                        content: lectureData.content,
                        duration: lectureData.duration,
                    })
                    let result;
                    for (let file of req.files) {
                        if (file.mimetype === 'image/jpeg'
                            || file.mimetype === 'image/png'
                            || file.mimetype === 'image/jpg') {
                            result = await cloudinary.v2.uploader.upload(file.path);

                        } else {
                            result = await cloudinary.v2.uploader.upload(file.path, {
                                resource_type: 'video',
                                folder: 'videos'
                            });
                        }
                        lecture.lectureUrl = result.secure_url;
                        await lecture.save();
                    }



                    section.lectures.push(lecture._id);

                }
                await section.save();

                course.sections.push(section._id);
            }

            await course.save();

            for (let file of req.files) {
                if (fs.existsSync(file.path)) {
                    fs.unlinkSync(file.path);
                }
            }
        }

        return res.status(201).json({
            status: true,
            message: 'Course created successfully',
            data: course
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: 'An error occured while creating this course',
            error
        })
    }
}