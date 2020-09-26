import React from 'react'
import {Image, Text} from 'react-native'

import Logo from '../../assets/logo.png'

import Input from '../../components/Input'
import Button from '../../components/Button'

import {Container, Title} from './styles'

const SignIn: React.FC = () => {
    return (
        <Container>
            <Image source={Logo}/>
            <Title>Faça seu Login</Title>

            <Input name="email" icon="mail" placeholder="E-mail"/>
            <Input name="password" icon="lock" placeholder="Senha"/>

            <Button onPress= {() => {console.log('Pronto')}} >Entrar</Button>
        </Container>

    )
}

export default SignIn