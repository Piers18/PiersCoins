import type { CoinInterface } from "../interfaces/Coin";

export const coins: CoinInterface[] = [
    {
        order: 1,
        name: "Bitcoin",
        symbol: "BTC",
        price: 50000,
        priceChange: -2.5,
        code: "BTS"
    },
    {
        order: 2,
        name: "Ethereum",
        symbol: "ETH",
        price: 4000,
        priceChange: 1.2,
        code: "Eth"
    },
    {
        order: 3,
        name: "Cardano",
        symbol: "ADA",
        price: 2.5,
        priceChange: 0.5,
        code: "Car"
    },
    {
        order: 4,
        name: "Solana",
        symbol: "SOL",
        price: 150,
        priceChange: -1.0,
        code: "Sol"
    },
    {
        order: 5,
        name: "Polkadot",
        symbol: "DOT",
        price: 30,
        priceChange: 0.8,
        code: "Dot"
    },
    {
        order: 6,
        name: "Litecoin",
        symbol: "LTC",
        price: 100,
        priceChange: 2.0,
        code: "Ltc"
    }
]