'use strict';
import { DbService } from './db-service.js';


export default {
    getUser,
    signup,
    addMove,
    logout
}

const KEY = 'user';

var gUser = null;

async function _getUsers() {
    var users = await DbService.query(KEY);
    return users
}

async function getUser() {
    return gUser
}

async function signup(name) {
    const users = await _getUsers();
    const user = {
        name,
        coins: 100,
        moves: []
    }
    users.push(user)
    const res = await DbService.insert(KEY, users);
    gUser = res[0]
    return gUser;
}

function logout() {
    gUser = null;
}

async function addMove(contact, amount) {
    gTransactions.push({
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount
    })
    return gTransactions
}