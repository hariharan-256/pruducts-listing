import React from "react";
import { useSelector } from "react-redux";
import StarRating from "../../organisms/StarRating";
import { Link } from "react-router-dom";
import { Loader } from "../../organisms/Loader";
import LazyImage from "../../organisms/LazyImage";

const ProductColumns: React.FC = () => {
    const { data, fetching, error } = useSelector((state: any) => state.productState);


    if (error) return <p>Error: {error}</p>;

    return (
        <div className="pb-7">
            <div className={`grid relative ${fetching ? "h-screen" : ""}  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`}>
                {fetching ? (
                    <div className="absolute top-[35%] left-[50%] translate-y-[-35%] translate-x-[-50%]">
                        <Loader />
                    </div>
                ) : data ? (
                    data?.map((product: any) => {
                        let discountAmt = product.price * (product.discountPercentage / 100);
                        let discountPrice = product?.price - discountAmt;
                        return (
                            <>
                                <div key={product?.id} className="bg-white rounded-lg shadow-[0px_2px_8px_rgba(0,0,0,0.15)] p-6">
                                    <LazyImage src={product?.thumbnail} alt={product?.title} />
                                    <div className="py-4 text-gray-600 flex flex-col justify-between">
                                        <div>
                                            <Link to={"#!"} title={product?.title}>
                                                <h2 className="text-lg truncate font-bold mb-2">
                                                    <u>{product?.title}</u>
                                                </h2>
                                            </Link>
                                            <p title={product?.description} className="mb-2 truncate">
                                                {product?.description}
                                            </p>
                                            <span className="text-sm mb-2 border rounded-[5px] py-1 px-2 mb-2 inline-block">{product?.category}</span>
                                            <p className="text-sm mb-2">Availability: {product?.availabilityStatus}</p>
                                            <b className="text-sm">
                                                ₹{discountPrice?.toFixed(2)}
                                                <del className="text-sm font-light ml-2 text-[#878787]">₹{product?.price}</del>{" "}
                                                <span className="tex-sm text-[#388e3c]">{+product.discountPercentage}% off</span>
                                            </b>
                                            <div>
                                                <StarRating rating={product?.rating} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })
                ) : (
                    <p>No data found</p>
                )}
            </div>
        </div>
    );
};

export default ProductColumns;
