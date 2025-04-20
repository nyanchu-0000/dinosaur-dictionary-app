// components/Loading.js
import Image from "next/image";

const Loading = () => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white flex justify-center items-center z-50">
            <div className="relative w-48 h-48">
                <Image
                    src="/dinosaur/logo/logo.png"
                    alt="Loading Logo"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </div>
    );
};

export default Loading;
