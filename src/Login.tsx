import { VStack, Image, Text, Box, Link } from 'native-base'
import Logo from './assets/Logo.png'
import { TouchableOpacity } from 'react-native';
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';


export default function Login({ navigation }: {navigation: any}) {
  return (
    <VStack flex={1} alignItems={'center'} justifyContent={'center'} p={5} backgroundColor={'white'}>

      <Image source={Logo} alt='Logo Voll' />

      <Titulo> Faça login em sua conta </Titulo>

      <Box>

        <EntradaTexto label="Email" placeholder="Insira seu endereço de e-mail" />
        <EntradaTexto label="Senha" placeholder="Insira sua senha" />

      </Box>

      <Botao>Entrar</Botao>


      <Link href='www.google.com.br' mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box
        mt={8}
        w={'100%'}
        flexDirection={'row'}
        justifyContent={'center'}>
        <Text>
          Ainda não tem cadastro
        </Text>
        <TouchableOpacity onPress={() =>navigation.navigate('Cadastro')}>
          <Text
            color={'blue.500'}>
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
