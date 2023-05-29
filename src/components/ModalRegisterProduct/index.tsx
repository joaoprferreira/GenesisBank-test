import React, { useContext } from "react"
import {
  Button,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure
} from "@chakra-ui/react"
import { CgAdd } from 'react-icons/cg'
import { Formik, Form, Field, ErrorMessage } from "formik"
import useModal from "./hook"
import { validationSchema } from "./validationSchema"
import { CATEGORY } from "@/commons/utils/constants"


export function InitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { handleSubmit, initialValues } = useModal()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Button onClick={onOpen} w='auto' h='auto' color={'white'} bg={'blue.600'} padding={2} gap={1}>
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
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          {({ errors, touched, isValid }) => (

            <Form>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Criar um produto</ModalHeader>
                <ModalCloseButton />

                <ModalBody pb={6}>

                  <Field name="name">
                    {({ field }: { field: any; }) => (
                      <FormControl>
                        <FormLabel>nome</FormLabel>
                        <Input {...field} id="name" name='name' ref={initialRef} placeholder='nome' />
                        {touched.name && errors.name && (
                          <ErrorMessage component="div" name="name" />
                        )}
                      </FormControl>
                    )}
                  </Field>

                  <Field name="description">
                    {({ field, }: { field: any; }) => (
                      <FormControl mt={4}>
                        <FormLabel>descrição</FormLabel>
                        <Input {...field} id='description' placeholder='Descrição' name="description" />
                        {touched.description && errors.description && (
                          <ErrorMessage component="div" name="description" />
                        )}
                      </FormControl>
                    )}
                  </Field>

                  <Field name="category">
                    {({ field, }: { field: any; }) => (
                      <FormControl mt={4}>
                        <FormLabel>Categoria</FormLabel>
                        <Select {...field} placeholder='Categoria' id="category" name="category">
                          <option value={CATEGORY.ELECTRONICS}>eletronics</option>
                          <option value={CATEGORY.WOMEN_IS_CLOTHING}>women s clothing</option>
                          <option value={CATEGORY.JEWELERY}>jewelery</option>
                          <option value={CATEGORY.MEN_IS_CLOTHING}>men s clothing</option>
                        </Select>
                        {touched.category && errors.category && (
                          <ErrorMessage component="div" name="category" />
                        )}
                      </FormControl>
                    )}
                  </Field>


                  <Field name="price">
                    {({ field }: { field: any; }) => (
                      <FormControl mt={4}>
                        <FormLabel>Preço</FormLabel>
                        <Input {...field} placeholder='Preço' id="price" name="price" type="number" />
                        {touched.price && errors.price && (
                          <ErrorMessage component="div" name="name" />
                        )}
                      </FormControl>
                    )}
                  </Field>

                  <Field name="image">
                    {({ field, }: { field: any; }) => (
                      <FormControl mt={4}>
                        <FormLabel>Imagem </FormLabel>
                        <Input {...field} placeholder='Imagem' id="image" name="image" />
                        {touched.image && errors.image && (
                          <ErrorMessage component="div" name="name" />
                        )}
                      </FormControl>
                    )}
                  </Field>
                </ModalBody>

                <ModalFooter>
                  <Button type="submit" colorScheme='blue' mr={3} onClick={() => onClose()} isDisabled={!isValid} >
                    Criar
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Form>
          )}

        </Formik>
      </Modal>
    </>
  )
}