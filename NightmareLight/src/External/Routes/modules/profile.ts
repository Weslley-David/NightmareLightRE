import { Router } from 'express';
import { LogController } from '../../../Controllers/LogController';
import { ProfileController } from '../../../Controllers/ProfileController';


const router = Router()
//const log = new LogController()
const profile = new ProfileController()
//router.get('/', log.readLogs)
router.get('/all', profile.getAllProfiles)
router.get('/statistics', profile.getStatistics)
router.get('/:id', profile.readById )
router.get('/', profile.readByUsername)
//implementação da noite



export default router