"use client";

import { cn } from "@/lib/utils";
import AnimatedGridPattern from "../../components/ui/animated-grid-pattern";
import Marquee from "../../components/ui/marquee";
import TypingAnimation from "../../components/ui/typing-animation";
import GradualSpacing from "../../components/ui/gradual-spacing";
// import TextReveal from "../../components/ui/text-reveal";

const Home = () => {

    return (
        // Home
        <main className="flex flex-col gap-24">
            {/* Bem Vindo */}
            <section className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-background p-20">
                <div className="flex flex-col gap-2">
                    {/* Nome */}
                    <GradualSpacing
                        className="font-display text-center text-5xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
                        text="Nicolas Haubricht Hainfellner"
                    />

                    {/* Cargo */}
                    <TypingAnimation
                        className="text-4xl font-bold text-black dark:text-white"
                        text="Software Engineer"
                    />
                </div>
                {/* Background */}
                <AnimatedGridPattern
                    numSquares={30}
                    maxOpacity={0.1}
                    duration={3}
                    repeatDelay={1}
                    className={cn(
                        "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                    )}
                />
            </section>

            {/* Sobre Mim */}
            <section className="min-h-dvh flex bg-white dark:bg-background mx-10">
                <div className="w-1/2">
                    
                </div>
                <aside className="w-1/2 flex flex-col justify-center gap-4">
                    <h1 className="font-display text-4xl">Olá, me chamo <strong className="font-extralight font-mono">Nicolas!</strong></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, cupiditate natus. Nesciunt cupiditate ullam accusantium quas itaque sunt aliquam cum, nostrum, soluta ipsum, incidunt eum in impedit quisquam. Veniam, sint.</p>
                    <ul>
                        <li>Lorem ipsum dlior sit amet, consectetur adipisicing elit. Eum, cupiditate natus.</li>
                        <li>Lorem ipsum dlior sit amet, consectetur adipisicing elit. Eum, cupiditate natus.</li>
                        <li>Lorem ipsum dlior sit amet, consectetur adipisicing elit. Eum, cupiditate natus.</li>
                    </ul>
                </aside>
            </section>

            <section>
                <div>
                    <MarqueeDemo />
                </div>
            </section>
        </main>
    )
}

export default Home

const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Jane",
        username: "@jane",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jane",
    },
    {
        name: "Jenny",
        username: "@jenny",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jenny",
    },
    {
        name: "James",
        username: "@james",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/james",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    name,
    username,
    body,
}: {
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <div
                    className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-600"
                    aria-hidden="true"
                ></div>
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export function MarqueeDemo() {

    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}