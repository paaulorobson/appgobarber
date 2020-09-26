import styled from 'styled-components/native'
import {RectButton} from 'react-native-gesture-handler'
//RectButton é um component melhor pra estilizar os botões, deixando padrão para ambas plataformas.
// Coloca dentro dos parênteses sempre que for estilizar um component que não é nativo do react native.
export const Container = styled(RectButton)` 
    width: 100%;
    height: 60px;
    background: #ff9000;
    border-radius: 10px;
    margin-top: 10px;
    

    justify-content: center;
    align-items: center; 


`;

export const ButtonText = styled.Text`
    color: #312e38;
    font-size: 18px;
`