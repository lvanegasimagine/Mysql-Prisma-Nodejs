const router = require('express').Router();
const { getBlog, getBlogById, addBlog, updateBlog, deleteBlog } = require('../controllers/blogController');

router.get('/', getBlog);
router.get('/:id', getBlogById);
router.post('/', addBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;