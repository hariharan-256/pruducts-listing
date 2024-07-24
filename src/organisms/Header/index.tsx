import { Link } from "react-router-dom";
import { fetchProducts, searchProducts } from "../../redux/actions/products";
import { useAppDispatch } from "../../redux/store";
import { useCallback } from "react";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";
import { GET_PRODUCTS_RESET, RESET_CATEGORY, RESET_SEARCH, TOGGLE_SIDEBAR, UPDATE_SEARCH } from "../../redux/types/types";
import { FaShoppingBasket } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";


export const Header: React.FC = () => {
    const dispatch = useAppDispatch();
    const { search } = useSelector((state: any) => state?.filterState);
    const { isOpen } = useSelector((state: any) => state?.ToggleClickState);

    function debounce(func: Function, wait: number) {
        let timeout: NodeJS.Timeout | number;
        return (...args: any[]) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    }
    const debouncedSearch = useCallback(
        debounce((query: string) => {
            dispatch(searchProducts(query));
        }, 500),
        [dispatch]
    );
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        debouncedSearch(event.target.value);
        dispatch({ type: UPDATE_SEARCH, payload: event.target.value });
        dispatch({ type: RESET_CATEGORY });
    };
    const reset = () => {
        dispatch({ type: RESET_SEARCH });
        dispatch({ type: GET_PRODUCTS_RESET });
        dispatch(fetchProducts());
    };
    const _handleClick = () => {
        dispatch({ type: TOGGLE_SIDEBAR, payload: !isOpen })
    }
    return (
        <header className="xl:flex justify-between items-center py-4">
            <div className="xl:basis-[10%] flex items-center xl:mb-0 mb-5">
                <h4 className="flex-auto text-2xl font-black">
                    <span className="text-[#E90074]">M</span>oBoo<span className="text-[#E90074]">M</span>
                </h4>
                <RxHamburgerMenu onClick={_handleClick} className="onlyMob text-xl cursor-pointer" />
            </div>
            <div className="xl:flex space-x-4 basis-[90%] justify-end items-center">
                <div className="border w-full xl:max-w-[25rem] flex justify-between items-center rounded-[8px] px-[20px] py-[10px]">
                    <input value={search} onChange={handleSearch} placeholder="Search" className="w-full" type="text" />
                    {search === "" ? <IoSearchOutline className="text-lg" /> : <IoCloseOutline className="text-xl cursor-pointer" onClick={reset} />}
                </div>
                <ul className={`flex mobList ${isOpen ? "open" : ""} xl:space-x-[25px]`}>
                    <IoCloseOutline className="text-2xl absolute onlyMob right-[30px] cursor-pointer" onClick={_handleClick} />
                    <li>
                        <Link to="#!">Store</Link>
                    </li>
                    <li>
                        <Link to="#!">Account</Link>
                    </li>
                    <li>
                        <Link to="#!">Wish List</Link>
                    </li>
                    <li>
                        <Link to="#!" className="flex">
                            Basket <FaShoppingBasket className="inline text-lg ml-2" />
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};
