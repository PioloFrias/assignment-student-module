import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'students'})
export class students{
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable:false})
    firstName: string

    @Column({nullable:false})
    lastName: string

    @Column({nullable:false, unique:true})
    email: string

    @Column({nullable: true, type: 'date'})
    enrollmentDate: Date

    @CreateDateColumn({ type:"timestamp" })
    createdAt: Date

    @UpdateDateColumn({ type:"timestamp" })
    updateAt: Date
}