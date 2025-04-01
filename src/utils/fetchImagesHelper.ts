import { fetchBreedImages, fetchSubBreedImages } from '../lib/api'
import { AppDispatch } from '../store/store'
import { setError, setImageResults } from '../store/slices/formSlice'

export const fetchImagesHelper = async (
  breed: string,
  subBreed: string,
  number: string,
  setImages: React.Dispatch<React.SetStateAction<never[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  dispatch: AppDispatch,
) => {
  if (breed === 'all') {
    dispatch(setError(true))
    return
  }

  try {
    let data

    if (subBreed === 'all') {
      data = await fetchBreedImages(breed, number)
    } else {
      data = await fetchSubBreedImages(breed, subBreed, number)
    }

    if (data?.status === 'success' && data?.message.length) {
      setImages(data.message)
      dispatch(setImageResults(data.message.length))
    } else {
      console.log('Nenhuma imagem encontrada.')
    }
  } catch (error) {
    console.error('Erro ao buscar imagens:', error)
  } finally {
    setIsLoading(false)
  }
}
