import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "@/components/burgerMenu";

export default function Home() {
  return (
      <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="absolute top-0 left-0 p-4">
          <BurgerMenu />
        </div>

        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full h-full justify-center">
          <h1 className="text-8xl font-extrabold uppercase text-white drop-shadow-md tracking-wider mb-6">Bienvenue</h1>
          <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <p className="mb-2 tracking-[-.01em]">
              Voici mon portfolio où vous pourrez retrouver une petite introduction et quelques projets à moi.
            </p>
            <Link className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]" href={"/topics"}>Continuer</Link>
          </ol>
        </main>

        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <p className="flex items-center gap-2 hover:underline hover:underline-offset-4">
            enzoleewood1@gmail.com
          </p>
          <p className="flex items-center gap-2 hover:underline hover:underline-offset-4">
            07 82 95 28 65
          </p>
          <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href={"https://github.com/ozen0416?tab=repositories"}>
            <Image aria-hidden src="/github-mark-white.svg" alt="Github icon" width={16} height={16} />
            Github
          </a>
        </footer>
      </div>

  );
}
