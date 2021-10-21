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
    var rate = await DbService.query(KEY);
    console.log(rate);
    if (!rate || !rate.length) {
        rate = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1');
        console.log("🚀 ~ file: bitcoin.service.js ~ line 10 ~ getRate ~ rate", rate)
        await DbService.insert(KEY, rate);
    }
    return rate;
}

async function getMarketPrice() {
    const KEY = 'marketprice';
    var marketPrice = await DbService.query(KEY);
    console.log(marketPrice);
    if (!marketPrice || !marketPrice.length) {
        marketPrice = await axios.get('https://api.blockchain.info/charts/market-price?timespan=2months&format=json&cors=true');
        console.log("🚀 ~ file: bitcoin.service.js ~ line 30 ~ getMarketPrice ~ marketPrice", marketPrice)
        await DbService.insert(KEY, marketPrice);
    }
    return marketPrice;
}

async function getConfirmedTransactions() {
    const KEY = 'confirmedtransactions';
    var confirmedTransactions = await DbService.query(KEY);
    console.log(confirmedTransactions);
    if (!confirmedTransactions || !confirmedTransactions.length) {
        confirmedTransactions = await axios.get('https://api.blockchain.info/charts/trade-volume?timespan=2months&format=json&cors=true');
        console.log("🚀 ~ file: bitcoin.service.js ~ line 42 ~ getConfirmedTransactions ~ ConfirmedTransactions", confirmedTransactions)
        await DbService.insert(KEY, confirmedTransactions);
    }
    return confirmedTransactions;
}

