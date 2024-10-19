import Gerente from "../../models/Gerente.js";
import { Hotel } from "../../models/Hotel.js";
const accionMostrarHotel = async(req,res) =>{
    const hoteles = await Hotel.findAll({
        Include:{
            model: Gerente
        },
        raw: true,
        nest: true
    });
    res.render("hotel/consultaHotel",{
        pagina: "Lista de Hoteles",
        hotel: hoteles
    });
};
export {accionMostrarHotel}