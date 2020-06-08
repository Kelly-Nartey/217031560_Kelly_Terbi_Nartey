const router = require('express').Router();
const { Patient, Payment } = require('../models/Patient');
const Admin = require('../models/Admin');

router.get('/', (req, res)=>{
    res.render('signin')
})



router.get('/testAdmin', (req, res)=>{
    res.render('test');
})
router.post('/admin', (req, res)=>{
    const data = {
        username: req.body.username,
        password: req.body.password
    }
    console.log(data)
    Admin.findOne({username: req.body.username}).then(newAdmin =>{
        if(newAdmin){
            return res.redirect('/dashboard')
        }
        Admin.create(data).then(newAdmin =>{
            return res.json({newAdmin});
        })
    })
})

router.post('/signin', (req, res)=>{
    Admin.findOne({username: req.body.username}).then(admin => {
        if(admin){
            // check password if valid and log in to dashboard
            res.redirect('/dashboard')
        }
        else { 
            res.redirect('/')
        }
    })
    .catch(error =>{
        console.log(error.message);
    })
});

router.get('/dashboard', (req, res)=>{
    res.render('dashboard', )
})

router.get('/logout', (req, res)=>{
    res.redirect('/')
})

module.exports = router;