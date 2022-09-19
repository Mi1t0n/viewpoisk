import {useState} from 'react';
import useFetch from "./hooks/useFetch/useFetch";
import LoadIcon from "./Components/SmallUIElements/LoadIcon";
import ErrorMessage from "./Components/SmallUIElements/ErrorMessage";
import IUserChoose from "./interfaces/IUserChoose";
import IAllItems from "./interfaces/IAllItems";
import App from "./App";

function AppContainer() {

    const [page, changePage] = useState(1)
    //Default values from api
    //     order:'RATING'
    //     type:'ALL'
    //     ratingFrom:0
    //     ratingTo:10
    //     yearFrom:1000
    //     yearTo:3000
    const [userChoose, setChoose] = useState<IUserChoose>({order: 'RATING', type: 'ALL'})

    const pathWithFilter = Object
        .entries(userChoose)
        .map(([key, value]) => `&${key}=${value}`)
        .join('')

    const [data, loading, error] = useFetch<IAllItems>(`films?page=${page}${pathWithFilter}`, [page, pathWithFilter])

    const {items, totalPages} = data
    const allProps = {setChoose, items, changePage, page, totalPages, userChoose}

    if (error) return <ErrorMessage error={error}/>
    if (loading) return <LoadIcon/>

    return <App {...allProps}/>
}

export default AppContainer