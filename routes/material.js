const router = require('express').Router();
const { Material } = require('../models/Material');

router.get('/',(req, res)=>{
    res.json({msg: 'Sir please use postman to test the WEB API'})
})

router.post('/add', (req, res)=>{
    const materialData = {
        materialCode: req.body.Code,
        materialName: req.body.Name,
        materialUnitPrice: req.body.UnitPrice,
        materialStockLevel: req.body.StockLevel
    }
    
    Material.findOne({materialCode: materialData.materialCode}).then(result =>{
        if(result){
            return res.json({ message: `Material code exits..`})
        }
        Material.create(materialData).then(newRecord => {
            return res.json(newRecord);
        })
        .catch(error => { 
            return res.json({
                message: error.message
            })
        });
    })
    .catch(error => {
        return res.json({
            message: error.message
        })
    })

});

router.put('/update/:materialCode', (req, res)=>{
    res.send('Will do that progressively')
});

router.delete('/delete/:materialCode', (req, res)=>{
    res.send('Delete a coded item')
});

module.exports = router;