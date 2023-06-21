
export interface IActividad {
    id_actividad:       number,
    nombre:             string,
    cantidadPersonas:   number,
    cantidadGuias:      number,
    precio:             number,
    descripcion:        string,
    hora:               string,
    time:               string,
    imagen:             string,
    estado:             boolean
    expanded?:          boolean; 
}

export interface IPersonalizado {
    id_personalizado:   number,
    nombreUsuario:      string,
    telefono:           number,
    cantidadPersonas:   number,
    cantidadGuias:      number,
    precio:             number,
    hora:               string,
    fecha:              Date,
    descripcion:        string,
    estado:             boolean
}