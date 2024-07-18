import React from "react";
import { Box, Button } from "@mui/material";

const Checkboxes = ({ calificaciones, setCalificaciones, index }) => {
  // Definir los números para los botones
  const numbers = [1, 4, 7, 2, 5, 8, 3, 6, 9, 10];

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      {/* Bloque para los botones del 1 al 9 */}
      <Box display="flex" width="100%" justifyContent="center">
        {[0, 1, 2].map((rowIndex) => (
          <Box key={rowIndex} display="flex" flexDirection="column" width="100%">
            {[0, 1, 2].map((colIndex) => {
              const numIndex = rowIndex * 3 + colIndex;
              const isSelected = calificaciones[index].nota === numbers[numIndex];
              return (
                <Box
                  key={numbers[numIndex]}
                  flex="1"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button
                    variant={isSelected ? "contained" : "outlined"}
                    onClick={() => {
                      const newCalificaciones = [...calificaciones];
                      newCalificaciones[index] = {
                        ...newCalificaciones[index],
                        nota: isSelected ? null : numbers[numIndex],
                      };
                      setCalificaciones(newCalificaciones);
                    }}
                    style={{
                      fontSize: "0.8rem",
                      borderRadius: 0,
                      backgroundColor: isSelected ? "black" : "transparent",
                      color: isSelected ? "white" : "black",
                      width: "calc(100% / 3)", // Ajustar el ancho para que ocupen horizontalmente
                      minWidth: "100%", // Evitar que el botón tenga un ancho mínimo
                      textDecoration: "none", // Evita tachado en los números
                      borderColor: "black",
                    }}
                  >
                    {numbers[numIndex]}
                  </Button>
                </Box>
              );
            })}
          </Box>
        ))}
      </Box>

      {/* Bloque para el botón del número 10 */}
      <Box width="100%" display="flex" justifyContent="center">
        <Box width="calc(100% / 3 * 3)" display="flex">
          <Button
            fullWidth
            variant={calificaciones[index].nota === 10 ? "contained" : "outlined"}
            onClick={() => {
              const newCalificaciones = [...calificaciones];
              newCalificaciones[index] = {
                ...newCalificaciones[index],
                nota: calificaciones[index].nota === 10 ? null : 10,
              };
              setCalificaciones(newCalificaciones);
            }}
            style={{
              fontSize: "0.8rem",
              borderRadius: 0,
              backgroundColor: calificaciones[index].nota === 10 ? "black" : "transparent",
              color: calificaciones[index].nota === 10 ? "white" : "black",
              borderColor: "black", // Color del borde negro
              borderLeftColor: "black",
              borderRightColor: "black",
              borderTopColor: "black"
            }}
          >
            10
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Checkboxes;
