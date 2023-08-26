import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
<<<<<<< HEAD
export class ProductImage{
    @PrimaryGeneratedColumn({type: 'int4'})
    id: number;

    @Column({type: 'varchar', nullable: true})
    url: string;

}
=======
export class ProductImage {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ type: 'varchar', nullable: true })
  url: string;
}
>>>>>>> c0fc9c5c4be05aac411a4a4fb88e0cee7b3ab454
