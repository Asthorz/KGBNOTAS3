import {prismaClient} from "../../Prisma" // Verifique se o caminho e a exportação estão corretos
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface Login {
    email: string,
    password: string
}

class LoginServices {
    async loginUsuarios({ email, password }: Login) {
        // Busque o usuário no banco de dados usando o email
        const usuario = await prismaClient.cadastarUsuarios.findFirst({
            where: {
                email: email
            }
        })

        // Verifique se o usuário foi encontrado
        if (!usuario) {
            throw new Error('Usuário ou senha incorretos')
        }

        // Verifique se a senha está correta
        const senhaCrypt = await compare(password, usuario.senha)
        if (!senhaCrypt) {
            throw new Error('Usuário ou senha incorretos')
        }

        // Gere o token JWT com os dados do usuário
        const token = sign(
            {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email
            },
            process.env.JWT_SECRETO || '', // Verifique se o JWT_SECRETO está definido
            {
                subject: usuario.id,
                expiresIn: '8h'
            }
        )

        // Retorne os dados do usuário e o token
        return {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            token: token
        }
    }
}

export { LoginServices }
