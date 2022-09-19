import IModalContent from "../../../interfaces/IModalContent";

interface CardModalTemplateProps {
    dataForCard: Pick<IModalContent, 'posterUrl' | 'nameRu' | 'nameOriginal' | 'description' | 'year'|'nameEn'>
    fakeResponseWithTitles: { title: string, value: string | number }[]
}

function CardModalTemplate({fakeResponseWithTitles, dataForCard}: CardModalTemplateProps) {
    const {posterUrl, nameOriginal, nameRu, year, description,nameEn} = dataForCard

    const allCardInfo = fakeResponseWithTitles.map(({title, value}) => {
        if (!value) return
        return (
            <li key={title} className='flex mb-2'>
                <div className='font-[600] text-black/[.5]'>{title} </div>
                <div className='font-[800] ml-[20px]'>{value}</div>
            </li>
        )
    })

    return (
        <div className='grid grid-cols-[500px,900px]'>
            <img src={posterUrl} className='h-[700px] w-[600px] rounded-[15px] '/>
            <div className='px-[10px]'>
                <h1 className='text-center py-3 font-[700] text-[22px] '>{`${nameRu || nameEn || nameOriginal} ( ${year} )`}</h1>
                <p className='font-[600] text-[18px] text-justify w-[800px] mx-auto'>{description}</p>
                <ul className='w-[800px]  mx-auto text-[24px] py-[30px]'>
                    {allCardInfo}
                </ul>
            </div>
        </div>
    );
}

export default CardModalTemplate;