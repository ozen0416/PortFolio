import Image from "next/image";
import BurgerMenu from "@/components/burgerMenu";

export default function Inspiration() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="absolute top-0 left-0 p-4">
                <BurgerMenu />
            </div>
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                <p
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                >
                    enzoleewood1@gmail.com
                </p>
                <p
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    rel="noopener noreferrer"
                >
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
    )
}