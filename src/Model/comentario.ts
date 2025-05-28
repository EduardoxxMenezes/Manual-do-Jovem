import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { usuario } from './usuario';

@Entity('comentarios')
export class comentario{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({})
    autor: usuario;

    @Column({type: 'varchar', length: 500, nullable: false})
    conteudoComentario: string;

    @Column({type: 'date', nullable:false})
    dataCriacao: Date;

    constructor(autor: usuario, conteudoComentario: string, dataCriacao: Date){
        this.autor = autor;
        this.conteudoComentario = conteudoComentario;
        this.dataCriacao = dataCriacao;

    }
}