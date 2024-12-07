
import bodyParser from "body-parser";
import express from "express";
import { connectDB } from "./config/connectDB.js";
import serviceRoutes from './routes/service_Routes.js'
import reservationRoutes from './routes/reservation_Routes.js'
import authRoutes from './routes/auth_Routes.js'
const port = 3000
const app = express();
connectDB();

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/services', serviceRoutes);
app.use('/reservations', reservationRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });