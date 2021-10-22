'use strict';

import { DbService } from './db-service.js';

const KEY = 'contact';

export default {
    query,
    get,
    remove,
    save,
    getEmptyContact
}

async function query() {
    var contacts = await DbService.query(KEY);
    if (!contacts || !contacts.length) {
        contacts = _createDefaultContacts();
        await DbService.insert(KEY, contacts);
    }
    return contacts;
}

async function get(id) {
    const contact = await DbService.get(KEY, id);
    if (!contact) {
        throw new Error('Unknown Contact')
    }
    return contact
}

function remove(id) {
    return DbService.delete(KEY, id);
}

function save(contact) {
    if (contact._id) return DbService.put(KEY, contact);
    else return DbService.post(KEY, contact)
}


function getEmptyContact() {
    return {
        name: '',
        email: '',
        phone: '000'
    }
}

function _createDefaultContacts() {
    return [
        _createContact('Zohar Haruv', 'zoharharuv@renovize.com', '+1 (555) 593-4523'),
        _createContact('Noam Porat', 'noamporat@renovize.com', '+1 (666) 593-7562'),
        _createContact('David Mishal', 'davidmishal@renovize.com', '+1 (777) 593-3124'),
    ];
}

function _createContact(name, email, phone) {
    return {
        name,
        email,
        phone
    }
}