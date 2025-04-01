import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { resetBreedState } from "../../store/slices/formSlice";

import { ResetButton, FetchButton } from "./styles";

import { fetchImagesHelper } from "../../utils/fetchImagesHelper";

interface Props {
    setImages: React.Dispatch<React.SetStateAction<never[]>>;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Button = ({setImages, setIsLoading}: Props) => {
    const dogStore = useSelector((state: RootState) => state.form);
    const dispatch = useDispatch<AppDispatch>()
            
    const breedState = dogStore?.breed;
    const subBreedState = dogStore?.subBreed;
    const numberState = dogStore?.number;


    const handleImagesFetch = () => {
        fetchImagesHelper(
            breedState,
            subBreedState,
            numberState,
            setImages,
            setIsLoading,
            dispatch
        );
    };


    return (
        <>
        <FetchButton role="button" onClick={() => handleImagesFetch()}>
          Buscar
        </FetchButton>
        <ResetButton
          role="button"
          onClick={() => { dispatch(resetBreedState()) }}
        >
          Reiniciar pesquisa
        </ResetButton>
      </>
    )
};

export default Button;
