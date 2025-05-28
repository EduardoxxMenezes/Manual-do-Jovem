import { Router } from "express";
import { usuarioController } from "../Controller/usuarioController";

const rout = Router()
const usuarioControl = new usuarioController()


rout.get('/usuario', usuarioControl.list)
rout.get('/usuario/:id', usuarioControl.verUsuario)
rout.post('/usuario', usuarioControl.criarUsuario)
rout.put('/usuario/:id', usuarioControl.editarUsuario)
rout.delete('/usuario/:id', usuarioControl.deletarUsuario)

export default rout;