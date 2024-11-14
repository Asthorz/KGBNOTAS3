import { Router } from 'express'
import { UsuariosControllers } from './Controles.Services/Usuarios/ControllerUsuarios'
import { LoginUsuariosController } from './Controles.Services/Login/LoginControler'

const router = Router()

// Cadastrar-se// Frontend OK
router.post('/Cadastra', new UsuariosControllers().cadastrarUsuarios)

router.post('/Entra', new LoginUsuariosController().loginUsuario)



export default router