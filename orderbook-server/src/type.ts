`
const orderExample: Order = {
    price: 100.50,      // number representing price
    quantity: 10,       // number representing quantity
    orderId: "ord123"   // string representing unique order ID
}

const bidExample: Bid = {
    price: 100.50,      // inherited from Order
    quantity: 10,       // inherited from Order
    orderId: "bid123",  // inherited from Order
    side: 'bid'         // specific to Bid
}

const askExample: Ask = {
    price: 101.00,      // inherited from Order
    quantity: 5,        // inherited from Order
    orderId: "ask123",  // inherited from Order
    side: 'ask'         // specific to Ask
}

const orderbookExample: Orderbook = {
    bids: [                             // array of Bid objects
        {
            price: 100.50,
            quantity: 10,
            orderId: "bid123",
            side: 'bid'
        },
        {
            price: 100.25,
            quantity: 5,
            orderId: "bid124",
            side: 'bid'
        }
    ],
    asks: [                             // array of Ask objects
        {
            price: 101.00,
            quantity: 5,
            orderId: "ask123",
            side: 'ask'
        },
        {
            price: 101.25,
            quantity: 8,
            orderId: "ask124",
            side: 'ask'
        }
    ]
}

const bookWithQuantityExample = {
    bids: {                    // object with price as key and quantity as value
        "100.50": 10,
        "100.25": 5
    },
    asks: {                    // object with price as key and quantity as value
        "101.00": 5,
        "101.25": 8
    }
}
`
interface Order {
    price: number;
    quantity: number;
    orderId: string;
}

interface Bid extends Order { side: 'bid' }
interface Ask extends Order { side: 'ask' }

interface Orderbook {
    bids: Bid[];
    asks: Ask[];
}

export const orderbook: Orderbook = { 
    bids: [], 
    asks: [] 
}

export const bookWithQuantity: {bids: {[price: number]: number}; asks: {[price: number]: number}} = { 
    bids: {}, 
    asks: {} 
}

// Fill the example interface with the correct types
export interface Fill {
    "price": number,
    "qty": number,
    "tradeId": number,
}