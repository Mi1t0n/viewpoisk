import ICard from "../../interfaces/ICard";
import Modal from "../Modal/Modal";
import useModal from "../../hooks/useModal/useModal";
import CardModalTemplateContainer from "../Modal/CardModal/CardModalTemplateContainer";


export function CardTemplate({card}: { card: ICard }) {

    const {ratingKinopoisk, posterUrl, nameOriginal, year, nameRu, kinopoiskId, nameEn} = card
    const rateColor: string = ratingKinopoisk > 7 ? 'bg-green-500' : ratingKinopoisk > 5 ? 'bg-amber-400' : 'bg-[#4b4d4b]'
    const [status, toggle] = useModal()

    return (
        <>
            <div className='text-white  cursor-pointer relative '>
                <p className={`absolute text-white font-[500] ${rateColor} rounded-full top-[10px] 
               left-[10px] w-[35px] h-[35px] text-center py-[5px]`}
                >
                    {ratingKinopoisk || '-'}
                </p>
                <img src={posterUrl} className='h-[500px] w-[400px] object-cover rounded-[10px]' onClick={toggle}/>
                <p className='font-[700] text-center'>{nameRu || nameEn || nameOriginal} ({year})</p>
            </div>
            {
                status && <Modal toggle={toggle} children={<CardModalTemplateContainer id={kinopoiskId}/>}/>
            }
        </>
    )
}