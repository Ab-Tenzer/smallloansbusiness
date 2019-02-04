
import express from 'express'

import user from './user'
import system from './system';
import sipho from './sipho';

const router = express.Router()

router.use('/user', user);
router.use('/system', system);
router.use('/sipho', sipho);

export default router