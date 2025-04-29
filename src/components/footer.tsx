import Image from "next/image";

export default function Footer() {
    return(
        <footer className="row-start-3 flex w-full gap-[50px] flex-wrap items-center justify-center text-gray-400">
            <p className="flex items-center gap-2 ">
                enzoleewood1@gmail.com
            </p>
            <p className="flex items-center gap-2">
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
    )
}