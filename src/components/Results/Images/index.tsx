import { Container, ImageContainer } from './styles'

interface Props {
  images: string[]
}

const Images = ({ images }: Props) => {
  return (
    <Container>
      {images?.map((image, index) => (
        <ImageContainer key={index}>
          <img src={image} alt="Imagem de cachorro" loading="lazy" />
        </ImageContainer>
      ))}
    </Container>
  )
}

export default Images
