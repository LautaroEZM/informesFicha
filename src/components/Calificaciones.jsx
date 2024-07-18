import React from "react";
import { Box, TextField } from "@mui/material";
import Checkboxes from "./Checkboxes";

// Importa la imagen para la marca de agua
import lspdlogo from "../img/lspdlogo.png";

const Calificaciones = ({ calificaciones, setCalificaciones }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      position="relative"  // Añade posición relativa para manejar la imagen de fondo
      style={{
        backgroundImage: `url(${lspdlogo})`,  // Añade la imagen como fondo
        backgroundSize: "contain",  // Ajusta el tamaño de la imagen para que se ajuste dentro del contenedor
        backgroundRepeat: "no-repeat",  // Evita que la imagen se repita
        backgroundPosition: "center",  // Centra la imagen dentro del contenedor
        minHeight: "100%",  // Ajusta la altura mínima para que se muestre la marca de agua
        padding: "10px",  // Añade un espacio alrededor del contenido para evitar que se superponga con la marca de agua
        
      }}
    >
      <Box display="flex" border="1px solid black">
        <Box
          width="19%"
          textAlign="center"
          fontSize="150%"
          fontWeight="bold"
          borderRight="1px solid black"
          style={{ backgroundColor: "transparent" }} // Ajusta el fondo para evitar que la marca de agua interfiera con el texto
        >
          ELEMENTO
        </Box>
        <Box
          flex={1}
          textAlign="center"
          fontSize="150%"
          fontWeight="bold"
          borderRight="1px solid black"
          style={{ backgroundColor: "transparent" }} // Ajusta el fondo para evitar que la marca de agua interfiera con el texto
        >
          COMENTARIO
        </Box>
        <Box
          width="21%"
          textAlign="center"
          fontSize="150%"
          fontWeight="bold"
          style={{ backgroundColor: "transparent" }} // Ajusta el fondo para evitar que la marca de agua interfiera con el texto
        >
          NOTA
        </Box>
      </Box>
      {[
        "Habilidad de conduccion",
        "Habilidad de narracion",
        "Manejo de los procedimientos",
        "Iniciativa del oficial",
        "Interpretacion de personaje",
      ].map((elemento, index) => (
        <Box
          key={elemento}
          display="flex"
          borderLeft="1px solid black"
          borderRight="1px solid black"
          borderBottom="1px solid black"
          fontWeight="bold"
          fontSize="150%"
          style={{ backgroundColor: "transparent" }} // Ajusta el fondo para evitar que la marca de agua interfiera con el texto
        >
          <Box
            width="19%"
            textAlign="center"
            borderRight="1px solid black"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {elemento}
          </Box>
          <Box flex={1} borderRight="1px solid black">
            <TextField
              variant="standard"
              InputProps={{
                disableUnderline: true,
                inputProps: {
                  style: { textAlign: "left", padding: "5px", background: "transparent" }, // Hace que el TextField sea transparente
                },
                placeholder: "Escribe aquí...",
              }}
              value={calificaciones[index].comentario}
              onChange={(e) => {
                const newCalificaciones = [...calificaciones];
                newCalificaciones[index] = {
                  ...newCalificaciones[index],
                  comentario: e.target.value,
                };
                setCalificaciones(newCalificaciones);
              }}
              fullWidth
              multiline
            />
          </Box>
          <Box
            width="21%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Checkboxes
              calificaciones={calificaciones}
              setCalificaciones={setCalificaciones}
              index={index}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Calificaciones;
