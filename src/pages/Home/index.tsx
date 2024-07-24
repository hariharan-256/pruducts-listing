import { useEffect } from "react";
import { useAppDispatch } from "../../redux/store";
import ProductColumns from "./ProductColumns";
import { Header } from "../../organisms/Header";
import { fetchProducts } from "../../redux/actions/products";
import { Categories } from "../../organisms/Categories";
import { Footer } from "../../organisms/Footer";
import { Container } from "../../organisms/Container";

const Home = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch]);


    return <>
        <Container>
            <Header />
            <div className={`my-[10px]`}>
                <div className="flex justify-between items-center mb-5">
                    <Categories />
                </div>
                <ProductColumns />
            </div>
        </Container>
        <Footer />
    </>
};

export default Home;
