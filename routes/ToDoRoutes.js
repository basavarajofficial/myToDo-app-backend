const { Router } = require('express') ;
const { getToDO, saveToDo, deleteToDO, updateToDO } = require('../controllers/ToDoController');

const router = Router() ;

router.get('/', getToDO)

router.post('/save', saveToDo)
router.post('/update', updateToDO)
router.post('/delete', deleteToDO)

module.exports = router;