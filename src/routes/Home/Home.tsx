import { motion } from "framer-motion";
import BemVindo from "@/components/BemVindo/BemVindo";
import SobreMim from "@/components/SobreMim/SobreMim";
import Tecnologias from "@/components/Tecnologias/Tecnologias";
import CardProjetos from "@/components/CardProjetos/CardProjetos";
import Curriculo from "@/components/Buttons/Curriculo/Curriculo";

const Home: React.FC = () => {
    const animationBemVindo = {
        hidden: { opacity: 0, y: -250 }, 
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    }

    const animationVariants = {
        hidden: { opacity: 0, y: 250 }, 
        visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
    };

    return (
        <main className="flex flex-col gap-40">
            {/* Botão fixo */}
            <section className="fixed bottom-0 right-0 pr-5 z-50">
                <Curriculo />
            </section>

            {/* Bem Vindo */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={animationBemVindo}
            >
                <BemVindo />
            </motion.section>

            {/* Sobre Mim */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={animationVariants}
            >
                <SobreMim />
            </motion.section>

            {/* Linguagens */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={animationVariants}
            >
                <Tecnologias />
            </motion.section>

            {/* Projetos */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={animationVariants}
            >
                <CardProjetos />
            </motion.section>
        </main>
    );
};

export default Home;
