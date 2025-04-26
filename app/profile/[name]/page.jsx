import Image from "next/image";

export default function Page({ params }) {
    return (
        <div className="bg_profile flex justify-center items-center h-screen gap-50">
            <div className="relative w-[500px] h-[270px] rounded-md overflow-hidden cursor-zoom-in group-hover:brightness-125 group-hover:filter group-hover:contrast-75 duration-300 ease-in-out border border-gray-600 ">
                <Image
                    src={`/dinosaur/${params.name}.jpg`}
                    alt={params}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
            </div>
            <div className="w-100">
                <p>Name</p>
                <p>Size</p>
                <p>Weight</p>
                <p>Diet</p>
                <p>Characteristics</p>
                <p>Aggressiveness</p>
            </div>
        </div>
    );
}
