import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from '../../users/entities/user.entity';
@Entity()
export class Product {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 300, nullable: false })
  description: string;

  @Column({ type: 'int4', nullable: false })
  price: number;

  @Column({ type: 'int8', nullable: false })
  stock: number;

  @Column({ type: 'int4', nullable: false })
  private _user_id: number;
  public get user_id(): number {
    return this._user_id;
  }
  public set user_id(value: number) {
    this._user_id = value;
  }

<<<<<<< HEAD
  //@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  //created_at: Date;

  @Column({ type: 'varchar', nullable: true})
=======
  @Column({ type: 'varchar', nullable: true })
>>>>>>> c0fc9c5c4be05aac411a4a4fb88e0cee7b3ab454
  filename: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  
  //Relaciones
  @ManyToOne(() => User)
  @JoinColumn({
    name: 'user_id', //el campo que relaciona a mi tabla
    referencedColumnName: 'id', //este es el id del usuario
  })
  autor: User;
}
