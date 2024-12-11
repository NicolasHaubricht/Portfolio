import Marquee from "../../components/ui/marquee";
import { cn } from "@/lib/utils";

const imageUrls = [
    // Linha 1
    "https://www.svgrepo.com/show/473768/react.svg",
    "https://www.svgrepo.com/show/512400/javascript-155.svg",
    "https://www.svgrepo.com/show/512738/python-127.svg",
    "https://www.svgrepo.com/show/448299/aws.svg",
    "https://www.svgrepo.com/show/521339/c-plusplus-16.svg",
    // Linha 2
    "https://www.svgrepo.com/show/512317/github-142.svg",
    "https://www.svgrepo.com/show/512355/html-124.svg",
    "https://www.svgrepo.com/show/333609/tailwind-css.svg",
    "https://www.svgrepo.com/show/508795/css3-02.svg",
    "https://www.svgrepo.com/show/509966/git.svg",
    "https://www.svgrepo.com/show/378490/bootstrap-fill.svg"
];

const firstRow = imageUrls.slice(0, imageUrls.length / 2);
const secondRow = imageUrls.slice(imageUrls.length / 2);

const ImageCard = ({ src }: { src: string }) => {
    return (
        <div className={cn("relative w-40 h-40 cursor-pointer overflow-hidden rounded-xl p-10 bg-white dark:opacity-5 dark:hover:opacity-10 transition-all ease-in-out 100ms")}>
            <img
                src={src}
                alt="Tecnologia"
                className="h-full w-full object-cover rounded-xl opacity-20 hover:opacity-30 dark:opacity-100 transition-all ease-in-out 100ms"
            />
        </div>
    );
};

export default function Linguagens() {
    return (
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
    );
}
