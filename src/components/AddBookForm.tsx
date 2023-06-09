import Input from "./Input";
import { server_calls } from "../api/server";
import { setAuthFname, setAuthLname, setBinding,
        setGenre, setIsbn, setLen, setQuant, setTitle,
        setYear } from "../redux/slices/RootSlice";

import { useForm } from "react-hook-form";
import { useDispatch, useStore } from "react-redux";

interface AddBookProps {
    isbn?: string[]
}


const AddBookForm = (props:AddBookProps) => {
    const {register, handleSubmit} = useForm ({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) =>{
        console.log('props.isbn=', props.isbn)
        console.log('data', data)
        console.log('data isbn', data.ISBN)
        console.log('length type: ', typeof(data.length_))
        if (props.isbn && props.isbn.length > 0) {
            console.log('in addbookform if- for edits')
            server_calls.update(props.isbn[0], data)
            setTimeout(()=>{window.location.reload()}, 10000);
            event.target.reset()
        } else {
            console.log('in addbookform else- for adding books')
            console.log(data.author_fname)

            dispatch(setAuthFname(data.author_fname));
            dispatch(setAuthLname(data.author_lname));
            dispatch(setBinding(data.binding));
            dispatch(setGenre(data.genre));
            dispatch(setIsbn(data.isbn));
            dispatch(setLen(data.length_));
            dispatch(setQuant(data.quantity));
            dispatch(setTitle(data.title));
            dispatch(setYear(data.year));

            server_calls.create(store.getState())
            setTimeout(()=>{window.location.reload()}, 1000)
        }
    }


  return (
    <div>
        <form onSubmit={(handleSubmit(onSubmit))}>
            <div className="flex">
                <label htmlFor="author_fname" className="mr-3">
                    Author First Name
                    <Input {...register('author_fname')} name='author_fname' placeholder="Author First Name"/>
                </label>
                <label htmlFor="author_lname" className="mr-3">
                    Author Last Name
                    <Input {...register('author_lname')} name='author_lname' placeholder="Author Last Name"/>
                </label>
            </div>

            <div className="flex">
                <label htmlFor="title" className="mr-3">
                    Book Title
                    <Input {...register('title')} name='title' placeholder="Book Title"/>
                </label>
                <label htmlFor="genre" className="mr-3">
                    Genre
                    <Input {...register('genre')} name='genre' placeholder="Genre"/>
                </label>
            </div>

            <div className="flex">
                <label htmlFor="isbn" className="mr-3">
                    Book ISBN
                    <Input {...register('isbn')} name='isbn' placeholder="Book ISBN"/>
                </label>
                <label htmlFor="length_" className="mr-3">
                    Book Length
                    <Input {...register('length_')} name='length_' placeholder="Book Length"/>
                </label>
            </div>

            <div className="flex">
                <label htmlFor="binding" className="mr-3">
                    Binding Style
                    <Input {...register('binding')} name='binding' placeholder="Binding Style"/>
                </label>
                <label htmlFor="quantity" className="mr-3">
                    Quantity
                    <Input {...register('quantity')} name='quantity' placeholder="Quantity"/>
                </label>
                <label htmlFor="year" className="mr-3">
                    Year Published
                    <Input {...register('year')} name='year' placeholder="Year Published"/>
                </label>
            </div>
            <div className="flex p-1 justify-end">
                <button className="dark-border light-logo-color logo-color px-3 py-1 rounded">Submit</button>
            </div>

        </form>
    </div>
  )
}

export default AddBookForm