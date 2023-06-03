
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

export interface IUsuario {
    id_usuario:         number,
    nombreUsuario:      string,
    telefono:           number,
    cantidadPersonas:   number,
    cantidadGuias:      number,
    precio:             number,
    hora:               string,
    descripcion:        string,
    estado:             boolean
}