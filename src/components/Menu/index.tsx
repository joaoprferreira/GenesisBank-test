import { Box, Icon } from "@chakra-ui/react";
import { MdShoppingCart } from 'react-icons/md'
import { CgShoppingBag, CgAdd } from 'react-icons/cg'
import { InitialFocus } from "../ModalRegisterProduct";

export default function Menu() {
  return (
    <Box h='90%' w='4%' mt={10} bg='white' display='flex' justifyContent='flex-start' alignItems='center' flexDirection='column' >
      <Icon as={CgShoppingBag} w={10} h='auto' mb={50} />
      <InitialFocus />
    </Box >
  )
}