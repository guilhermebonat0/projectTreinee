import React, { useState, useEffect, } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Axios from 'axios';

function TabelaHabilidades() {

    const [rows, setRows] = useState("");
    const columns = [
        { field: 'id', headerName: 'ID', width: 15 },
        { field: 'habilidades', headerName: 'Habilidades', width: 175 },
        { field: 'createdAt', headerName: 'Criado em', type: 'date', width: 130 },
        { field: 'updatedAt', headerName: 'Atualizado em', type: 'date', width: 130 },
    ];

    useEffect(() => {
        Axios.get("http://localhost:3001/habilidades").then(function (response) {
            response.data.forEach(element => {
                element.createdAt = new Date(element.createdAt)
                element.updatedAt = new Date(element.updatedAt)
            });

            setRows(response.data);
        });
    }, []);

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[3]}
            />
        </div>
    );
}

export default TabelaHabilidades;
