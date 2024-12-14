import { Link } from 'react-router-dom'
import ShimmerButton from '@/components/ui/shimmer-button'

interface ButtonTypeProps {
    text: string;
}

const ButtonType: React.FC<ButtonTypeProps> = ({ text }) => {
        return (
            <div>
                <Link to='/'>
                    <div className="z-10 flex min-h-64 items-center justify-center">
                        <ShimmerButton className="shadow-2xl">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                {text}
                            </span>
                        </ShimmerButton>
                    </div>
                </Link>
            </div>
        )
    }

export default ButtonType
