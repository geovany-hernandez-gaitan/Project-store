import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity()
export class Proveedor{
    @PrimaryGeneratedColumn({type: 'int4'})
    id: number;

    @Column({ type: 'varchar', nullable: true})
    proveedor: string;

    @Column({ type: 'int4'})
    user_id: number;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    
}