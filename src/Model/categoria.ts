import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('categorias')
export class categoria{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: 'varchar', length: 100, nullable: false})
    nomeCategoria: string;

    constructor(nomeCategoria: string){
        this.nomeCategoria = nomeCategoria;
    }
}
