import Image from "next/image";
import BurgerMenu from "@/components/burgerMenu";

export default function Project1() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="absolute top-0 left-0 p-4">
                <BurgerMenu />
            </div>
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center">
                <h1 className="text-5xl">Projet 1</h1>

                <p className="text-2xl text-center mb-2 tracking-[-.01em]">
                    Pour mon premier gros projet, le but était de créer un dashboard interactif où l'on présentait des données traitées sous forme de graphiques.
                </p>

                <p className="text-2xl text-center mb-2 tracking-[-.01em]">
                    Le choix des données traitées était libre, et nous avons choisi un sujet très important aujourd’hui : le climat.
                </p>

                <p className="text-2xl text-center mb-2 tracking-[-.01em]">
                    Sélection, nettoyage, analyse... Nous avons dû passer par toutes les étapes de la création d'une analyse de données et, par la suite, la présenter.
                </p>

                <p className="text-2xl text-center mb-2 tracking-[-.01em]">
                    Nous avons d'abord présenté de manière générale comment le climat mondial avait évolué, et établi un lien entre le réchauffement climatique et les risques de catastrophes naturelles.
                </p>

                <Image
                    src="/Project1_1.png"
                    alt="Température annuelle moyenne en France depuis 1950"
                    width={800}
                    height={600}
                    quality={100}
                />

                <p className="text-2xl text-center mb-2 tracking-[-.01em]">
                    Ensuite, une corrélation entre la température moyenne et le nombre de catastrophes naturelles.
                </p>

                <Image
                    src="/Project1_2.png"
                    alt="Carte thermique entre la température moyenne et le nombre de catastrophes naturelles."
                    width={800}
                    height={600}
                    quality={100}
                />

                <p className="text-2xl text-center mb-2 tracking-[-.01em]">
                    Ou encore un comparatif entre la production et l'importation d'électricité en France depuis les années 2000.
                </p>

                <Image
                    src="/Project1_3.png"
                    alt="Comparatif entre la production et l'importation de l'électricité en France depuis les années 2000"
                    width={800}
                    height={600}
                    quality={100}
                />

                <p className="text-xl text-center font-medium mt-4">
                    Le projet est disponible sur GitHub.
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
