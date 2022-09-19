import {Dispatch, SetStateAction} from 'react';
import AllCards from "./Components/Cards/AllCards";
import Paginator from "./Components/SmallUIElements/Paginator";
import ICard from "./interfaces/ICard";
import IUserChoose from "./interfaces/IUserChoose";
import ErrorMessage from "./Components/SmallUIElements/ErrorMessage";
import FiltersContainer from "./Components/FilterBlocks/FiltersContainer";

interface AppProps {
    setChoose: Dispatch<SetStateAction<IUserChoose>>,
    items: ICard[],
    changePage: Dispatch<SetStateAction<number>>,
    page: number,
    totalPages: number
    userChoose: IUserChoose
}


const App = ({items, page, setChoose, changePage, totalPages, userChoose}: AppProps) => (
    <div className="my-[20px] mx-auto w-[1660px] p-[20px] bg-[#333333] rounded-[15px] z-0">
        <FiltersContainer setChoose={setChoose} userChoose={userChoose}/>
        {
            items.length ?
                <>
                    <AllCards allCards={items}/>
                    <Paginator page={page} changePage={changePage} totalPages={totalPages}/>
                </>
                :
                <ErrorMessage error={'Ничего не найденно'}/>
        }
    </div>
);

export default App;