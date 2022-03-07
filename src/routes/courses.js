const express = require('express');
const router = express.Router();


const courseController = require('../app/controllers/CourseController');

//CREATE
router.get('/create', courseController.create);
//SHOW LIST
router.post('/store', courseController.store);
//EDIT COURSE
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
//SOFT DELETE
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.destroy);
//FORCE DELETE
router.delete('/:id/force', courseController.forceDestroy);
//COURSE'S DETAIL
router.get('/:slug', courseController.show);



module.exports = router;