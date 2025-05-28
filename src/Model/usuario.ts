import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('usuarios')
export class usuario{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: "varchar", length: 65, nullable: false})
    nomeUsuario: string;

    @Column({type: "varchar", length: 100, nullable: false})
    emailUsuario: string;

    @Column({type: "varchar", length: 50, nullable: false})
    senhaUsuario: string;

    constructor(nomeUsuario: string, emailUsuario:string, senhaUsuario: string){
        this.nomeUsuario = nomeUsuario;
        this.emailUsuario = emailUsuario;
        this.senhaUsuario = senhaUsuario;
    }

    getUsuario(): string {
        return '';
    }

    setUsuario(): string{
        return '';
    }
}