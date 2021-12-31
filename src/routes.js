const express = require('express')
const router = express.Router();

const UserController = require('./controller/user.controller');
const ResumeController = require('./controller/resume.controller');
const ProductController = require('./controller/product.controller');



router.post('/register', UserController.userRegister);
router.post('/login', UserController.Userlogin);
router.get('/users', UserController.getAllUser);
router.put('/update/:id', UserController.updateUser);
router.delete('/delete/:id', UserController.deleteUser);

router.post('/createResume', ResumeController.createResume);

router.post('/product', ProductController.createProduct);
router.put('/updateProduct/:id', ProductController.updateProduct);
router.get('/products', ProductController.getAllProducts);
router.delete('/deleteProduct/:id', ProductController.deleteProduct);

module.exports = router