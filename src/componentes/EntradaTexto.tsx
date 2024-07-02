import { FormControl, Input, ITextProps} from 'native-base'


interface EntradaTextoProps {
    label?: string;
    placeholder: string;
    secureTextEntry?: boolean;
    leftIcon?: React.ReactNode;
}


export function EntradaTexto({label, 
    placeholder, 
    secureTextEntry = false, ...rest}: EntradaTextoProps): JSX.Element{
    return(
        <FormControl mt={3}>
      {label && <FormControl.Label>{label}</FormControl.Label>}
        <Input 
            placeholder={placeholder}
            size={'lg'}
            w={'100%'}
            borderRadius={'lg'}
            bgColor={'gray.100'}
            shadow={3}
        >
        </Input>
      </FormControl>
    )
    
}
