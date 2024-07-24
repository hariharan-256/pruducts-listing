import { useSelector } from "react-redux";
import { fetchCategories, filterProductsByCategory } from "../../redux/actions/products";
import { useAppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { RESET_SEARCH, UPDATE_CATEGORY } from "../../redux/types/types";

export const Categories = () => {
    const dispatch = useAppDispatch();
    const { dropdown } = useSelector((state: any) => state?.categoriesState);
    const { category } = useSelector((state: any) => state?.filterState);


    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);
    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(filterProductsByCategory(event.target.value));
        dispatch({ type: UPDATE_CATEGORY, payload: event.target.value });
        dispatch({ type: RESET_SEARCH });
    };

    return (
        <select
            onChange={handleCategoryChange}
            value={category}
            className="border rounded-[8px] mb-5 xl:max-w-[300px] w-full cursor-pointer select py-2 text-black">
            <option value="0">Select Category</option>
            {dropdown?.map((el: any, i: any) => (
                <option key={i} value={el?.slug}>
                    {el?.name}
                </option>
            ))}
        </select>
    );
};
