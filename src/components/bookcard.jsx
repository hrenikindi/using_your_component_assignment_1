// write the book component code here
import React from 'react'

const BookCard=({book})=>{
    return(
        <div className='container'>
            <img src={book.image} alt={book.name}/>
            <h2>{book.name}</h2>
            <p>{book.author}</p>
            <p>{book.genre}</p>

        </div>
    )
}

export default BookCard