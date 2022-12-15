import { Router } from 'express';
import { AuthController } from '../../../Controllers/AuthController';
import { body, CustomValidator } from 'express-validator';
import { AdminMiddleware } from '../../Middlewares/adminMiddleware';

const router = Router()
const auth = new AuthController();
router.post('/signin',
    body('username').isString(),
    body('password').isString(),
    auth.signup)

router.post('/createaccount',
    body('username').isString(),
    body('password').isString(),
    body('type').custom((type: string) => {


        if (type == 'moderator' || type == 'admin') {
            return true
        }

        throw new Error('invlid type of user');
    }),
    auth.createUser)

router.delete('/deleteaccount',
    AdminMiddleware,
    body('id').isString(),
    auth.deleteUser)

router.patch('/updatepassword',
    AdminMiddleware,
    body('newpassword').isString(),
    body('password').isString(),
    body('username').isString(),
    auth.updatePasswordUser)

router.patch('/enable',
    body('id').isString(),
    auth.setValidToTrue)

router.patch('/disable',
    body('id').isString(),
    auth.setValidToFalse)

router.get('/list',
    AdminMiddleware,
    auth.listAllHelloWorkers)

export default router