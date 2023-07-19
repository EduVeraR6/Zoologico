// Modulo Actividades
export const GET_HORARIOS           = 'CONSULTA_HORARIO';

export const GET_ACTIVIDADES        = 'CONSULTA_ACTIVIDADES';
export const POST_ACTIVIDAD         = 'AGREGAR_ACTIVIDAD';
export const UPDATE_ACTIVIDAD       = 'ACTUALIZAR_ACTIVIDAD';
export const DELETE_ACTIVIDAD       = 'ELIMINAR_ACTIVIDAD';

export const GET_PERSONALIZADOS     = 'CONSULTA_PERSONALIZADOS';
export const POST_PERSONALIZADO     = 'AGREGAR_PERSONALIZADO';
export const UPDATE_PERSONALIZADO   = 'ACTUALIZAR_PERSONALIZADO';
export const DELETE_PERSONALIZADO   = 'ELIMINAR_PERSONALIZADO';




export interface ITransacciones {
    GET_HORARIOS:           string
    
    GET_ACTIVIDADES:        string
    POST_ACTIVIDAD:         string
    UPDATE_ACTIVIDAD:       string
    DELETE_ACTIVIDAD:       string
    
    GET_PERSONALIZADOS:     string
    POST_PERSONALIZADO:     string
    UPDATE_PERSONALIZADO:   string
    DELETE_PERSONALIZADO:   string
}
