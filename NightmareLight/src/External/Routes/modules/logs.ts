import { Router } from 'express';
import { LogController } from '../../../Controllers/LogController';


const router = Router()
const log = new LogController()
router.get('/', log.readLogs)
//pegar todos os logs
router.get('/experimental', log.readAllLogs)

export default router