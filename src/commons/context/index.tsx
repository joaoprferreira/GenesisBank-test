import { ProductProvider } from "@/commons/context/productContext"

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProductProvider>
      {children}
    </ProductProvider>
  )
}