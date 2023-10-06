import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn,OneToMany } from 'typeorm';
import { UserImage } from './user.imagen.entity';
import { Categoria } from 'src/categoria/entities/categoria.entity';
import { Proveedor } from 'src/proveedor/entities/proveedor.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 30, nullable: false })
  password: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  sexo: string;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  autor:User;

  @OneToMany(() => UserImage, (userImage) => userImage.user,{
    cascade: true,
  }) 
images?: UserImage[];
}

 /* @Column({ type: 'int4', nullable: true })
  private _user_id: number;
  public get user_id(): number {
    return this._user_id;
  }
  public set user_id(value: number) {
    this._user_id = value;
    
  }
    
  //@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  //created_at: Date;

  @Column({ type: 'varchar', nullable: true})
  @Column({ type: 'varchar', nullable: true })
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

  @OneToMany(() => UserImage, (userImage) => userImage.user, {
    cascade: true
  })
  images?: UserImage[];

  @ManyToOne(() => Categoria )
  @JoinColumn({
    name: 'categoria_id',
    referencedColumnName: 'id',
  })
   
  categoria: Categoria;

  @ManyToOne(() => Proveedor )
  @JoinColumn({
    name: 'proveedor_id',
    referencedColumnName: 'id',
  })
   
  proveedor: Proveedor;

  
}
*/