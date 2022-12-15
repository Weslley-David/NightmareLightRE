import { Router } from 'express';
import { InfraController } from '../../../Controllers/InfraController';


const router = Router()
const infra = new InfraController
router.post('/revoguedneounce', infra.revoguesanctions)

export default router