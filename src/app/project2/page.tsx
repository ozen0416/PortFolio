import Image from "next/image";
import BurgerMenu from "@/components/burgerMenu";

export default function Project2() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="absolute top-0 left-0 p-4">
                <BurgerMenu />
            </div>

            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center w-full max-w-6xl">
                <h1 className="text-5xl">Projet 2</h1>

                <p className="text-2xl text-center mb-2 tracking-[-.01em]">
                    Ce second projet a été réalisé en 48h, en binôme avec un étudiant de deuxième année.
                </p>

                <p className="text-2xl text-center mb-2 tracking-[-.01em]">
                    L’objectif était simple : <span className="text-[#00FFC2] font-semibold">s’exercer au machine learning</span> et <span className="text-[#00FFC2] font-semibold">prédire le prix de maisons</span> en utilisant différentes variables que nous estimions pertinentes.
                </p>

                <p className="text-2xl text-center mb-2 tracking-[-.01em]">
                    Après avoir nettoyé les colonnes contenant peu de données, nous avons mis en place une <span className="text-[#00FFC2] font-semibold">régression linéaire simple</span> sur les données restantes.
                </p>

                <div className="flex flex-col md:flex-row items-center gap-8">
                    <Image
                        src="/Project2_1.png"
                        alt="Régression linéaire des données du dataset après nettoyage"
                        width={500}
                        height={400}
                        quality={100}
                        className="rounded-2xl shadow-lg object-cover"
                    />
                    <div className="text-2xl text-center md:text-left tracking-[-.01em]">
                        <p>Visualisation de la <span className="text-[#00FFC2] font-semibold">régression linéaire</span> sur les données nettoyées.</p>
                        <p className="text-base mt-2 text-red-300 font-semibold" >R² = 0.9320 et RMSE = 20697</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                    <Image
                        src="/Project2_2.png"
                        alt="Classement des 20 variables les plus influentes sur le prix"
                        width={500}
                        height={400}
                        quality={100}
                        className="rounded-2xl shadow-lg object-cover"
                    />
                    <p className="text-2xl text-center md:text-right tracking-[-.01em]">
                        Classement des <span className="text-[#00FFC2] font-semibold">20 variables ayant le plus d’influence sur le prix final</span>  d’une maison.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8">
                    <Image
                        src="/Project2_3.png"
                        alt="Régression linéaire sur les variables uniquement liées à l’intérieur de la maison"
                        width={500}
                        height={400}
                        quality={100}
                        className="rounded-2xl shadow-lg object-cover"
                    />
                    <div className="text-2xl text-center md:text-left tracking-[-.01em]">
                        <p>
                            Régression linéaire réalisée uniquement à partir des <span className="text-[#00FFC2] font-semibold">variables liées à l’intérieur de la maison.</span>
                        </p>
                        <p className="text-base font-medium mt-2 text-red-300 font-semibold">R² = 0.7945 et RMSE = 35992</p>
                    </div>
                </div>
            </main>

            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                <p className="flex items-center gap-2 hover:underline hover:underline-offset-4">
                    enzoleewood1@gmail.com
                </p>
                <p className="flex items-center gap-2 hover:underline hover:underline-offset-4" rel="noopener noreferrer">
                    07 82 95 28 65
                </p>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href={"https://github.com/ozen0416?tab=repositories"}
                >
                    <Image
                        aria-hidden
                        src="/github-mark-white.svg"
                        alt="Github icon"
                        width={16}
                        height={16}
                    />
                    Github
                </a>
            </footer>
        </div>
    );
}
