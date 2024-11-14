import { prismaClient } from "../../Prisma"
import { hash } from 'bcryptjs'

interface CadUsuarios {
    nome: string,
    email: string,
    password: string
}


class UsuariosServices {
    async cadastrarUsuarios({ nome, email, password }: CadUsuarios) {
        // Criptografando a senha
        const senhaCrypt = await hash(password, 8)
        
        // Criando o usuário no banco de dados
        await prismaClient.cadastarUsuarios.create({
            data: {
                nome: nome,
                email: email,
                senha: senhaCrypt
            }
        })

        return ({ dados: 'Cadastro Efetuado Com Sucesso' })
    }
}

export { UsuariosServices }
