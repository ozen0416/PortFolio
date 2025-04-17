import Image from "next/image";
import BurgerMenu from "@/components/burgerMenu";

export default function Project2() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="absolute top-0 left-0 p-4">
                <BurgerMenu />
            </div>
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center">
                <h1 className="text-5xl">Projet 2</h1>

                <p className="text-2xl text-center mb-2 tracking-[-.01em]">
                    Ce second projet a été réalisé en 48h, en binôme avec un étudiant de deuxième année.
                </p>

                <p className="text-2xl text-center mb-2 tracking-[-.01em]">
                    L’objectif était simple : s’exercer au machine learning et prédire le prix de maisons en utilisant différentes variables que nous estimions pertinentes.
                </p>

                <p className="text-2xl text-center mb-2 tracking-[-.01em]">
                    Après avoir nettoyé les colonnes contenant peu de données, nous avons mis en place une régression linéaire simple sur les données restantes.
                </p>

                <Image
                    src="/Project2_1.png"
                    alt="Régression linéaire des données du dataset après nettoyage"
                    width={800}
                    height={600}
                    quality={100}
                />

                <p className=" text-center font-medium mt-2">
                    R² = 0.9320 et RMSE = 20697
                </p>

                <p className="text-2xl text-center mb-2 tracking-[-.01em] mt-4">
                    Nous avons ensuite établi un classement des variables ayant le plus d’influence sur le prix.
                </p>

                <Image
                    src="/Project2_2.png"
                    alt="Classement des 20 variables les plus influentes sur le prix"
                    width={800}
                    height={600}
                    quality={100}
                />

                <p className="text-2xl text-center mb-2 tracking-[-.01em]">
                    Enfin, nous avons réalisé une régression uniquement à partir des variables liées à l’intérieur de la maison, afin d’observer l’impact d’éléments comme le nombre de salles de bain, la présence d’un garage, etc.
                </p>

                <Image
                    src="/Project2_3.png"
                    alt="Régression linéaire sur les variables uniquement liées à l’intérieur de la maison"
                    width={800}
                    height={600}
                    quality={100}
                />

                <p className=" text-center font-medium mt-2">
                    R² = 0.7945 et RMSE = 35992
                </p>
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
