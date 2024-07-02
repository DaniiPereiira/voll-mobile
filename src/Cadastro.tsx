import { ScrollView, Image, Box, Checkbox, Text } from 'native-base'
import Logo from './assets/Logo.png'
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';
import { useState } from 'react';
import { secoes } from './utils/CadastroEntradaTexto';


export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);


  function avancarSecao() {
    if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1)
    }
  }

  function voltarSecao() {
    if (numSecao > 0) {
      setNumSecao(numSecao - 1)
    }
  }

  return (
    <ScrollView flex={1} p={5} backgroundColor={'white'}>

      <Image mt={20} alignSelf={"center"} source={Logo} alt='Logo Voll' />

      <Titulo> {secoes[numSecao].titulo} </Titulo>

      <Box>

        {
          secoes[numSecao].entradaTexto.map(entrada => {
            return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id} />
          })
        }

      </Box>
      <Box>
        <Text>Selecione os planos:</Text>

        {
          secoes[numSecao].checkbox.map(check => {
            return <Checkbox value={check.value} key={check.id}>{check.value}</Checkbox>
          })
        }

      </Box>

      {numSecao > 0 &&
        <Botao onPress={() => voltarSecao()}>Voltar</Botao>
      }

      <Botao mt={3} onPress={() => avancarSecao()}>Avançar</Botao>

    </ScrollView>
  );
}
