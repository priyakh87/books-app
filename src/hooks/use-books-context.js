import { useContext } from "react";
import BookContext from "../context/books";

export default function useBooksContext(){
    return useContext(BookContext)
}