import { ReactNode } from 'react'
import { Container, DropdownContainer, ErrorText } from './styles';

interface Props {
    title: string;
    children: ReactNode;
    showError?: boolean;
}

const DropDown = ( { title, children, showError } : Props) => {
  return (
    <Container>
        <h5>{title}</h5>
        <DropdownContainer>
            {children}
        </DropdownContainer>
        {showError && <ErrorText>
        Por favor selecione uma raça acima</ErrorText>}
    </Container>
  )
}

export default DropDown;