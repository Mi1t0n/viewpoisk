import useFetch from "../../../hooks/useFetch/useFetch";
import IModalContent from "../../../interfaces/IModalContent";
import LoadIcon from "../../SmallUIElements/LoadIcon";
import ErrorMessage from "../../SmallUIElements/ErrorMessage";
import CardModalTemplate from "./CardModalTemplate";

const convertInString = (arrayOfObj: { [key: string]: string }[]) => {
    return arrayOfObj.map((e: { [key: string]: string }) => Object.values(e)).flat().join(' , ')
}

const CardModalTemplateContainer = ({id}: { id: number }) => {

    const [response, loading, error] = useFetch<IModalContent>(`films/${id}`)
    const {
        posterUrl,
        nameOriginal,
        nameRu,
        year,
        description,
        genres,
        countries,
        slogan,
        filmLength,
        reviewsCount,
        nameEn
    } = response

    if (error) return <ErrorMessage error={error}/>
    if (loading) return <LoadIcon/>

    const fakeResponseWithTitles = [
        {title: 'Странны', value: convertInString(countries)},
        {title: 'Жанры', value: convertInString(genres)},
        {title: 'Слоган', value: slogan},
        {title: 'Время', value: filmLength && filmLength + ' мин'},
        {title: 'Кол-во Отзывов', value: reviewsCount},
    ]

    const dataForCard = {posterUrl, nameOriginal, nameRu, year, description, nameEn}


    return <CardModalTemplate fakeResponseWithTitles={fakeResponseWithTitles} dataForCard={dataForCard}/>
}
export default CardModalTemplateContainer