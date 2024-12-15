import { Outlet } from "react-router-dom"
import ButtonType from "@/components/Buttons/ButtonType/ButtonType"
const Projetos = () => {
    return (
        <>
            <section>
                <Outlet />
                <ButtonType text="Voltar para a página inicial"/>
            </section>
        </>
    )
}

export default Projetos

