import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'

export default function Home() {
   const produto =[{
    id:1,
    nome:''
   }]
const colunas = [{
  dataField: 'id',
  text: 'ID'
}, {
  dataField: 'nome',
  text: 'Livro'
}]





return (
  <BootstrapTable keyField='id' data={produto} columns={colunas} />
)}