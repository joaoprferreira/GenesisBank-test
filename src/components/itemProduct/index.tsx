import { Button, Image } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons'
import { IItemProducts } from "./@types";
import { useProduct } from '@/commons/context/hooks/useProduct';

export default function ItemProduct({
  id,
  name,
  description,
  category,
  price,
  image,
}: IItemProducts) {

  const { addNewProductInCart } = useProduct()

  return (
    <Box p={2} borderRadius={25} display='flex' flexDirection='column' alignItems='flex-start' bgColor='whiteAlpha.600' minHeight={150}>
      <Box w='100%' display='flex' justifyContent='center' alignItems='center'>
        <Image src={image} alt='img product' width='auto' height='80px' />
      </Box>

      <Box flexDirection='column' padding={2} gap={1}>
        <Text fontSize='lg' >{name}</Text>
        <Text fontSize='md' textOverflow='ellipsis'>Descrição: {description}</Text>
        <Text fontSize='md'>categoria: {category}</Text>
      </Box>

      <Box w='100%' display='flex' justifyContent='space-between' padding={2}>
        <Text fontSize='lg' >R$ {price}</Text>
        <Button variant='solid'>
          <AddIcon onClick={() => addNewProductInCart(id)} cursor='pointer' />
        </Button>
      </Box>
    </Box>
  )
}