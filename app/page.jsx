"use client";

import Image from "next/image";

import { useState, useEffect } from "react";

import Loading from "./components/Loading";
import ScrollActivatedVideo from "./components/TapToPlayVideo";
import Link from "next/link";
import Footer from "./components/Footer";

const dinosaur_dataset = [
    {
        eatingHabits: "肉食",
        dinoName: [
            "ヴェロキラプトル",
            "ティラノサウルス",
            "スピノサウルス",
            "カルノタウルス",
        ],
        dinoNameEn: [
            "Velociraptor",
            "Tyrannosaurus",
            "Spinosaurus",
            "Carnotaurus",
        ],
    },
    {
        eatingHabits: "草食",
        dinoName: [
            "パラサウロロフス",
            "トリケラトプス",
            "ステゴサウルス",
            "ブラキオサウルス",
            "パキケファロサウルス",
            "アパトサウルス",
            "アンキロサウルス",
        ],
        dinoNameEn: [
            "Parasaurolophus",
            "Triceratops",
            "Stegosaurus",
            "Brachiosaurus",
            "Pachycephalosaurus",
            "Apatosaurus",
            "Ankylosaurus",
        ],
    },
    {
        eatingHabits: "翼竜",
        dinoName: ["プテラノドン", "ディモルフォドン"],
        dinoNameEn: ["Pteranodon", "Dimorphodon"],
    },
    {
        eatingHabits: "海生爬虫類",
        dinoName: ["モササウルス"],
        dinoNameEn: ["Mosasaurus"],
    },
];
export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center bg_dino">
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <ScrollActivatedVideo />

                    <div className="h-40 w-40 relative">
                        <Image
                            src="/logo/dinoLogo.png"
                            alt="logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>

                    <div className="pt-5">
                        {dinosaur_dataset.map((obj, i) => (
                            <div className="mb-10" key={i}>
                                <p className="font-semibold text-lg hidden">
                                    {obj.eatingHabits}
                                </p>

                                <div className="grid grid-cols-4 gap-x-4 gap-y-10">
                                    {obj.dinoName.map((itemName, j) => {
                                        const itemEn = obj.dinoNameEn[j];

                                        return (
                                            <div
                                                key={itemName}
                                                className="group relative"
                                            >
                                                <Link
                                                    href={{
                                                        pathname: `/profile/${itemEn}`,
                                                    }}
                                                >
                                                    <div className="relative w-80 h-60 rounded-md overflow-hidden cursor-zoom-in group-hover:brightness-125 group-hover:filter group-hover:contrast-75 duration-300 ease-in-out border border-gray-600">
                                                        <Image
                                                            src={`/dinosaur/${itemEn}.jpg`}
                                                            alt={itemName}
                                                            layout="fill"
                                                            objectFit="cover"
                                                            className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                                                        />

                                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 text-white font-bold text-lg">
                                                            {itemName}
                                                        </div>
                                                    </div>
                                                </Link>

                                                <div className="absolute bottom-0 left-0 w-full bg-white opacity-0 group-hover:opacity-80 transition-opacity duration-300 py-1 text-center">
                                                    {itemEn}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
            <Footer />
        </div>
    );
}
