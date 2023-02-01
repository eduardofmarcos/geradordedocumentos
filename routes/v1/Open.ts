import {Router} from 'express'
import app_routes_generators from '../open/Generators'
// 03736145598991206724598482002365
import app_routes_validators from '../open/Validators'

const router = Router()

// router.use(getIP)
router.use('/generators', app_routes_generators)
router.use('/validators', app_routes_validators)


export default router