import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  componentDidMount() {

    BooksAPI.getAll()
      .then( books => {
        console.log("books from BookApi", books)
        this.setState({books:books})
      }); 
    console.log("Books", this.state.books); 
  }

  updateBook = (book, newShelf) => {
    console.log("Book to update", book)
    console.log('Books Before update', this.state.books)

    this.setState((previousState) => {
      console.log("Books in State", previousState.books)
      const indexOfBook = previousState.books.indexOf((bookInBooks) => {
        console.log("bookInBooks", bookInBooks)
        return bookInBooks.title === book.title
      })
      console.log('IndexOfBook', indexOfBook)
      if(indexOfBook > -1){
        previousState.books[indexOfBook].shelf = newShelf
      }

      const bookInList = previousState.books.find((bookInBooks) => bookInBooks.title === book.title)
      console.log("book By find",bookInList)

      bookInList.shelf = newShelf
    })

    console.log('Books After update', this.state.books)
  }

  render() {
   
    return (
      <div className="app">
        <ListBooks books={this.state.books} 
                    onUpdateBook={this.updateBook} />
      </div>
    )
  }
}

export default BooksApp
