export interface TipoComProyecto {
  proyecto: String,
  referencia: String,
  url: String,
  cantidad: String,
  descripcion: String,
  estado: String,
  codAirzone: String
}

export interface TipoRespuestaComProyecto {
  ok: Boolean,
  errBaseDatos?: String,
  err?: String,
  prcomponentes?: TipoComProyecto[]
}
