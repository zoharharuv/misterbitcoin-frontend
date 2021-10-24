'use strict';
import { DbService } from './db-service.js';
import { Utils } from './utils.service';


const KEY = 'user';

export default {
    query,
    get,
    remove,
    save,
    getEmptyUser,
    getByUsername,
    login,
    logout,
    getLoggedInUser,
    getTransactions,
    addMove
};

async function getTransactions(contact = null, numOfMoves = null) {
    const KEY = 'transaction';
    const user = await getLoggedInUser()
    if (!user) return;
    var transactions = await DbService.query(KEY);
    transactions = transactions.filter(move => move.fromId === user._id)
    if (contact) transactions = transactions.filter(move => move.toId === contact._id)
    if (numOfMoves) {
        const start = Math.max(transactions.length - numOfMoves, 0)
        transactions = transactions.slice(start, transactions.length)
    }
    return transactions.reverse()
}

async function addMove(contact, amount) {
    const user = await getLoggedInUser()
    if (!user) return;
    const KEY = 'transaction';
    const transactions = await getTransactions();
    var move = {
        from: user.fullname,
        fromId: user._id,
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount
    }
    transactions.push(move)
    await DbService.post(KEY, move);
    user.coins -= amount;
    await save(user)
    Utils.storeToStorage('loggedInUser', user);
    return transactions;
}

async function login(creds) {
    const user = await getByUsername(creds.username);
    if (user.password !== creds.password) {
        throw new Error('Wrong username or username');
    }
    Utils.storeToStorage('loggedInUser', user);
    return user;
}

async function logout() {
    localStorage.removeItem('loggedInUser');
    return Promise.resolve();
}

function getLoggedInUser() {
    const user = localStorage.loggedInUser;
    if (!user) return null;
    return JSON.parse(user);
}

async function getByUsername(username) {
    const users = await query();
    const user = users.find(user => user.username === username);
    if (!user) {
        throw new Error('Unknown User');
    }
    return Promise.resolve(user);
}

async function query() {
    const users = await DbService.query(KEY);
    return users || [];
}

async function get(id) {
    const user = await DbService.get(KEY, id);
    if (!user) {
        throw new Error('Unknown User');
    }
    return user;
}

function remove(id) {
    return DbService.delete(KEY, id);
}

async function save(user) {
    if (user._id) return DbService.put(KEY, user);
    else {
        user.moves = [];
        user.coins = 100;
        await DbService.post(KEY, user);
        return await login(user)
    }
}


function getEmptyUser() {
    return {
        name: "",
        username: "",
        phone: "",
        password: "",
        isAdmin: false
    };
}


