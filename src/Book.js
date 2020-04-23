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

        console.log('HandleChange moveTo', moveTo)

        if(book.shelf !== moveTo){
            this.props.onUpdateBook(
                book, 
                moveTo
            )
        }
    }

    render() {
        const { book} =  this.props

        return <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={
                             {width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}
                        }></div>
                    <BookShelfChanger handleChange={this.handleChange} shelf={this.props.book.shelf} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
            </div>
        </li>
    }
}

export default Book