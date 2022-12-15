import { Router } from 'express'
import authRoutes from './modules/auth'
import serviceRoutes from './modules/service'
import userTermRoutes from './modules/userTerm'
import logRoutes from './modules/logs'
import sanctionRoutes from './modules/sanction'
import denounceRoutes from './modules/denounce'
import profileRoutes from './modules/profile'
import infraRoutes from './modules/infra'

const router = Router()

router.use('/auth', authRoutes)
router.use('/service', serviceRoutes)
router.use('/userterm', userTermRoutes)
router.use('/logs', logRoutes)
router.use('/sanction', sanctionRoutes)
router.use('/denounce', denounceRoutes)
router.use('/profile', profileRoutes)
router.use('/infra', infraRoutes)

export default router
