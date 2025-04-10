// Routes/Cookies.route.js

import express from 'express';
import {
    getCookies,
    createCookies,
    getCookieByID,
    updateCookie,
    deleteCookie
} from '../Controllers/Cookies.controller.js'; // add .js extension for ESM

const router = express.Router();

router.get('/getAllCookies', getCookies);
router.post('/createCookies', createCookies);
router.get('/getCookieById/:customId', getCookieByID);
router.patch('/updateCookie/:customId', updateCookie);
router.delete('/deleteCookie/:customId', deleteCookie);

export default router;
