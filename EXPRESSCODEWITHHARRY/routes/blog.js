const express = require('express');
const path = require('path');
const blogs = require('../data/blogs.js');

const router = express.Router()

router.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname, '../templates/index.html'))
    res.render('../home')
})

router.get("/blogs", (req, res) => {
    // blogs.forEach(e => {
    //     console.log(e.title);
    // });
    res.sendFile(path.join(__dirname, '../templates/blogs.html'))
})

router.get("/blogspost/:slug", (req, res) => {
    myblog = blogs.filter((e)=>{
        return e.slug ==req.params.slug
    })
    console.log(myblog);
    res.sendFile(path.join(__dirname, '../templates/blogsPage.html'))
})


module.exports = router