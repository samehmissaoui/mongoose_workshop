const {create, getAll, getById,updateById, deleteById}
 = require('./service'); 

const createContact = async (req, res) => {
    try {
        const newContact = await create(req.body);
        res.json(newContact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }};



const getAllContacts = async (req, res) => {
    try {
        const allContacts = await getAll();
        res.json(allContacts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }};



const getContactById = async (req, res) => {
    try {
        const contact = await getById(req.params.id);
        if (!contact) {
            return res.status(404)
            .json({ message: 'Contact not found' });
        }
        res.json(contact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }};


const updateContactById = async (req, res) => {
    try {
        const updatedContact = await updateById(req.params.id, req.body);
        if (!updatedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(updatedContact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }};

    
const deleteContactById = async (req, res) => {
    try {
        const deletedContact = await deleteById(req.params.id);
        if (!deletedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(deletedContact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }};


module.exports = { createContact,getAllContacts,getContactById
             ,updateContactById,deleteContactById
};
