import Image from "next/image";

export default function Project1() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center w-full max-w-6xl">
                <h1 className="text-5xl">Projet 1</h1>

                <p className="text-2xl text-center mb-2 tracking-[-.01em]">
                    Pour mon premier gros projet, le but était de créer un <span className="text-[#00FFC2] font-semibold">dashboard interactif</span> où l'on présentait des données traitées sous forme de graphiques.
                </p>

                <p className="text-2xl text-center mb-2 tracking-[-.01em]">
                    Le choix des données traitées était libre, et nous avons choisi un sujet très important aujourd’hui : <span className="text-[#00FFC2] font-semibold">le climat.</span>
                </p>

                <p className="text-2xl text-center mb-2 tracking-[-.01em]">
                    Sélection, nettoyage, analyse... Nous avons dû passer par toutes les étapes de la création d'une analyse de données et, par la suite, la présenter.
                </p>

                <p className="text-2xl text-center mb-2 tracking-[-.01em]">
                    Nous avons d'abord présenté de manière générale comment le climat mondial avait évolué, et établi un lien entre le réchauffement climatique et les risques de catastrophes naturelles.
                </p>

                <p className="text-2xl text-center mb-2 tracking-[-.01em]">
                    Voici quelques exemples d'analyse de données :
                </p>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <Image
                        src="/Project1_1.png"
                        alt="Température annuelle moyenne en France depuis 1950"
                        width={500}
                        height={400}
                        quality={100}
                        className="rounded-2xl shadow-lg object-cover"
                    />
                    <p className="text-2xl text-center md:text-left tracking-[-.01em]">
                        Visualisation de la <span className="text-[#00FFC2] font-semibold">température annuelle moyenne</span> en France depuis 1950.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                    <Image
                        src="/Project1_2.png"
                        alt="Carte thermique entre la température moyenne et le nombre de catastrophes naturelles."
                        width={500}
                        height={400}
                        quality={100}
                        className="rounded-2xl shadow-lg object-cover"
                    />
                    <p className="text-2xl text-center md:text-right tracking-[-.01em]">
                        <span className="text-[#00FFC2] font-semibold">Corrélation</span> entre la température moyenne et le nombre de catastrophes naturelles.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8">
                    <Image
                        src="/Project1_3.png"
                        alt="Comparatif entre la production et l'importation de l'électricité en France depuis les années 2000"
                        width={500}
                        height={400}
                        quality={100}
                        className="rounded-2xl shadow-lg object-cover"
                    />
                    <p className="text-2xl text-center md:text-left tracking-[-.01em]">
                        Comparatif entre la <span className="text-[#00FFC2] font-semibold">production et l'importation d'électricité</span> en France depuis les années 2000.
                    </p>
                </div>

                <p className="text-xl text-center font-medium mt-8">
                    Le projet est disponible sur GitHub.
                </p>
            </main>
        </div>
    );
}
