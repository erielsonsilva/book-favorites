import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import axios from 'axios'
import { useEffect, useState } from 'react'
export default function BookList() {
    
   
    
    async function getBooks() {
        
    }
    const [books, setBookList] = useState([])
    useEffect(()=>{
        getBooks();
    },[]

    ) 
    async function getBooks() {
        try {
            const response = await axios({
                method: "get",
                url: "https://Books.ronier.me",
            })
    
            setBookList(response.data.content);
            console.log(response.data.content)
        } catch (error) {
            console.log(error);
        }
       
    }

    const columns = [{
        dataField: 'id',
        text: 'ID'
      }, {
        dataField: 'title',
        text: 'Livro'

      }, {
        dataField: 'authors',
        text: 'autor'

      }
    ]
    
    
    return (
      <BootstrapTable keyField='id' data={books} columns={columns} />
    )}


    
  

