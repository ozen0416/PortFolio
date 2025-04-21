import Image from "next/image";
import BurgerMenu from "@/components/burgerMenu";

export default function Inspiration() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-white">
            <div className="absolute top-0 left-0 p-4">
                <BurgerMenu />
            </div>

            <main className="flex flex-col gap-[48px] row-start-2 w-full max-w-6xl">
                <h1 className="text-6xl sm:text-7xl font-extrabold uppercase tracking-wider text-center drop-shadow-lg">
                    Inspiration
                </h1>

                <div className="flex flex-col sm:flex-row items-center gap-10">
                    <div className="sm:w-1/2 text-center sm:text-left">
                        <p className="text-2xl sm:text-3xl tracking-tight leading-relaxed">
                            Je m’inspire de plusieurs univers différents pour sélectionner les sujets de mes projets,
                            comme la <span className="text-[#00FFC2] font-semibold">santé en général</span>,
                            l’environnement, les avancées technologiques, ou encore les enjeux sociétaux actuels.
                        </p>
                    </div>
                    <div className="sm:w-1/2 flex justify-center">
                        <Image
                            src="/inspiration_health.jpg"
                            alt="Inspiration santé"
                            width={500}
                            height={500}
                            className="rounded-2xl shadow-lg object-cover"
                        />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row-reverse items-center gap-10">
                    <div className="sm:w-1/2 text-center sm:text-left">
                        <p className="text-xl sm:text-3xl  tracking-tight leading-relaxed">
                            Ou alors le divertissement et l'amusement pour avoir un éventail plus large,
                            comme les jeux-vidéos ou la musique.
                        </p>
                    </div>
                    <div className="sm:w-1/2 flex justify-center">
                        <Image
                            src="/inspiration_gaming.jpg"
                            alt="Inspiration environnement"
                            width={500}
                            height={500}
                            className="rounded-2xl shadow-lg object-cover"
                        />
                    </div>
                </div>
            </main>

            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-400">
                <p className="flex items-center gap-2 hover:underline hover:underline-offset-4">
                    enzoleewood1@gmail.com
                </p>
                <p className="flex items-center gap-2 hover:underline hover:underline-offset-4">
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
