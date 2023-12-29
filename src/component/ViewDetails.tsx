import exp from "constants";
import React from "react";
import { Books } from './Book'
interface Prop{
  books:Books[]
}

export const ViewDetails = ({books}: Prop) => {
  return (
    <div className='view-container'>
      <table>
        <thead>
          <tr>
          <td>title</td>
          <td>author</td>

          <td>price</td>

          </tr>
        </thead>
        <tbody>
         {books.map((item:{title:string,author:string,price:string})=>(
          <>
          <tr>
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td>{item.price}</td>

          </tr>
          </>
          
              
         ))}
          
        </tbody>
      </table>
    </div>
  )
}