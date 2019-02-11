export interface TipoProyecto {
  _id: String,
  codLista: String,
  nombre: String
}

export interface TipoRespuestaProyectos {
  ok: boolean,
  errBaseDatos?: String,
  err?: String,
  proyectos?: TipoProyecto[],
  proyecto?: TipoProyecto
}

