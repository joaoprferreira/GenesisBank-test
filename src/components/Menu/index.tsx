import { Box, Button, Icon } from "@chakra-ui/react";
import { MdShoppingCart } from 'react-icons/md'
import { CgShoppingBag, CgAdd } from 'react-icons/cg'
import { InitialFocus } from "../ModalRegisterProduct";
import { useContext } from "react";
import { ProductContext } from "@/commons/context/productContext";

export default function Menu() {
  const { dispatch } = useContext(ProductContext)

  return (
    <Box h='90%' w='4%' mt={10} bg='white' display='flex' justifyContent='flex-start' alignItems='center' flexDirection='column' >
      <Button onClick={() => dispatch({ type: 'SET_NEXT_PAGE' })}>
        <Icon as={CgShoppingBag} w={10} h='auto' mb={50} bgColor='gray' />
      </Button>
      <InitialFocus />
    </Box >
  )
}