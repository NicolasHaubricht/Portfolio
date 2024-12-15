import Marquee from "../ui/marquee";
import { cn } from "@/lib/utils";

const imageUrls = [
    // Linha 1
    "https://www.svgrepo.com/show/512317/github-142.svg",
    "https://www.svgrepo.com/show/512355/html-124.svg",
    "https://www.svgrepo.com/show/333609/tailwind-css.svg",
    "https://www.svgrepo.com/show/508795/css3-02.svg",
    "https://www.svgrepo.com/show/509966/git.svg",
    "https://www.svgrepo.com/show/306811/styled-components.svg",
    // Linha 2
    "https://www.svgrepo.com/show/473768/react.svg",
    "https://www.svgrepo.com/show/512400/javascript-155.svg",
    "https://www.svgrepo.com/show/512738/python-127.svg",
    "https://www.svgrepo.com/show/448299/aws.svg",
    "https://www.svgrepo.com/show/521339/c-plusplus-16.svg",
    "https://www.svgrepo.com/show/369620/typescript.svg"
];

const firstRow = imageUrls.slice(0, imageUrls.length / 2);
const secondRow = imageUrls.slice(imageUrls.length / 2);

const ImageCard = ({ src }: { src: string }) => {
    return (
        <div className={cn("relative w-20 h-20 lg:w-40 lg:h-40 cursor-pointer overflow-hidden rounded-xl p-2 lg:p-10 bg-neutral-100 dark:bg-neutral-900")}>
            <img
                src={src}
                alt="Tecnologia"
                className="h-full w-full object-cover rounded-xl opacity-20 dark:opacity-100"
            />
        </div>
    );
};

export default function Tecnologias() {
    return (
        <section className="w-full flex items-center p-3">
            <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-white dark:bg-background">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((src, index) => (
                        <ImageCard key={index} src={src} />
                    ))}
                    {/* hover:opacity-50 */}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:25s]">
                    {secondRow.map((src, index) => (
                        <ImageCard key={index} src={src} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </section>
    );
}
