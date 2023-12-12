const Contact = require('./model'); 

const create = async (data) => {       // Create a new contact
    try {
        const newContact = new Contact(data);
        const savedContact = await newContact.save();
        return savedContact;
    } catch (error) {
        throw error;
    }
};


const getAll = async () => {         // Get all contacts
    try {
        const contacts = await Contact.find({});
        return contacts;
    } catch (error) {
        throw error;
    }
};
const getById = async (id) => {  // Get all contacts
    try {
        const contact = await Contact.findById(id);
        return contact;
    } catch (error) {
        throw error;
    }
};
const updateById = async (id, newData) => {   // Update contact by ID
    try {
        const updatedContact = 
        await Contact.findByIdAndUpdate(id, newData, { new: true });
        return updatedContact;
    } catch (error) {
        throw error;
    }
};
const deleteById = async (id) => {  // Delete contact by ID
    try {
        const deletedContact = await Contact.findByIdAndDelete(id);
        return deletedContact;
    } catch (error) {
        throw error;
    }
};
module.exports = {
    create,
    getAll,
    getById,
    updateById,
    deleteById
};
