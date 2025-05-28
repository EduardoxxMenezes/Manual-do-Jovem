import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { usuario } from './usuario';
import { categoria } from './categoria';

@Entity('artigos')
export class artigo{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: 'varchar', length: 100, nullable: false})
    tituloArtigo: string;

    @Column({type: 'varchar', length: 255, nullable: false})
    descArtigo: string;

    @Column({type: 'text', nullable: false})
    conteudoArtigo: Text;

    @Column({type: 'date', nullable: false})
    dataCriacao: Date;

    @Column({})
    autor: usuario;

    @Column({})
    categoria: categoria;

    constructor(tituloArtigo: string, descArtigo: string, conteudoArtigo: Text, dataCriacao: Date, autor: usuario, categoria: categoria){
        this.tituloArtigo = tituloArtigo;
        this.descArtigo = descArtigo;
        this.conteudoArtigo = conteudoArtigo;
        this.dataCriacao = dataCriacao;
        this.autor = autor;
        this.categoria = categoria;
    }
}