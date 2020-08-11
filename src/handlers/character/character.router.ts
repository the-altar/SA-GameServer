import { Router } from 'express'
import { upload, getAll, remove, create, update, find, uploadFiles} from './character.controller'

const router: Router = Router()
router.get("/", getAll)
router.get('/:id', find)
router.post('/upload', upload)
router.post("/file/:filename", uploadFiles)
router.post('/delete', remove)
router.post('/new', create)
router.post('/update', update)

export const characterRouter: Router = router 