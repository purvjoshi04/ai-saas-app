import Image from "next/legacy/image";

interface EmptyProps {
    label: string;
}


export const Empty = ({
    label
}: EmptyProps) => {
    return (
        <div className="h-full p-20 flex flex-col items-center justify-center">
            <div className="relative h-60 w-60">
                <Image
                    alt="Empty"
                    layout="fill"
                    src="/empty.png"
                />
                </div>
                <p className="text-muted-foreground text-sm text-center pt-7 pl-10">
                    {label}
                </p>
        </div>
    )
}