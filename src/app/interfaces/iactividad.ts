
export interface IActividad {
    id_actividad:       number,
    nombre:             string,
    cantidadPersonas:   number,
    cantidadGuias:      number,
    precio:             number,
    descripcion:        string,
    hora:               Date,
    imagenes:           IImagen[],
    personalizado:      boolean,
    estado:             boolean
}

export interface IImagen {
    id_imagen:          number,
    nombre:             string
}

export interface IUsuario {
    id_usuario:         number,
    nombreUsuario:      string,
    telefono:           number,
    correo:             string,
    cantidadPersonas:   number,
    cantidadGuias:      number,
    precio:             number,
    hora:               Date,
    estado:             boolean
}