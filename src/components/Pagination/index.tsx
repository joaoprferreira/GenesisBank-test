import { ProductContext } from "@/commons/context/productContext";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";

export const Pagination = () => {

  const { product, dispatch, filteredProduct } = useContext(ProductContext)

  const { currentPage } = product
  const isLastPage = product.currentPage >= (Math.floor(filteredProduct.length / 6) + 1)
  return (
    <Box mt={4} display={'flex'} gap={10}>
      <Button onClick={() => dispatch({ type: 'SET_PREVIOUS_PAGE' })} isDisabled={currentPage === 1}>
        Página anterior
      </Button>
      <Text fontSize='lg'>{currentPage}</Text>
      <Button onClick={() => dispatch({ type: 'SET_NEXT_PAGE' })} isDisabled={isLastPage} >
        Próxima página
      </Button>
    </Box>
  );
}