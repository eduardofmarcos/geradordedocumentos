import {Router} from 'express'
import app_routes from '../open/Generators'

const router = Router()

// router.use(getIP)
router.use('/generators', app_routes)


export default router