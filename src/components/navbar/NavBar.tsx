import { HStack, Image } from '@chakra-ui/react'
import ColorModeSwitch from '../color-mode/ColorModeSwitch';
import logo from '../../assets/react.svg';

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} padding='10px 20px'>
        <Image src={logo}/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar