import React from 'react'
import {TextInputProps} from 'react-native'
// pega todas as propriedades que um TextInput pode receber.
import Icon from 'react-native-vector-icons/Feather'

import {Container, TextInput} from './styles'

interface InputProps extends TextInputProps {
    name: string;
    icon: string;
}

const Input: React.FC<InputProps> = ({name, icon, ...rest}) => { // pegar todas as propriedades que ele recebe, menos o name e icon que não precisa.
    //passando essas propriedades em baixo..
    return (
        <Container>
            <Icon name={icon} size={20} color="#666360"/>
            <TextInput placeholderTextColor="#666360" {...rest}/> 
        </Container>

    )
}

export default Input