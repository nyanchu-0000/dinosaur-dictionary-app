import Footer from "@/app/components/Footer";
import { dinosaurDetails } from "@/public/data/dinosaur_data";
import Image from "next/image";

export default function Page({ params }) {
    const dinosaurData = dinosaurDetails[params.name];

    return (
        <div>
            <div
                className="bg_profile flex justify-center gap-35"
                style={{ filter: "sepia(40%)" }}
            >
                <div className="w-[500px] h-[270px] rounded-md overflow-hidden cursor-zoom-in group-hover:brightness-125 group-hover:filter group-hover:contrast-75 duration-300 ease-in-out border border-gray-600 sticky top-65">
                    <Image
                        src={`/dinosaur/${params.name}.jpg`}
                        alt={params}
                        fill
                        sizes="string"
                        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                        priority
                        style={{ filter: "sepia(70%)" }} // セピアフィルタを適用
                    />
                </div>
                <div className="w-100 h-[2000px] justify-between text-base flex flex-col gap-y-3 pt-70 pb-50">
                    <div className="flex flex-col gap-4">
                        {dinosaurData.details.map((detail) => (
                            <div className="flex gap-16" key={detail.label}>
                                <p className="rubik-marker-hatch-regular w-40  text-2xl">
                                    {detail.label}
                                </p>
                                <p className="zen-kaku-gothic-new-regular">
                                    {detail.value}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="py-5 flex flex-col gap-3">
                        <p className="rubik-marker-hatch-regular w-40 text-2xl">
                            Characteristics
                        </p>
                        <p className="zen-kaku-gothic-new-regular text-sm leading-7">
                            {dinosaurData.Characteristics} {/* ここを修正 */}
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
