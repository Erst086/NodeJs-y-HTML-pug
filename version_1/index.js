import express from "express";
import router_inicio from "./routes/inicio_router.js";
import router_Hotel from "./routes/hotel_router.js"
import router_Gerente from "./routes/gerente_router.js";
import db from "./config/db.js";
//crea aplicacion
const app = express();
//accesos a los datos de los formularios
app.use(express.urlencoded({extended : true}));
//pug 
app.set("view engine", "pug");
app.set("views", "./views");
//carpeta publica
app.use(express.static("public"));
//routing
app.use("/", router_inicio);
app.use("/hotel", router_Hotel);
app.use("/gerente", router_Gerente);
//app.use("/cred", credenciales_router);
app.use("/hotel", router_Hotel);
//definir puerto 
const port = 2800;
app.listen(port, ()=>{
    console.log(`Esperando peticiones en el puerto ${port}`);
});
//conectando la base de datos
try{
    await db.authenticate();
    console.log("Conexion exitossa a BD");
}catch(error){
    console.log(error);
}