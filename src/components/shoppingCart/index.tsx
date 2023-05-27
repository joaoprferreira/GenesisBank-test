import { products } from "@/commons/mocks/products";
import { Box, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function ShoppingCart() {
  return (
    <Box>
      <Box>
        <Text>Carrinho de compras</Text>
      </Box>
      <Box>
        <SimpleGrid columns={3} spacing={10}>
          {products.map(({ image }, key) => (
            <GridItem key={key} w="100%" h={10}>
              <Image key={key} src={image} alt='img product' width={20} height='auto' />
            </GridItem>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}