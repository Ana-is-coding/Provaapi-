import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { con } from './src/repository/connection.js'
import animecontroller from './controller/animecontroller.js'
const server = express();
server.use(cors());
server.use(express.json());
server.use(animecontroller);
server.listen(process.env.PORT, () => console.log(`API conectado na porta ${process.env.PORT}`));


