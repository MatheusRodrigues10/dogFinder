import { useEffect, useState, useCallback } from 'react'
import { fetchDogsData, fetchDogsSubBreed } from './lib/api'
import { Container, Description, AppBody } from './Styles/styled'
import Loader from './components/Loader';
import DogForm from './components/DogForm';
import { useSelector, UseSelector } from 'react-redux';
import { RootState } from './store/store';

const App = () => {
  const dogStore = useSelector((state: RootState) => state.form)
  
  const [breedList, setBreedList] = useState(null);
  const [subBreedList, setSubBreedList] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const breedState = dogStore?.breed;

  const fetchData = useCallback (async () => {
    await fetchDogsData()
      .then((data) => {
        setBreedList(data?.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error)
      })
      if(breedState !=='all') {
        await fetchDogsSubBreed(breedState)
          .then((data) => {
            setSubBreedList(data?.message);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error(error);
          })
      }
  }, [breedState] );

  useEffect(() => {
    fetchData();
  }, [breedState, fetchData])

  if(isLoading) return <Loader />
  if(!breedList) return <p>Não foram encontrados cachorros</p>

  return (
    <Container>
      <Description>
        <ul>
          <li>
            <strong>Bem-vindo ao DogFinder!</strong> Um aplicativo construído
            com ReactJS, utilizando a Dog API.
          </li>
          <br />
          <li>Principais tecnologias utilizadas:</li>
          <ul>
            <li>
              <strong>ReactJS & TypeScript</strong> para uma aplicação robusta e
              tipada
            </li>
            <li>
              <strong>Redux</strong> para gerenciamento eficiente do estado
            </li>
            <li>
              <strong>Axios</strong> para realizar requisições HTTP
            </li>
            <li>
              <strong>Styled Components</strong> para estilização dinâmica
            </li>
            <li>
              <strong>Jest & React Testing Library</strong> para garantir
              qualidade com testes automatizados
            </li>
          </ul>
        </ul>
      </Description>
      <DogForm 
        breedList={breedList}
        subBreedList={subBreedList}
        setImages={setImages}
        setIsLoading={setIsLoading}
      />
        <p>Resultados:</p>
    </Container>
  )
}

export default App
