//styles
import { DogFormContainer } from './styles'

//redux
import { useDispatch, useSelector } from 'react-redux'
import {
  setBreed,
  setSubBreed,
  setNumber,
  setError,
} from '../../store/slices/formSlice'
import { RootState, AppDispatch } from '../../store/store'

//componentes
import DropDown from './DropDown'

//import de types
import { BreedsType } from '../../types/bread'
import Button from '../Button'

interface Props {
  breedList: BreedsType
  subBreedList: string[]
  setImages: React.Dispatch<React.SetStateAction<never[]>>
  setIsLoading: any
}

const DogForm = ({
  breedList,
  subBreedList,
  setImages,
  setIsLoading,
}: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  const dogStore = useSelector((state: RootState) => state.form)

  //renderiza a lista no select
  const renderBreed = (value: string) => {
    dispatch(setBreed(value))
    dispatch(setError(false))
  }
  const renderSubBreed = (value: string) => {
    dispatch(setSubBreed(value))
  }
  const renderNumber = (value: string) => {
    dispatch(setNumber(value))
  }

  //pega os valores e passa ao selector
  const breedState = dogStore?.breed
  const subBreedState = dogStore?.subBreed
  const numberState = dogStore?.number
  const errorState = dogStore?.error

  return (
    <DogFormContainer>
      <p>Formulário:</p>

      <DropDown title="Selecione uma raça" showError={errorState}>
        <select
          onChange={(e) => renderBreed(e.target.value)}
          value={breedState}
        >
          <option value="all">Selecione a raça</option>
          {breedList &&
            Object.keys(breedList)?.map((breed, index) => (
              <option value={breed} key={index}>
                {breed}
              </option>
            ))}
        </select>
      </DropDown>

      {subBreedList?.length ? (
        <DropDown title="Selecione um Subtipo">
          <select
            onChange={(e) => renderSubBreed(e.target.value)}
            value={subBreedState}
          >
            <option value="all">Selecione um Tipo</option>
            {subBreedList?.length &&
              subBreedList?.map((subBreed: string, index: number) => (
                <option value={subBreed} key={index}>
                  {subBreed}
                </option>
              ))}
          </select>
        </DropDown>
      ) : (
        // Se não houver sub-raças, reseta o estado e não renderiza nada
        (dispatch(setSubBreed('all')), null)
      )}

      <DropDown title="Selecione o número de imagens">
        <select
          onChange={(e) => renderNumber(e.target.value)}
          value={numberState}
        >
          <option value="all">Selecione a quantidade de imagens</option>
          {Array.from({ length: 50 }, (_, index) => (
            <option value={index + 1} key={index}>
              {index + 1}
            </option>
          ))}
        </select>
      </DropDown>

      <Button setImages={setImages} setIsLoading={setIsLoading} />
    </DogFormContainer>
  )
}

export default DogForm
