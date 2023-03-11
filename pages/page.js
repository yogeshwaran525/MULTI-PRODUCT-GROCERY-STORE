const express = require('express');
const router = express.Router();
const userController = require("../controller/user");

router.get('/',(req,res)=>{
    res.render('home')
})
router.get('/features',(req,res)=>{
    res.render('features')
})
router.get('/products',(req,res)=>{
    res.render('products')
})
router.get('/categories',(req,res)=>{
    res.render('categories')
})
router.get('/reviews',(req,res)=>{
    res.render('reviews')
})
router.get('/blogs',(req,res)=>{
    res.render('blogs')
})
router.get('/createaccount',(req,res)=>{
    res.render('createaccount')
})
router.get('/shopping-cart', userController.view,(req,res)=>{
    res.render('shopping-cart',{ rows });
});
router.get('/login',(req,res)=>{
    res.render('login')
})
router.get('/profile',userController.profile,(req,res,next)=>{
    if (req.data) {
        res.render("profile", { data: req.data });
      } else {
        res.redirect("/login");
      }
});

router.post('/search/:qty',userController.search);

router.get('/:SNO',userController.delete);


module.exports = router;