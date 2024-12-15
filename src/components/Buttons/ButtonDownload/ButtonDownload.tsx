import ShimmerButton from '@/components/ui/shimmer-button';

interface ButtonTypeProps {
    text: string;
    fileUrl: string;
    fileName: string;
}

const ButtonType: React.FC<ButtonTypeProps> = ({ text, fileUrl, fileName }) => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = fileName;
        link.click();
    };

    return (
        <div>
            <div className="z-10 flex min-h-[100px] items-center justify-center">
                <ShimmerButton
                    className="shadow-2xl"
                    onClick={handleDownload}
                >
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                        {text}
                    </span>
                </ShimmerButton>
            </div>
        </div>
    );
};

export default ButtonType;
