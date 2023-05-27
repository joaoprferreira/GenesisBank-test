import { Image } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons'
import { IItemProducts } from "./@types";

export default function ItemProduct({
  name,
  description,
  category,
  price,
  image,

}: IItemProducts) {
  return (
    <Box w={300} h={300} gap={1} borderRadius={25} display='flex' flexDirection='column' alignItems='flex-start'>
      <Box w='100%' display='flex' justifyContent='center' alignItems='center'>
        <Image src={image} alt='img product' width='70%' height='auto' />
      </Box>

      <Box flexDirection='column' padding={2} gap={1}>
        <Text fontSize='lg' >{name}</Text>
        <Text fontSize='md'>Series 5 SE </Text>
        <Text fontSize='md'>categoria: {category}</Text>
      </Box>

      <Box w='100%' display='flex' justifyContent='space-between' padding={2}>
        <Text fontSize='lg' >R$ {price}</Text>
        <AddIcon onClick={() => { }} cursor='pointer' />
      </Box>
    </Box>
  )
}