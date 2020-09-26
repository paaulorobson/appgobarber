import React from 'react'
import {Container, ButtonText} from './styles'
import {RectButtonProperties} from 'react-native-gesture-handler'

// importar o ReactButtonProperties para o button poder receber a função de Onpress()

interface ButtonProps extends RectButtonProperties {
    children: string; // dizendo que o conteúdo do botão deve ter um texto dentro.
}

const Button: React.FC<ButtonProps> = ({children, ...rest }) => { // o ...rest agora pega todas as propriedades que o button pode ter. Entre elas o Onpress
    //O children trás o conteúdo do pai, ou seja, o conteúdo que tem em SigIn no button.

    {/*passo essas propriedades pro container*/}
    return (
        <Container {...rest}> 
            <ButtonText>{children}</ButtonText>
        </Container>

    )
}

export default Button