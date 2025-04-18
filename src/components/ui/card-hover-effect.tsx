import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";


export const ComponentCard = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: string;
        link: string;
        tecnologias: string[];
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <Link
                    to={item?.link}
                    key={item?.link}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-700 dark:bg-neutral-50 block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                        <CardTecnologias tecnologias={item.tecnologias}/>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-white/[0.2] group-hover:border-slate-100/[0.6] relative z-20 transition-all duration-300 ease-in-out",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-black dark:text-white font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-zinc-700 dark:text-zinc-400 tracking-wide leading-relaxed text-sm text-justify",
                className
            )}
        >
            {children}
        </p>
    );
};
export const CardTecnologias = ({
    tecnologias,
    className,
}: {
    tecnologias: string[];
    className?: string;
}) => {
    return (
        <ul className={cn("mt-2 flex flex-wrap gap-2", className)}>
            {tecnologias.map((tecnologia, index) => (
                <li
                    key={index}
                    className="text-sm text-white dark:text-white bg-neutral-500 dark:bg-neutral-800 rounded px-2 py-1"
                >
                    {tecnologia}
                </li>
            ))}
        </ul>
    );
};


