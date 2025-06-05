import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

function InfoBox({ className, ...props }: React.ComponentProps<"div"> ) {
    return (
        <div 
            data-slot="info-box"
            className={cn(
                "flex flex-col box-border py-1 w-[300px] h-fit border rounded-xl shadow-sm",
                "[border-color:var(--border)]",
                className
            )}
            {...props}
        />
    )
}

function InfoBoxImageSection({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="image-section"
            className={cn(
                "flex flex-col justify-between items-center p-[12px] h-[300px] w-[300px]",
                className
            )}
            {...props}
        />    
    )
}

function InfoBoxImage({ src, className, ...props }: React.ComponentProps<"img">) {
    return (
        <img 
            data-slot="image"
            src={src}
            className={cn(
                "h-[200px] w-fit",
                className
            )}
            {...props}
        />
    )
}

function InfoBoxDataSection({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="data-section"
            className={cn(
                "flex flex-col items-center p-[12px] h-fit w-[300px]",
                className
            )}
            {...props}
        />
    )
}

const InfoBoxDataContentVariants = cva(
    "flex flex-col gap-1 h-fit w-full",
    {
        variants: {
            variant: {
                default: "px-2",
                background: "px-3 bg-neutral-100 py-3 [border-radius:var(--radius)]",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

function InfoBoxDataContent( { className, variant, ...props }: React.ComponentProps<"div"> & VariantProps<typeof InfoBoxDataContentVariants>) {
    return (
        <div 
            data-slot="data-content"
            className={cn(InfoBoxDataContentVariants({ variant, className }))}
            {...props}
        />
    )
}

/* Dividers Variants */
const InfoBoxDividerVariants = cva(
    "",
    {
        variants: {
            variant: {
                default: "flex flex-col w-full h-[1px] [background-color:var(--border)]",
                up: "flex flex-col w-full h-[15px] border-l border-b border-r border-neutral-300 [border-bottom-left-radius:var(--radius)] [border-bottom-right-radius:var(--radius)]",
                down: "flex flex-col w-full h-[15px] border-l border-t border-r border-neutral-300 [border-top-left-radius:var(--radius)] [border-top-right-radius:var(--radius)]",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

function InfoBoxDivider({ className, variant, ...props }: React.ComponentProps<"div"> & VariantProps<typeof InfoBoxDividerVariants>) {
    return (
        <div
            data-slot="divider"
            className={cn(InfoBoxDividerVariants({ variant, className }))}
            {...props}
        />
    )
}

/* Data Section Variants */
const InfoBoxDataVariants = cva(
    "flex items-center py-[4px] px-2 w-full h-fit",
    {
        variants: {
            variant: {
                default: "flex-row justify-between",
                long: "flex-col pt-2 gap-1 items-stretch",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

function InfoBoxDataItem({ className, variant, ...props }: React.ComponentProps<"div"> & VariantProps<typeof InfoBoxDataVariants>) {
    return (
        <div 
            data-slot="data-info"
            className={cn(InfoBoxDataVariants({ variant, className }))}
            {...props}
        />
    )
}

/* Data Section Text */
function InfoBoxDataHeader({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="data-header"
            className={cn(
                "w-full leading-none font-semibold",
                className
            )}
            {...props}
        />
    )
}

function InfoBoxDataLabel({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="data-header"
            className={cn(
                "flex justify-center w-full text-muted-foreground text-sm",
                className
            )}
            {...props}
        />
    )
}

export {
    InfoBox,
    InfoBoxImageSection,
    InfoBoxImage,
    InfoBoxDataSection,
    InfoBoxDataContent,
    InfoBoxDividerVariants,
    InfoBoxDivider,
    InfoBoxDataVariants,
    InfoBoxDataItem,
    InfoBoxDataHeader,
    InfoBoxDataLabel
}