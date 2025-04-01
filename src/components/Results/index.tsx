import DogInfo from "./DogInfo";
import Images from "./Images";
import { Container } from "./styles";

interface Props {
    images: string[]
}

const Results = ({ images }: Props) => {
    return (
        <Container>
            <h1>Galeria</h1>
            <DogInfo />
            <Images images={images}/>
        </Container>
    )
}

export default Results;