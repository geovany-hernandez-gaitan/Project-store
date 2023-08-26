import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { MarcasModule } from './marcas/marcas.module';
import { FilesModule } from './files/files.module';
<<<<<<< HEAD
import { CategoriaModule } from './categoria/categoria.module';
=======
>>>>>>> c0fc9c5c4be05aac411a4a4fb88e0cee7b3ab454

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'shop',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProductsModule,
    UsersModule,
    MarcasModule,
    FilesModule,
<<<<<<< HEAD
    CategoriaModule,
=======
>>>>>>> c0fc9c5c4be05aac411a4a4fb88e0cee7b3ab454
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
