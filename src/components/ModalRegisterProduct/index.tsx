import { Button, FormControl, FormLabel, Icon, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { CgAdd } from 'react-icons/cg'


export function InitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Button onClick={onOpen} w='auto' h='auto' color={'white'} bg={'brand.700'} padding={2} gap={1}>
        <Icon as={CgAdd} color={'white'} w={6} h="auto" />
        Criar Produto
      </Button>
      <Modal
        isCentered
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Criar um produto</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>nome</FormLabel>
              <Input ref={initialRef} placeholder='nome' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>descrição</FormLabel>
              <Input placeholder='Descrição' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Categoria</FormLabel>
              <Select placeholder='Categoria'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Preço' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Imagem </FormLabel>
              <Input placeholder='Imagem' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}