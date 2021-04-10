import React from 'react'
import { Container, FormContent, FormLabel, FormWrap,Icon,Text,Form,FormButton,FormInput, FormH1 } from './SigninElements'

const SignIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
            <Icon to="/">Finder</Icon>
            <FormContent>
                <Form action="#">
                   <FormH1>Admin Sign In</FormH1> 
                   <FormLabel htmlFor='for'>UserName</FormLabel>
                   <FormInput type='username' required/>
                   <FormLabel html='for'>Password</FormLabel>
                   <FormInput type='password' required/>
                   <FormButton type='submit'>Continue</FormButton>
                   <Text>Forgot Password</Text>
                </Form>
            </FormContent>
            </FormWrap>
        </Container>
            
        </>
    )
}

export default SignIn
