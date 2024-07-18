import React from "react";
import { Container, Typography, Select, MenuItem } from "@mui/material";

const Header = ({ ficha, setFicha }) => (
    <Container
        style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            
            margin: "auto",
            marginTop: "3px",
            marginBottom: "3px",
            flexDirection: "row",
            border: "2px solid black",
            padding: "5px",
        }}
    >
        <Typography variant="h6" style={{ flex: 1, textAlign: "left" }}>
            INFORME DE EVALUACION
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" style={{ textAlign: "right", marginRight: "10px" }}>
                FICHA N°
            </Typography>
            <Select
                value={ficha}
                onChange={(e) => setFicha(e.target.value)}
                variant="outlined"
                style={{ border: "none", paddingRight: "5px", height: "40px" }}
                MenuProps={{ PaperProps: { style: { border: "1px solid #ccc" } } }}
            >
                {[1, 2, 3].map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </div>
    </Container>
);

export default Header;
