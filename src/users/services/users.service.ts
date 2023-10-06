import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, DataSource } from 'typeorm';
import { CreateUserDto } from '../dto/user.dto';
import { User } from '../entities/user.entity';
//import { UserImage } from '../entities/user-image.entity';
import { UserImage } from "../entities/user.imagen.entity";




@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>,

        @InjectRepository(UserImage)
        private readonly userImageRepo: Repository<UserImage>,

        private readonly dataSource: DataSource,
    ){}
    //Crear un registro
    /*async create(CreateUserDto: CreateUserDto) {
        const user = this.userRepo.create(CreateUserDto);
        await this.userRepo.save(user);

        return user;
    }*/
    //Encontrar un registro
    /*findOne(id: number){
        return this.userRepo.findOneBy({id});
    }*/

    //Mostrar todos los registros 
    /*findAll() {
        return this.userRepo.find({
            order: {id: 'ASC'},
        });
    }*/


    //Crando funcion para crear una imagen
    async create(userDto: CreateUserDto) {
        const { images = [], ...detailsUser} = userDto;

        const user = await this.userRepo.create({...detailsUser,
            images: images.map((image) =>
            this.userImageRepo.create({ url:image }),
            ),
        });   

        await this.userRepo.save(user);
        return user;
    }

    findOne(id: number){
        return this.userRepo.findOne({
            where: {id},
            relations:{
                autor: true,
            },
        });
    }

    findAll() {
        return this.userRepo.find({
            order: { id: 'ASC'},
            relations:{
                images: true,
            },  
        });
    }

    //Eliminar un registro
    async remove(id: number) {
        const User = await this.findOne(id);
        await this.userRepo.remove(User);
        return 'Usuario eliminado con exito!';
    }
    //Actualizar un registro o producto
    /*async update (id: number, cambios: CreateUserDto){
        const oldUser = await this.findOne(id);
        const updateUser = await this.userRepo.merge(oldUser, cambios);
        return this.userRepo.save(updateUser);
    } */


    async update(id: number, cambios: CreateUserDto) {
        const { images, ...updateAll } = cambios;
        const user = await this.userRepo.preload({
        id: id,
        ...updateAll,  
        });
    

        const  queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
    
        if(images) {
        
            await queryRunner.manager.delete(UserImage, {user: {id}});
    
            //Creamos nuevas imagenes de producto
            user.images = images.map((image) =>
                this.userImageRepo.create({ url: image}),
            );
        } else {
            user.images = await this.userImageRepo.findBy({ user: {id} });
        }
    
        //Guardamos en usuario
        await queryRunner.manager.save(user);
    
        //Se finaliza la transaccion y liberamos el queryRunner
        await queryRunner.commitTransaction();
        await queryRunner.release();
    
        return user;
        }

}











/*import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/user.dto';
import { join } from 'path';
import { existsSync } from 'fs';

@Injectable()
export class UsersService {
  constructor() {}
   /* @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}


  getStaticImageName (imageName: string) {
    const path = join (__dirname, '../../../static/products', imageName); 

    //si no existe la imagen al buscarla en la ruta entonces

    if (!existsSync(path)) {
        throw new BadRequestException( 'No existe un producto con la imagen ${imageName}',
        );
    }
//si existe la imagen entonces que retorne
    return path;
  }
}

 /* async create(createUserDto: CreateUserDto) {
    const user = this.userRepo.create(createUserDto);
    await this.userRepo.save(user);
    return user;
  }

  findOne(id: number) {
    return this.userRepo.findOneBy({ id });
  }

  findAll() {
    return this.userRepo.find({
      order: { id: 'ASC' },
    });
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    await this.userRepo.remove(user);
    return 'Usuario removido correctamente';
  }

  async update(id: number, cambios: CreateUserDto) {
    const oldUser = await this.findOne(id);
    const updateUser = await this.userRepo.merge(oldUser, cambios);
    return this.userRepo.save(updateUser);
  }
}
*/