const PORT = process.env.PORT || 9000;

import express from "express";
import 'express-async-errors';
import cors from "cors";
import "./database/connection";
import Routes from '../routes';
import path from 'path';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(Routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
