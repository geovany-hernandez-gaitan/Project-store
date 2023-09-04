
export const fileFilter = (
    req: Express.Request,
    file: Express.Multer.File,
    callback,
) => {
    //si el archivo no existe entonces no viene
    if(!file) return callback(new Error('Archivo vacio'), false);

    //Lllegamos hasta el mimetype y tomamos la extencion del archivo

    const fileExtension = file.mimetype.split('/')[1];

    //Estas serian las extenciones validas para los archivos
    const validExtension = ['jpg', 'png', 'jpeg', 'JPG', 'PNG'];

    //si las extensiones validas incluyen las extenciones del archivo

    if(validExtension.includes(fileExtension)) {
        return callback(null, true);

    }

    callback(null, false);
} ;