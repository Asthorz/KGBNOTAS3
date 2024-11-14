import { Request, Response } from 'express';
import { LoginServices } from './LoginServices';

class LoginUsuariosController {
    async loginUsuario(req: Request, res: Response) {
      
            const { email, password } = req.body;
            const enviarDadosServices = new LoginServices();

            const resposta = await enviarDadosServices.loginUsuarios({
                email,
                password
            });

            return res.json(resposta);
    }
}

export { LoginUsuariosController };
