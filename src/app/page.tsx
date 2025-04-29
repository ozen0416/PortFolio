import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
      <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-[32px] row-start-2 items-center sm:center w-full h-full justify-center">
              <h1 className="text-8xl font-extrabold uppercase text-white drop-shadow-md tracking-wider mb-6">
                  Portfolio
              </h1>

              <div className="flex flex-col items-center gap-4 font-[family-name:var(--font-geist-mono)]">
                  <p className="text-3xl mb-2 tracking-[-.01em]">Enzo OUDIN</p>
                  <Link
                      href="/inspiration"
                      className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 md:w-[158px]"
                  >
                      Continuer
                  </Link>
              </div>
          </main>
      </div>

  );
}
