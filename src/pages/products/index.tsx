import { useEffect } from 'react'
import {
  Box,
  Grid,
  GridItem,
  Input,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import ItemProduct from "@/components/itemProduct";
import Menu from "@/components/Menu";
import { useContext } from "react";
import { ProductContext } from "@/commons/context/productContext";

export default function Products() {
  const { product, dispatch, addAllProducts } = useContext(ProductContext)

  console.log('ITEMS Paginados::', product.itensPaginated)

  useEffect(() => {
    addAllProducts()
  }, []);

  return (
    <>
      <Box
        w="100%"
        p={4}
        color="white"
        display="flex"
        justifyContent="space-around"
      >
        <Menu />
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
        {product && <SimpleGrid columns={4} spacing={20} h="100vh" p={50}>
          {product.itensPaginated.map(({ name, category, description, price, image, id }) => (
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
        </SimpleGrid>}
      </Box>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await fetch('http://localhost:3000/api/products')
//   const data = response.json()

//   return {
//     props: {
//       data
//     }
//   }
// }

