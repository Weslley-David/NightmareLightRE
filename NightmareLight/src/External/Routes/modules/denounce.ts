import { Router } from 'express';
import { DenounceController } from '../../../Controllers/DenounceController';


const router = Router()
const denounce = new DenounceController
//mudar os dados, adicionar id do denunciante e username do mesmo
router.get('/', denounce.readDenounce)
//implementação da noite
router.get('/denounced/:id', denounce.readDenounceOfUser)
router.get('/denouncer/:id', denounce.readDenounceFromUser)
router.get('/:id', denounce.readById )


router.post('/create', denounce.createDenounce)
router.patch('/markassolved', denounce.markAsSolved)

export default router