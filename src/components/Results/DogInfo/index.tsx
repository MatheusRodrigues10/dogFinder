import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { Container } from './styles'

const DogInfo = () => {
  const dogStore = useSelector((state: RootState) => state.form)

  const breedState = dogStore?.breed
  const subBreedState = dogStore?.subBreed
  const imageResultsState = dogStore?.imageResults

  // Capitaliza a primeira letra de cada palavra no nome da raça ou sub-raça.
  function capitalizeBreed(str: string) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase())
  }

  //Retorna o nome da raça e sub-raça (se houver), ou null se nenhuma imagem for encontrada.
  const renderTitle = () => {
    if (breedState === 'all' || imageResultsState === 0) return null

    const breed = capitalizeBreed(breedState)
    const subBreed =
      subBreedState !== 'all' ? capitalizeBreed(subBreedState) : null

    return <span>{subBreed ? `${breed} - ${subBreed}` : breed}</span>
  }

  return (
    <Container>
      <>
        {renderTitle()}
        <p>{imageResultsState} Resultados</p>
      </>
    </Container>
  )
}

export default DogInfo
