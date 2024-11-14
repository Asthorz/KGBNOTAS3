import { Request, Response } from 'express'
import { UsuariosServices } from './ServicesUsuarios'


class UsuariosControllers {
    async cadastrarUsuarios(req: Request, res: Response) {
        const { nome, email, password } = req.body
        const enviarDadosServices = new UsuariosServices()
        const resposta = await enviarDadosServices.cadastrarUsuarios({
            nome,
            email,
            password
        })
        return res.json(resposta)
    }}
    export { UsuariosControllers }