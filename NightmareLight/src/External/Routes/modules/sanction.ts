import { Router } from 'express';
import { SanctionController } from '../../../Controllers/SanctionController';
import { body } from 'express-validator';
const router = Router()
const sanction = new SanctionController();
router.post('/temporary',
    body('userban').isString(),
    body('userid').isString(),
    body('bantime').isDate(),
    sanction.createTemporarySanction);
router.post('/permanent',
    body('userban').isString(),
    body('userid').isString(),
    sanction.createPermanentSanction);
router.patch('/revogue',
    body('userban').isString(),
    sanction.revogueSanction);
export default router