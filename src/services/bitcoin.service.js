'use strict';
import axios from "axios";
import { DbService } from './db-service.js';

export default {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}


async function getRate(coins) {
    const KEY = 'rate';
    const API_URL = 'https://blockchain.info/tobtc?currency=USD&value=1'
    var rate = await DbService.query(KEY);
    if (!rate || !rate.length) {
        const res = await axios.get(API_URL);
        rate = await DbService.insert(KEY, res.data);
    }
    return rate[0];
}

async function getMarketPrice() {
    const KEY = 'marketprice';
    const API_URL = 'https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true'
    var marketprice = await DbService.query(KEY);
    if (!marketprice || !marketprice.length) {
        const res = await axios.get(API_URL);
        marketprice = await DbService.insert(KEY, res.data);
    }
    return marketprice[0];
}

async function getConfirmedTransactions() {
    const KEY = 'confirmedtransactions';
    const API_URL = 'https://api.blockchain.info/charts/trade-volume?timespan=1months&format=json&cors=true'
    var confirmedtransactions = await DbService.query(KEY);
    if (!confirmedtransactions || !confirmedtransactions.length) {
        const res = await axios.get(API_URL);
        confirmedtransactions = await DbService.insert(KEY, res.data);
    }
    return confirmedtransactions[0];
}

