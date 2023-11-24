interface Telefone {
  numero: string
  ddd: string
}

export interface CreateUserDTO {
  nome: string
  email: string
  senha: string
  telefones: Telefone[]
}

export interface OutputUserDTO {
  id: string
  data_criacao: Date
  data_atualizacao: Date
  ultimo_login: Date
  token: string
}

export interface AllDataUserDTO {
  id: string
  nome: string
  email: string
  data_criacao: Date
  data_atualizacao: Date
  ultimo_login: Date
  telefones?: Telefone[]
}

export interface GetUserDTO {
  id: string
}
