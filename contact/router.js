const express = require('express');
const router = express.Router();

const { createContact,
    getAllContacts,
    getContactById,
    updateContactById,
    deleteContactById} = require('./controller');

router.post('/', createContact);
router.get('/', getAllContacts);
router.get('/:id', getContactById);
router.put('/:id', updateContactById);
router.delete('/:id', deleteContactById);

module.exports = router;
