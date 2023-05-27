import {
  Box,
  Grid,
  GridItem,
  Input,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import ItemProduct from "@/components/itemProduct";
import { products } from "@/commons/mocks/products";
import Menu from "@/components/Menu";
import ShoppingCart from "@/components/shoppingCart";

export default function Products() {
  return (
    <>
      <Box
        w="100%"
        p={4}
        color="white"
        display="flex"
        justifyContent="space-around"
      >
        This is the Box
        <Select
          placeholder="Filtrar por categoria..."
          color={"black"}
          w="30%"
          variant="outline"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Input placeholder="Buscar item..." w="30%" color={"black"} />
      </Box>
      <Box h="100vh" w="100%" display="flex">
        <Menu />
        <SimpleGrid columns={4} spacing={20} h="100vh" p={50}>
          {products.map(({ name, category, description, price, image, id }) => (
            <GridItem key={id} w="100%" h={10}>
              <ItemProduct
                name={name}
                category={category}
                description={description}
                price={price}
                image={image}
              />
            </GridItem>
          ))}
        </SimpleGrid>
        <ShoppingCart />
      </Box>
    </>
  );
}
