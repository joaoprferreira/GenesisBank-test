import { Box, Card, CardBody, CardHeader, Flex, Heading, Stack, Text, Image, Button, IconButton } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useCart } from "./hooks/useCart";
import { ProductContext } from "@/commons/context/productContext";
import { DeleteIcon } from '@chakra-ui/icons';

export default function ShoppingCart() {
  const { product, } = useContext(ProductContext)
  const { getAllProducts, deleteItemProductCart, handleIncrement } = useCart()

  useEffect(() => { getAllProducts() }, [])

  return (
    <Box display='flex' ml={10} mt={10} >
      <Stack spacing={4} w={'100%'} display={'flex'} >
        {product?.shoppingCart?.length && product?.shoppingCart?.map(({ produto, amount, product_id, id }, key) => (
          <Box key={key} display='flex' justifyContent='space-around' w={'80%'} borderWidth="1px" padding={10} >
            <Box borderRadius="md" p={4} mb={4} display='flex' w={'90%'}>
              <Image src={produto.image} alt={produto.name} boxSize="300px" objectFit="cover" mr={4} />
              <Box >
                <Text fontSize="40px" fontWeight="bold" mb={2}>
                  {produto.name}
                </Text>
                <Text fontSize="lg" mb={2}>
                  Preço: ${produto.price}
                </Text>
                <Text fontSize="lg" mb={2}>
                  Descrição: ${produto.description}
                </Text>
                <Text fontSize="lg" mb={2}>
                  Quantidade: {amount}
                </Text>
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <IconButton
                icon={<DeleteIcon />}
                variant="outline"
                colorScheme="red"
                aria-label="Excluir item"
                onClick={() => deleteItemProductCart(id)}
              />
              <Button size="md" onClick={() => handleIncrement(id, amount, false)} disabled={product.products.length <= 1}>
                -
              </Button>
              <Text mx={2} fontSize='x-large'>{amount}</Text>
              <Button size="md" onClick={() => handleIncrement(id, amount, true)}>
                +
              </Button>
            </Box>
          </Box>
        ))}
      </Stack >
      <Box borderWidth="1px" borderRadius="md" w='40%' h={'400px'} p={4} mb={4} marginRight={30}>
        <Text fontSize="50px" fontWeight="bold" mb={2}>
          SubTotal
        </Text>
        <Text fontSize="25px" mb={2}>
          Total: R$: {product.totalPriceProducts}
        </Text>
      </Box>
    </Box >
  )
}