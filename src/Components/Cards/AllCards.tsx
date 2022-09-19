import {CardTemplate} from "./CardTemplate";
import ICard from "../../interfaces/ICard";

const AllCards = ({allCards}: { allCards: ICard[] }) =>
    (
        <>
            <div className=" grid grid-cols-4  gap-x-[20px] gap-y-[30px]">
                {
                    allCards.map(card => <CardTemplate card={card} key={card.kinopoiskId}/>)
                }
            </div>
        </>

    )

export default AllCards