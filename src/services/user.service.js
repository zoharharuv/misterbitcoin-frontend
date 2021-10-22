'use strict';
import { DbService } from './db-service.js';


export default {
    getUser,
    signup,
    addMove,
    logout,
    getTransactions
}


var gUser = null;

async function _getUsers() {
    const KEY = 'user';
    var users = await DbService.query(KEY);
    return users
}

async function getTransactions(contact = null, moves = null) {
    const KEY = 'transaction';
    var transactions = await DbService.query(KEY);
    if (contact) transactions = transactions.filter(move => move.toId === contact._id)
    if (moves) {
        const start = Math.max(transactions.length - 3, 0)
        transactions = transactions.slice(start, transactions.length)
    }
    return transactions.reverse()
}

async function getUser() {
    return gUser
}

async function signup(name) {
    const KEY = 'user';
    const users = await _getUsers();
    const user = {
        name,
        coins: 100,
        moves: []
    }
    users.push(user)
    const res = await DbService.post(KEY, user);
    gUser = res
    return gUser;
}

function logout() {
    gUser = null;
}

async function addMove(contact, amount) {
    if (!gUser) return;
    const KEY = 'transaction';
    const transactions = await getTransactions();
    var move = {
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount
    }
    transactions.push(move)
    await DbService.post(KEY, move);
    gUser.coins -= amount;
    return transactions;
}