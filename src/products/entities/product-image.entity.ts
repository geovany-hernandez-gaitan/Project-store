import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()

export class ProductImage{
    @PrimaryGeneratedColumn({type: 'int4'})
    id: number;

    @Column({type: 'varchar', nullable: true})
    url: string;
//Relaciones
//:TODO:Escribir una relacion que se llamara

@ManyToOne(() => Product, (product) => product.images, {
    onDelete: 'CASCADE',
})
product:Product;

}
