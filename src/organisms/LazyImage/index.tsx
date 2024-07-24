import React, { useEffect, useRef, useState } from "react";

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, []);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div className={className}>
            <img
                ref={imgRef}
                src={src}
                alt={alt}
                onLoad={handleImageLoad}
                className={`w-full object-contain ${isLoaded ? "block" : "none"}`}
            />
            {!isLoaded && (
                <div className="h-[254px] animate-pulse bg-gray-300 rounded"></div>
            )}
        </div>
    );
};

export default LazyImage;
