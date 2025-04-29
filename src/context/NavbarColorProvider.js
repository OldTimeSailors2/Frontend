import { createContext, useContext, useState } from "react";

// Crea el contexto
const NavbarColorContext = createContext({
  navbarColor: "light", // Valor predeterminado
  setNavbarColor: () => {}, // Función vacía predeterminada
});

// Hook para usar el contexto
export const useNavbarColor = () => {
  const context = useContext(NavbarColorContext);
  if (context === undefined) {
    throw new Error('useNavbarColor must be used within a NavbarColorProvider');
  }
  return context;
};

// Proveedor del contexto
export const NavbarColorProvider = ({ children }) => {
  const [navbarColor, setNavbarColor] = useState("light"); // Valor inicial

  return (
    <NavbarColorContext.Provider value={{ navbarColor, setNavbarColor }}>
      {children}
    </NavbarColorContext.Provider>
  );
};