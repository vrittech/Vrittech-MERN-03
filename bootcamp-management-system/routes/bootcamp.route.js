import express from 'express';
import { addBootcamp, getBootcamp, deleteBootcamp, updateBootcamp } from '../controllers/bootcamp.controller.js';
import { upload } from '../middlewares/multer.middleware.js';
import { authMiddleware, authorize } from '../middlewares/auth.middleware.js';
import { filteredResults } from '../middlewares/filteredResults.middleware.js';
import Bootcamp from '../models/bootcamp.model.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Bootcamp: 
 *       type:  object
 *       required:  
 *         - name 
 *         - desciption 
 *         - email 
 *         - averageCost 
 *         - careers 
 *       properties:  
 *         name: 
 *           type: string 
 *           description: The name of the bootcamp 
 *         description: 
 *           type: string 
 *           description: The description of the bootcamp 
 *         website: 
 *           type: string 
 *           description: The website of the bootcamp 
 *         phone: 
 *           type: number 
 *           description: The phone number of the bootcamp 
 *         email: 
 *           type: string 
 *           description: The email of the bootcamp 
 *         address: 
 *           type: String 
 *           description: The address of the bootcamp 
 *         careers: 
 *           type: Array 
 *           description: The available careers of the bootcamp 
 *         averageRating: 
 *           type: number 
 *           description: The rating of the bootcamp 
 *         averageCost: 
 *           type: number 
 *           description: The cost of the bootcamp 
 *         photo: 
 *           type: string 
 *           format: binary 
 *           description: The photo of the bootcamp 
 *       example: 
 *         name: Bootcamp 1
 *         description: Bootcamp 1
 *         website: Bootcamp1@gmail.com
 *         phone: 1234567890
 *         address: Gongabu
 *         careers: ["Web Development"]
 *         averageRating: 1
 *         averageCost: 2000
 *         photo: abc.jpg
*/


/**
 * @swagger
 * /bootcamps:
 *   get:
 *     summary: Get all bootcamps.
 *     tags: [Bootcamp]
 *     parameters:
 *       - in: query
 *       - name: page
 *         schema: 
 *           type: string
 *         description: The page number
 *         default: 1
 *         example: 1
 *       - in: query
 *       - name: limit
 *         schema: 
 *           type: string
 *         description: The page limit
 *         default: 10
 *         example: 10
 *       - in: query
 *       - name: sort
 *         schema: 
 *           type: string
 *         description: The sort name
 *         default: -createdAt
 *     responses:
 *       200:
 *         description: User Created Successfully
 *       400:
 *         description: User not found
*/
router.get('/', authMiddleware, filteredResults(Bootcamp), getBootcamp)

/**
 * @swagger
 * /bootcamps:
 *   post:
 *     summary: Create a new bootcamp.
 *     tags: [Bootcamp]
 *     requestBody:
 *      required: true
 *      content:
 *       multipart/form-data:
 *         schema:
 *           $ref: '#/components/schemas/Bootcamp'
 *     responses:
 *       200:
 *         description: Bootcamp added Successfully
 *       400:
 *         description: bootcamp not found
*/
router.post('/', authMiddleware, authorize('publisher', 'admin'), upload.single('photo'), addBootcamp);
/**
 * @swagger
 * /bootcamps/{id}:
 *   patch:
 *     summary: Update a bootcamp.
 *     tags: [Bootcamp]
 *     parameters:
 *       - in: path
 *       - name: id
 *         schema: 
 *           type: string
 *         required: true
 *         description: The bootcamp id
 *     requestBody:
 *      required: true
 *      content:
 *       multipart/form-data:
 *         schema:
 *           $ref: '#/components/schemas/Bootcamp'
 *     responses:
 *       200:
 *         description: Bootcamp Deleted Successfully
 *       400:
 *         description: Bootcamp not found
*/
router.patch('/:id', authMiddleware, authorize('publisher', 'admin'), upload.single('photo'), updateBootcamp);

/**
 * @swagger
 * /bootcamps/{id}:
 *   delete:
 *     summary: Delete a bootcamp.
 *     tags: [Bootcamp]
 *     parameters:
 *       - in: path
 *       - name: id
 *         schema: 
 *           type: string
 *         required: true
 *         description: The bootcamp id
 *     responses:
 *       200:
 *         description: Bootcamp Deleted Successfully
 *       400:
 *         description: Bootcamp not found
*/
router.delete('/:id', authMiddleware, authorize('publisher', 'admin'), deleteBootcamp);

export default router;