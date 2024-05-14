import Image from "next/legacy/image"

export const Loader = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center">
            <div className="w-10 h-10 relative animate-bounce">
                <Image 
                    alt="logo"
                    fill
                    src="/logo.png"
                />
            </div>
            <p className="text-sm text-muted-foreground">
                SmartSage is finding...
            </p>
        </div>
    )
}