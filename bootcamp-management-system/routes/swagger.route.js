import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger/index.js';

const router = express.Router();

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

export default router;