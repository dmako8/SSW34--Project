# Report

## Project Presentation

Here is the link to our project presentation: [video](https://www.youtube.com/watch?v=9Jw5FSSxyYY) 

## Problem your bot solved

 Novice investors need a quick and easy way to access stock/cryptocurrency prices while participating in investing conversations with their friends or other fellow investors. This is a relevant problem because many of these users want on-demand answers and are accustomed to user-friendly and visual exchanges, like Robinhood and Coinbase. Usually, novice investors only pay attention to the ticker price, so there needs to be a way to deliver that information without having to open new windows or checking a phone app while having an online discussion about stocks.

## Primary features and screenshots

The primary feature of CryptoBot is to quickly deliver the most recent trading price of cryptocurrencies. We chose to make a Discord bot because this is a platform where many novice investors hold conversations about their portfolios and/or strategies. Users can quickly get the current quote for a cryptocurrency by using the '!price' command followed by the crypto ticker symbol. We used the Alpha Vantage API, which supports live data for 564 cryptocurrencies. Here is a screenshot showing how CryptoBot responds with the current price of Bitcoin and Litecoin:

![btc](img/btc.png)

CryptoBot also responds with the full name of the requested cryptocurrency, so all other members of the Discord channel can know wich cryptocurrency is being discussed if they are not familiar with the ticker symbol. In addition, the API that we used supports live crypto price collection up to 1-minute intervals. This is an important feature, since cryptocurrencies are generally volatile, and many novice crypto investors base their decisions about buying/selling on whether their watched cryptocurrency reaches a certain price point. Here is a screenshot showing CryptoBot responding with the current price of Etherium in 1-minute intervals:

![eth](img/eth.png)

## Your reflection on the development process and project

## Any limitations and future work