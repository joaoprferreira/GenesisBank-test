import { userStore } from "@/store/products"
import { Link } from "@chakra-ui/next-js"
import Products from "./products"

export default function Home() {

  return (
    <>
      <Products />
      <Link href='/about' color='blue.100' _hover={{ color: 'blue.500' }}>
        About
      </Link>
      <h1>Hello word</h1>
    </>
  )
}