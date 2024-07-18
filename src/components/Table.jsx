import React, { useEffect, useState } from "react";
import { Box, TextField } from "@mui/material";

const Table = ({ data, setData, headers, calificaciones }) => {
  const [promedio, setPromedio] = useState("");

  useEffect(() => {
    // Calcular el promedio cada vez que cambian las calificaciones
    const total = calificaciones.reduce((acc, calificacion) => acc + (calificacion.nota || 0), 0);
    const avg = total / calificaciones.length || 0;
    setPromedio(avg.toFixed(2)); // Redondear a 2 decimales
  }, [calificaciones]);

  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Box display="flex">
        {headers.map((header, index) => (
          <Box
            border="1px solid black"
            key={index}
            width={header.width}
            bgcolor="black"
            color="white"
            textAlign="center"
            fontSize="150%"
          >
            {header.label}
          </Box>
        ))}
      </Box>
      {Object.keys(data).map((key) => (
        <Box display="flex" key={key} border="1px solid black">
          {data[key].map((value, index) => (
            <Box key={index} width={headers[index].width} border="1px solid black">
              {headers[index].label === "NOTA FINAL" ? (
                <TextField
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    inputProps: {
                      style: { textAlign: "center" },
                      readOnly: true,
                    },
                  }}
                  value={promedio}
                  fullWidth
                />
              ) : (
                <TextField
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    inputProps: {
                      style: { textAlign: "center" },
                    },
                  }}
                  value={value}
                  onChange={(e) => {
                    const newData = { ...data };
                    newData[key][index] = e.target.value;
                    setData(newData);
                  }}
                  fullWidth
                />
              )}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default Table;
