import { Request, Response } from 'express';
import { AppDataSource } from '../dataBase/dataSource';
import { usuario } from '../Model/usuario';
import { WatchFileOptions } from 'fs';

const userRepository = AppDataSource.getRepository(usuario);

export class usuarioController{

    async list(req:Request, res: Response){
        const usuarios = await userRepository.find();
        res.json(usuarios)
        return;
         
    }

    async criarUsuario(req: Request, res: Response){
        const {nomeUsuario, emailUsuario, senhaUsuario} = req.body;

        const usuarioCreate = userRepository.create({nomeUsuario,emailUsuario,senhaUsuario});

        await userRepository.save(usuarioCreate)
        res.status(201).json(usuarioCreate);
        return;
    }

    async verUsuario(req:Request, res: Response){
        const {id} = req.body;

        const usuarioFind = await userRepository.findOneBy({id: Number(id)});

        if(!usuarioFind){
            res.status(404).json({mensagem: 'Usuário não encontrado.'})
            return;
        }
        res.status(200).json(usuarioFind);
        return;
    }

    async editarUsuario(req:Request, res: Response){
        const {id} = req.params;
        const {nomeUsuario, emailUsuario, senhaUsuario} = req.body;


        const usuarioEdit = await userRepository.findOneBy({id: Number(id)});

        if(!usuarioEdit){
            res.status(404).json({mensagem: 'Usuário não encontrado.'})
            return;
        }

        usuarioEdit.nomeUsuario = nomeUsuario;
        usuarioEdit.emailUsuario = emailUsuario;
        usuarioEdit.senhaUsuario = senhaUsuario;

        await userRepository.save(usuarioEdit);
        res.json(usuarioEdit)
        return;
        }

    async deletarUsuario(req:Request, res: Response){

        const { id } = req.params;

        const usuariodelete = await userRepository.findOneBy({ id: Number(id) });

        
        if (!usuariodelete) {
            res.status(404).json({ message: 'Usuário não encontrado' });
            return;
        }

        await userRepository.remove(usuariodelete);
        res.status(204).send();
        return;
    }
}
