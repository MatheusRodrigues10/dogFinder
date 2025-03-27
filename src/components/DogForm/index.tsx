//styles
import { DogFormContainer } from "./styles"

//redux
import { useDispatch, useSelector } from "react-redux"
import { setBreed, setSubBreed, setNumber } from "../../store/slices/formSlice"
import { RootState, AppDispatch } from "../../store/store"

//componentes
import DropDown from "./DropDown"

//import de types
import { BreedsType } from "../../types/bread"


interface Props {
    breedList: BreedsType;
    subBreedList: string[];
    setImages: any
    setIsLoading: any
}

const DogForm = ({ breedList, subBreedList, setImages, setIsLoading }: Props) => {
    const dispatch = useDispatch<AppDispatch>();
    const dogStore = useSelector((state: RootState) => state.form)

    //renderiza a lista no select
    const renderBreed = (value: string) => {
        dispatch(setBreed(value))
        dispatch(setSubBreed(value))
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

    return (
    <DogFormContainer>
        <p>Formulário:</p>
        
        <DropDown
            title="Selecione uma raça"
            showError={false}
        >
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
                ))
            }
            </select>
        </DropDown>
        
        <DropDown
            title="Selecione um Subtipo"
            showError={false}
        >
            <select 
                onChange={(e) => renderSubBreed(e.target.value)}
                value={subBreedState}
            >
            <option value="all">Selecione o Subtipo</option>
            {subBreedList?.length &&
                subBreedList?.map((subBreed: string, index: number) => (
                    <option value={subBreed} key={index}>
                        {subBreed}
                    </option>
                ))
            }
            </select>
        </DropDown>

        <DropDown
            title="Selecione o número de imagens"
            showError={false}
        >
            <select 
                onChange={(e) => renderNumber(e.target.value)}
                value={numberState}
            >
            <option value="all">Selecione a quantidade de imagens</option>
            {Array.from({length: 50}, (_, index) => (
                <option value={index + 1} key={index}>{index + 1}</option>
            ))}
            </select>

            //criar botão de submit
        </DropDown>
    </DogFormContainer>
    
  )
};

export default DogForm;