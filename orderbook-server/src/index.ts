import express from "express";
import { OrderInputSchema } from "./zod";
import { getOrderId, fillOrder } from "./controllers/order-controller";

let GLOBAL_TRADE_ID = 0;
export const incrementTradeId = () => { return ++GLOBAL_TRADE_ID };

const BASE_ASSET = 'BTC';
const QUOTE_ASSET = 'USD';

const app = express();
app.use(express.json());


app.post('/api/v1/order', (req, res) => {
  console.log('Inside the "/api/v1/order" handler');
  const order = OrderInputSchema.safeParse(req.body);
  if (!order.success) {
    res.status(400).send(order.error.message);
    return;
  }

  const { baseAsset, quoteAsset, price, quantity, side, kind } = order.data;
  const orderId = getOrderId();

  if (baseAsset !== BASE_ASSET || quoteAsset !== QUOTE_ASSET) {
    res.status(400).send('Invalid base or quote asset');
    return;
  }
  console.log("Parameters inside the 'fillOrder()': ", orderId, price, quantity, side, kind);
  const { executedQty, fills } = fillOrder(orderId, price, quantity, side, kind);

  res.send({ orderId, executedQty, fills });
});

app.listen(3000, () => { console.log('Server is running on port 3000') });
