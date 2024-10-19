import express from "express";
import {accionMostrarHotel} from "../controllers/hotel/hotelController.js";
const router_Hotel = express.Router();
//ruta para consultar hotel
router_Hotel.get("/mostrarHotel", accionMostrarHotel);



export default router_Hotel;