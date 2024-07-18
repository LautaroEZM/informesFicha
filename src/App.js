import React, { useState } from "react";
import { Container, Button, Typography, Box } from "@mui/material";
import { jsPDF } from "jspdf";
import Header from "./components/Header";
import Table from "./components/Table";
import Calificaciones from "./components/Calificaciones";

const App = () => {
  const [ficha, setFicha] = useState(1);
  const [tabla1, setTabla1] = useState({
    fila1: ["", "", ""],
  });
  const [tabla2, setTabla2] = useState({
    fila2: ["", "", ""],
  });
  const [calificaciones, setCalificaciones] = useState(
    Array(5).fill({ comentario: "", nota: null })
  );

  const handleLimpiar = () => {
    setFicha(1);
    setTabla1({ fila1: ["", "", ""], fila2: ["", "", ""] });
    setTabla2({ fila3: ["", "", ""] });
    setCalificaciones(Array(5).fill({ comentario: "", nota: null }));
  };

  const handleFinalizar = () => {
    const doc = new jsPDF();
    doc.text("INFORME DE EVALUACION", 10, 10);
    doc.text(`FICHA N° ${ficha}`, 180, 10);
    doc.save("informe-evaluacion.pdf");
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        margin: "auto",
        marginTop: "5px",
        marginBottom: "5px",
        flexDirection: "column",
        border: "2px solid black",
      }}
    >
      <Header ficha={ficha} setFicha={setFicha} />

      <Table
        data={tabla1}
        setData={setTabla1}
        headers={[
          { label: "FTO", width: "19%" },
          { label: "DURACION DE LA FICHA (HORAS)", width: "60%" },
          { label: "FECHA", width: "21%" },
        ]}
        calificaciones={calificaciones}
      />
      <Table
        data={tabla2}
        setData={setTabla2}
        headers={[
          { label: "OFICIAL I", width: "19%" },
          { label: "UNIDAD UTILIZADA", width: "60%" },
          { label: "NOTA FINAL", width: "21%" },
        ]}
        calificaciones={calificaciones}
      />
      <Container
        style={{
          background: "black",
          border: "2px solid black",
          color: "white",
          width: "100%",
          height: "50px",
          display: "flex",
          borderRadius: "0px",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "5px",
        }}
      >
        <Typography variant="h5">CALIFICACIONES</Typography>
      </Container>
      <Calificaciones
        calificaciones={calificaciones}
        setCalificaciones={setCalificaciones}
      />
      <Box
        margin="5px"
        display="flex"
        justifyContent="space-between"
        width="100%"
        maxWidth="800px"
      >
        <Button variant="contained" color="secondary" onClick={handleLimpiar}>
          LIMPIAR
        </Button>
        <Button variant="contained" color="primary" onClick={handleFinalizar}>
          FINALIZAR
        </Button>
      </Box>
    </Container>
  );
};

export default App;
