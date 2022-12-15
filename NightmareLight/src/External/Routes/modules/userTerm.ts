import { Router } from 'express';
import { UserTermController } from '../../../Controllers/UserTermController'
import { AdminMiddleware } from '../../Middlewares/adminMiddleware';
import { body } from 'express-validator';


const router = Router()
const userTerm = new UserTermController();
router.post('/create',body('name').isString(), body('userid').isString(), body('content').isString(), userTerm.createUserTerm)
router.get('/', userTerm.readUserTerm)
router.delete('/delete',body('id').isString(), userTerm.deleteUserTerm)
router.put('/update',body('name').isString(), body('id').isString(), body('content').isString(), userTerm.updateUserTerm)

export default router