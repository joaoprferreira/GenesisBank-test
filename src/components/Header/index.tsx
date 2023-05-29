import { useContext } from "react";
import { Box, Button, Icon, Input, Select, Text } from "@chakra-ui/react";
import { MdShoppingCart, MdOutlineAddShoppingCart } from "react-icons/md";
import React from "react";
import { InitialFocus } from "../ModalRegisterProduct";
import { ProductContext } from "@/commons/context/productContext";
import { CATEGORY } from "@/commons/utils/constants";

import { useRouter } from 'next/router'

export default function Header() {
  const { dispatch } = useContext(ProductContext)

  const { push } = useRouter()

  const handleNameChange = (name: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_FILTER_BY_NAME', payload: name.target.value })
  }

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'SET_FILTER_BY_CATEGORY', payload: event.target.value });
  };

  return (
    <Box
      w="100%"
      p={4}
      color="white"
      display="flex"
      justifyContent="space-around"
      alignItems={"center"}
    >
      <Text fontSize="40px" color={"blue.600"} fontWeight={700}>
        GeniusBank Shop
      </Text>
      <Input placeholder="Buscar item..." w="30%" color={"black"} onChange={handleNameChange} />

      <Select
        placeholder="Filtrar por categoria..."
        color={"black"}
        w="30%"
        variant="outline"
        onChange={handleCategoryChange}
      >
        <option value={CATEGORY.ELECTRONICS}>electronics</option>
        <option value={CATEGORY.WOMEN_IS_CLOTHING}>women s clothing</option>
        <option value={CATEGORY.JEWELERY}>jewelery</option>
        <option value={CATEGORY.MEN_IS_CLOTHING}>men s clothing</option>
      </Select>

      <Box display={"flex"} alignItems={'center'} justifyContent={'space-around'} width={'auto'} gap={2} bgColor={'transparent'}>
        <InitialFocus />
        <Text color={'black'}>
          |
        </Text>
        <Button variant='outline' onClick={() => push('/shoppingCart')}>
          <Icon as={MdShoppingCart} color={"blue.600"} w={8} h="auto" />
          <Text color={'GrayText'} fontWeight={600}>
            Carrinho
          </Text>
        </Button>
      </Box>
    </Box>
  );
}
