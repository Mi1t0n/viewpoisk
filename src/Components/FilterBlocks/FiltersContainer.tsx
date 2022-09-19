import useFetch from "../../hooks/useFetch/useFetch";
import ErrorMessage from "../SmallUIElements/ErrorMessage";
import LoadIcon from "../SmallUIElements/LoadIcon";
import React, {Dispatch, SetStateAction} from "react";
import IUserChoose from "../../interfaces/IUserChoose";
import ISelectValues from "../../interfaces/ISelectValues";
import IInputFields from "../../interfaces/IInputFields";
import Filters from "./Filters";

interface FiltersContainerProps {
    setChoose: Dispatch<SetStateAction<IUserChoose>>
    userChoose: IUserChoose
}

interface UnknownKeyInResponse {
    [key: string]: { id: string, [key: string]: string }[]
}

const FiltersContainer = ({setChoose, userChoose}: FiltersContainerProps) => {

    const [data, loading, error] = useFetch<UnknownKeyInResponse>('films/filters')
    const {countries, genres} = data

    if (error) return <ErrorMessage error={error}/>
    if (loading) return <LoadIcon/>

    const selectValues: ISelectValues[] = [
        {blockName: 'По странам', content: countries, urlTag: 'countries'},
        {blockName: 'По жанрам', content: genres, urlTag: 'genres'},
        {
            blockName: 'Сортировка по',
            content: [
                {id: 'RATING', order: 'Рейтингу'},
                {id: 'NUM_VOTE', order: 'Кол-Во отзывов'},
                {id: 'YEAR', order: 'Году'}
            ],
            urlTag: 'order'
        },
        {
            blockName: 'Тип',
            content: [
                {id: 'FILM', type: 'Фильм'},
                {id: 'TV_SHOW', type: 'ТВ-Шоу'},
                {id: 'TV_SERIES', type: 'ТВ-Сериал'},
                {id: 'MINI_SERIES', type: 'Мини-Сериал'},
                {id: 'ALL', type: 'Все'}
            ],
            urlTag: 'type'
        },
    ]
    const inputFields: IInputFields[] = [
        {blockName: 'Min Год :', urlTag: 'yearFrom'},
        {blockName: 'Max Год :', urlTag: 'yearTo'},
        {blockName: 'Min Рейтинг :', urlTag: 'ratingFrom'},
        {blockName: 'Max Рейтинг :', urlTag: 'ratingTo'},
    ]

    const chooseHandler = (event: React.MouseEvent) => {
        const dataset = (event.target as HTMLLIElement).dataset
        const {urltag, pathvalue} = dataset

        if (!pathvalue || !urltag) return

        const keyOfUserChoose = urltag as keyof IUserChoose
        const sameButton = userChoose[keyOfUserChoose] === pathvalue

        if (sameButton) {
            const Copy = {...userChoose}
            delete Copy[keyOfUserChoose]
            return setChoose(Copy)
        }

        setChoose({...userChoose, [keyOfUserChoose]: pathvalue})
    }

    const changeHandler = (urlTag: keyof IUserChoose, value: string) => {
        if (urlTag == "ratingFrom" || urlTag == "ratingTo") {
            if (value.length == 1) setChoose({...userChoose, [urlTag]: value})
        }
        if (urlTag == "yearFrom" || urlTag == "yearTo") {
            if (+value > 1000 && +value < 3000) setChoose({...userChoose, [urlTag]: value})
        }
    }

    return <Filters selectValues={selectValues} userChoose={userChoose} chooseHandler={chooseHandler}
                    inputFields={inputFields} changeHandler={changeHandler}/>

}
export default FiltersContainer
