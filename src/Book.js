import React, { Component } from 'react';
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
    
    static propTypes = {
        book : PropTypes.object.isRequired,
        onUpdateBook : PropTypes.func.isRequired
    }

    handleChange = moveTo => {
        const book = this.props.book; 

        console.log('HandleChange book', book)
        console.log('HandleChange moveTo', moveTo)

        if(moveTo ==='none') {
            console.log("none.")
        }else if( book.shelf === moveTo ) {
            console.log("same book shelf, no update")
        }
        else {
            console.log("BookShelf", book.shelf)

            this.props.onUpdateBook(
                book, 
                moveTo
            )
        }
    }

    render() {
        console.log("Props", this.props)
        const { book} =  this.props

        return <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={
                             {width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}
                        }></div>
                    <BookShelfChanger handleChange={this.handleChange} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
            </div>
        </li>
    }
}

export default Book