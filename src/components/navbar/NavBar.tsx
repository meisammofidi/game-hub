import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../../assets/react.svg';

const NavBar = () => {
  return (
    <HStack>
        <Image p={'5px'} src={logo}/>
        <Text>Radman</Text>
    </HStack>
  )
}

export default NavBar