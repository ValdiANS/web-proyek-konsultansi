const express = require('express')

const router = express.Router()

router.get('', (req, res) =>{
    res.sendFile(path.join(__dirname, '../../client', 'dist', 'index.html'));
})
router.get('cart', (req, res) =>{
    res.sendFile(path.join(__dirname, '../../client', 'dist', 'index.html'));
})
router.get('checkout', (req, res) =>{
    res.sendFile(path.join(__dirname, '../../client', 'dist', 'index.html'));
})
router.get('categories/:category', (req, res) =>{
    res.sendFile(path.join(__dirname, '../../client', 'dist', 'index.html'));
})
router.get('products/:productId', (req, res) =>{
    res.sendFile(path.join(__dirname, '../../client', 'dist', 'index.html'));
})
router.get('login', (req, res) =>{
    res.sendFile(path.join(__dirname, '../../client', 'dist', 'index.html'));
})
router.get('forget-password', (req, res) =>{
    res.sendFile(path.join(__dirname, '../../client', 'dist', 'index.html'));
})
router.get('register', (req, res) =>{
    res.sendFile(path.join(__dirname, '../../client', 'dist', 'index.html'));
})
router.get('search', (req, res) =>{
    res.sendFile(path.join(__dirname, '../../client', 'dist', 'index.html'));
})
router.get('admin', (req, res) =>{
    res.sendFile(path.join(__dirname, '../../client', 'dist', 'index.html'));
})
router.get('dashboard', (req, res) =>{
    res.sendFile(path.join(__dirname, '../../client', 'dist', 'index.html'));
})

module.exports = router