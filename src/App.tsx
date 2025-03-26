import { fetchDogsData } from './lib/api'
import { Container, Description, AppBody } from './Styles/styled'

const App = () => {
  const fetchData = async () => {
    await fetchDogsData()
      .then((data) => {
        console.log(data?.message)
      })
      .catch((error) => {
        console.error(error)
      })
  }

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
      <AppBody>Formulário:</AppBody>
    </Container>
  )
}

export default App
