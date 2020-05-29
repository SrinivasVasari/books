import React, { useContext, useReducer } from 'react';
import BooksContext from '../../context/context';
import AddBook from '../AddBook';
import BookList from '../BookList';
import EditBook from '../EditBook';
import booksReducer from '../../reducer/reducer';


const MainPage = () => {
const initialState = useContext(BooksContext);
const [state, dispatch] = useReducer(booksReducer, initialState);
    return (
       <BooksContext.Provider value={{ state, dispatch }}>
           {state.currentBook === null ? (
               <div className="container-fluid main-content">
                   <AddBook />
                   <BookList />
               </div>
           ) : (
               <EditBook />
           )}
       </BooksContext.Provider>
    )
}
export default MainPage;
