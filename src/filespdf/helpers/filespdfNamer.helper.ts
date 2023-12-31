import { v4 as id} from 'uuid';

export const fileNamer = (
    req: Express.Request,
    file: Express.Multer.File,
    callback,
) => {
    if (!file) return callback(new Error ('Archivo Vacio'), false);

    const fileExtension = file.mimetype.split('/')[1];

//creo una interpolacion, uniendo el uuid con la extension del archivo
    const fileNamer = `${id()}.${fileExtension}`;

 //Retornar el nombre del archivo
    callback(null, fileNamer);
    
};