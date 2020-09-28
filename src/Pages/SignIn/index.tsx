import React from 'react'
import {Image, ScrollView, KeyboardAvoidingView, Platform} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import Logo from '../../assets/logo.png'

import Input from '../../components/Input'
import Button from '../../components/Button'

import {Container, Title, ForgotPassword, ForgotPasswordText, CreateAccountButton, CreateAccountButtonText} from './styles'

const SignIn: React.FC = () => {
    return (
        <>
            <KeyboardAvoidingView 
                style= {
                    {
                        flex: 1
                    }
                }    
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
                >
                <ScrollView contentContainerStyle={{flex: 1}}>    
                    <Container>
                        <Image source={Logo}/>
                        <Title>Faça seu Login</Title>

                        <Input name="email" icon="mail" placeholder="E-mail"/>
                        <Input name="password" icon="lock" placeholder="Senha"/>

                        <Button onPress= {() => {console.log('Pronto')}} >Entrar</Button>

                        <ForgotPassword onPress = {() => {}}>
                            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                        </ForgotPassword>
                    </Container>
                </ScrollView>

                <CreateAccountButton onPress = {() => {}}>
                    <Icon name="log-in" size={20} color="#ff9000"/>
                    <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
                </CreateAccountButton>
            </KeyboardAvoidingView>
        </>

    )
}

export default SignIn