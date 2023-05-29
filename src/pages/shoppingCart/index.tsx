import { products } from "@/commons/mocks/products";
import { Box, Card, CardBody, CardHeader, Flex, Heading, Stack, Text, Image } from "@chakra-ui/react";

export default function ShoppingCart() {
  return (
    <Box flex={1} w={'100%'} display={'flex'}>
      <Stack spacing={4} w={'100%'} display={'flex'} justifyContent={'center'}>
        {products.map(({ name, description, price, image, category }, key) => (
          <Card key={key} display={'flex'} variant={'elevated'} w={'50%'} h={60}>
            <Flex>
              <Image src={image} alt='img product' w='15%' height='auto' />
            </Flex>

            <Flex flexDirection={'column'}>
              <Text>{name}</Text>
              <Text>{description}</Text>
              <Text>R$ {price}</Text>
            </Flex>
          </Card>
        ))}
      </Stack>
    </Box>
  )
}