import Image from "next/image";

export default function Inspiration() {
    return (
        <div className="min-h-screen text-white px-4 sm:px-20 py-12 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-20 max-w-5xl mx-auto">
                <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-wider text-center drop-shadow-lg">
                    Inspiration
                </h1>

                <div className="flex flex-col sm:flex-row items-center gap-10">
                    <div className="sm:w-1/2 text-center sm:text-left">
                        <p className="text-lg sm:text-2xl tracking-tight leading-relaxed">
                            Je m’inspire de plusieurs univers différents pour sélectionner les sujets de mes projets, comme la{" "}
                            <span className="text-[#00FFC2] font-semibold">santé en général</span>,
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
                        <p className="text-lg sm:text-2xl tracking-tight leading-relaxed">
                            Ou alors le divertissement et l'amusement pour avoir un éventail plus large,
                            comme les jeux-vidéos ou la musique.
                        </p>
                    </div>
                    <div className="sm:w-1/2 flex justify-center">
                        <Image
                            src="/inspiration_gaming.jpg"
                            alt="Inspiration gaming"
                            width={500}
                            height={500}
                            className="rounded-2xl shadow-lg object-cover"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
