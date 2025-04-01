import axios from './axios'

//buscar todos os tipos de data de cachorro
export const fetchDogsData = async () => {
  try {
    const response = await axios.get('/breeds/list/all')
    return response?.data
  } catch (err) {
    //verificando se é um erro normal de um inesperado
    if (err instanceof Error) {
      console.log(err, 'mensagem de erro')
    } else {
      console.log('Erro inesperado', err)
    }
  }
}

//buscar por sub raças
export const fetchDogsSubBreed = async (breed: string) => {
  try {
    const response = await axios.get(`/breed/${breed}/list`)
    return response?.data
  } catch (err) {
    //verificando se é um erro normal de um inesperado
    if (err instanceof Error) {
      console.log(err, 'mensagem de erro')
    } else {
      console.log('Erro inesperado', err)
    }
  }
}

//buscar por imagens
export const fetchBreedImages = async (breed: string, number: string) => {
  try {
    const response = await axios.get(`/breed/${breed}/images/random/${number}`)
    return response.data
  } catch (err) {
    //verificando se é um erro normal de um inesperado
    if (err instanceof Error) {
      console.log(err, 'mensagem de erro')
    } else {
      console.log('Erro inesperado', err)
    }
  }
}

//buscar por imagens com sub categoria
export const fetchSubBreedImages = async (
  breed: string,
  subBreed: string,
  number: string,
) => {
  try {
    const response = await axios.get(
      `breed/${breed}/${subBreed}/images/random/
            ${number}`,
    )
    return response?.data
  } catch (err) {
    //verificando se é um erro normal de um inesperado
    if (err instanceof Error) {
      console.log(err, 'mensagem de erro')
    } else {
      console.log('Erro inesperado', err)
    }
  }
}
