const { getHome, showItems, insertItems, updateItems, deleteItems } = require('../controller/api_controller')

const router = require("express").Router()

router.get('/', getHome);

router.get('/items', showItems);

router.post('/items', insertItems);

router.patch('/items/:id', updateItems); //PATCH is used for single update 

router.delete('/items/:id', deleteItems)




module.exports = router

