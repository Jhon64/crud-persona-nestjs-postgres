import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('entity')
export class PersonaEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nombres:string

    @Column()
    apellidos:string

    @Column({unique:true})
    dni:string

    @Column({nullable:false})
    direccion:string

    @Column({nullable:false})
    celular:string

    @Column()
    status:boolean

    @Column()
    sexo:string
}