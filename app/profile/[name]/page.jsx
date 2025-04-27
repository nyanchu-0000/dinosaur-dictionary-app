import Image from "next/image";

export default function Page({ params }) {
    return (
        <div
            className="bg_profile flex justify-center items-center h-screen gap-40"
            style={{ filter: "sepia(40%)" }}
        >
            <div className="relative w-[500px] h-[270px] rounded-md overflow-hidden cursor-zoom-in group-hover:brightness-125 group-hover:filter group-hover:contrast-75 duration-300 ease-in-out border border-gray-600 ">
                <Image
                    src={`/dinosaur/${params.name}.jpg`}
                    alt={params}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                    style={{ filter: "sepia(70%)" }} // セピアフィルタを適用
                />
            </div>
            <div className="w-100 text-xl flex flex-col gap-y-5">
                <div className="flex gap-5">
                    <p>Name</p>
                    <p>ヴェロキラプトル</p>
                </div>
                <div className="flex gap-5">
                    <p>Size</p>
                    <p>2m〜x2.5m</p>
                </div>
                <div className="flex gap-5">
                    <p>Weight</p>
                    <p>25kg</p>
                </div>
                <div className="flex gap-5">
                    <p>Diet</p>
                    <p>肉食</p>
                </div>
                <div>
                    <p>Characteristics</p>
                    <p>
                        鋭い爪と歯を持ち、足が速く機敏な動きができる。体の大きさと比べると脳が大きかったため、最も知能の高い恐竜の一種と呼ばれている。後ろ足の第二の指には、大きく鎌状に発達した鋭い爪を持っており、獲物を捕らえたり、攻撃したりする際に使われたと考えられている。この爪は普段は持ち上げられて地面につかないようになってた
                    </p>
                </div>
                <div className="flex gap-5">
                    <p>Aggressiveness</p>
                    <p>高</p>
                </div>
            </div>
        </div>
    );
}
