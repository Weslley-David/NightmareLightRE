import { Router } from 'express';
import { ServiceController } from '../../../Controllers/ServiceController'
import { AdminMiddleware } from '../../Middlewares/adminMiddleware';
import { body } from 'express-validator';


const router = Router()
const service = new ServiceController();
router.post('/create', body('name').isString(), body('userid').isString(), body('description').isString(), body('value').isNumeric(), service.createService)
router.get('/', service.readServices)
router.delete('/delete',body('id').isString(), service.deleteService)
router.put('/update',body('name').isString(), body('id').isString(), body('description').isString(), body('value').isNumeric(), service.updateService)

export default router