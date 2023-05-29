import { useEffect } from 'react'
import {
  Box,
  Grid,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";
import ItemProduct from "@/components/itemProduct";
import { useContext } from "react";
import { ProductContext } from "@/commons/context/productContext";
import Header from '@/components/Header';
import { Pagination } from '@/components/Pagination';

export default function Products() {
  const { product, addAllProducts, productsPaginated } = useContext(ProductContext)

  useEffect(() => {
    addAllProducts()

  }, []);

  return (

    <Box
      w="auto"
      p={4}
    // color="white"
    // minHeight='100vh'
    >
      <Header />

      <Grid templateColumns='repeat(3 , 2fr)' gap={6} minHeight={"100vh"}>
        {productsPaginated.map(({ name, category, description, price, image, id }) => (
          <GridItem key={id} w="100%" h={10}>
            <ItemProduct
              id={id}
              name={name}
              category={category}
              description={description}
              price={price}
              image={image}
            />
          </GridItem>
        ))}
      </Grid>

      <Box height={20} w='100%' display={'flex'} justifyContent={'center'} >
        <Pagination />
      </Box>
    </Box>

  );
}


