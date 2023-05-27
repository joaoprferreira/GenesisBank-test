import { ProductProvider } from "@/commons/context/app/products/productContext"

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProductProvider>
      {children}
    </ProductProvider>
  )
}