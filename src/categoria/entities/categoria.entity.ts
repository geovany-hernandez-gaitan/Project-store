import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn({ type: 'int4' })
    id: number;

    @Column({ type: 'varchar', nullable: true })
    categoria: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'int4' })
    user_id: number;
}