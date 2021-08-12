import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import user from './user.json';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Nome',
    headerName: 'Nome ',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    editable: true,
    width: 160,
    valueGetter: params =>
      `${params.getValue(params.id, 'nome') || ''} ${params.getValue(
        params.id,
        'sobrenome'
      ) || ''}`
  },
  {
    field: 'celular',
    headerName: 'celular',
    type: 'number',
    width: 200,
    editable: true
  },
  {
    field: 'email',
    headerName: ' email',
    width: 300,
    editable: true
  }
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={user}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
