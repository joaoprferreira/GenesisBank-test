import { Box, Button, Icon, Input, Select, Text } from "@chakra-ui/react";
import { MdShoppingCart, MdOutlineAddShoppingCart } from "react-icons/md";
import React from "react";
import { InitialFocus } from "../ModalRegisterProduct";

export default function Header() {
  return (
    <Box
      w="100%"
      p={4}
      color="white"
      display="flex"
      justifyContent="space-around"
      alignItems={"center"}
    >
      <Text fontSize="40px" color={"brand.700"} fontWeight={700}>
        GeniusBank Shop
      </Text>
      <Input placeholder="Buscar item..." w="30%" color={"black"} />
      <Select
        placeholder="categoria..."
        color={"black"}
        w="10%"
        variant="outline"
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>

      <Box display={"flex"} alignItems={'center'} justifyContent={'space-around'} width={'auto'} gap={2}>
        <InitialFocus />
        <Text color={'black'}>
          |
        </Text>
        <Button variant='outline'>
          <Icon as={MdShoppingCart} color={"brand.700"} w={8} h="auto" />
          <Text color={'GrayText'} fontWeight={600}>
            Carrinho
          </Text>
        </Button>
      </Box>
    </Box>
  );
}
