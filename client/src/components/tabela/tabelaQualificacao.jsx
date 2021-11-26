import React, { useState, useEffect, } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Axios from 'axios';

function TabelaQualificacao() {
  const [rows, setRows] = useState("");
  const columns = [
    { field: 'id', headerName: 'ID', width: 15 },
    { field: 'nivel', headerName: 'Qualificação', width: 175 },
    { field: 'createdAt', headerName: 'Criado em', type:'date', width: 130 },
    { field: 'updatedAt', headerName: 'Atualizado em', type: 'date', width: 130 },
  ];





  useEffect(() => {
    Axios.get("http://localhost:3001/qualificacoes").then(function (response) {
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
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}

export default TabelaQualificacao;
