export interface TipoLogComPro {
    fecha: String,
        estado: String,
        autor: String
}

export interface TipoResLogComPro {
    ok: Boolean,
    errBaseDatos? : Boolean,
    err?: String,
    logs?: TipoLogComPro[]
}
