import React from 'react'
import {Image, ScrollView, KeyboardAvoidingView, Platform} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import {useNavigation} from '@react-navigation/native'

import Logo from '../../assets/logo.png'

import Input from '../../components/Input'
import Button from '../../components/Button'

import {Container, Title, BackToSignIn, BackToSignInText} from './styles'

const SignUp: React.FC = () => {

    const navigation = useNavigation()
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
                        <Title>Crie sua conta</Title>
                        <Input name="name" icon="user" placeholder="Nome" />
                        <Input name="email" icon="mail" placeholder="E-mail"/>
                        <Input name="password" icon="lock" placeholder="Senha"/>

                        <Button onPress= {() => {console.log('Pronto')}} >Cadastrar</Button>

                    </Container>
                </ScrollView>

                <BackToSignIn onPress = {() => navigation.goBack()}>
                    <Icon name="arrow-left" size={20} color="#fff"/>
                    <BackToSignInText>Voltar para Logon</BackToSignInText>
                </BackToSignIn>
            </KeyboardAvoidingView>
        </>

    )
}

export default SignUp