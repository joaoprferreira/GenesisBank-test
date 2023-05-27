import { ProductProvider } from "@/context/app/products/productContext"

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProductProvider>
      {children}
    </ProductProvider>
  )
}