import { cn } from "@/lib/utils";

const ProductPrice = ({ value, className }: { value: number; className?: string }) => {
    // Ensure two decimal places
    const stringValue = value.toFixed(2);
    // Get the int and float
    const [decimal, fraction] = stringValue.split(".");
    return (<p className={cn("text-2xl", className)}>
        <span className="text-xs align-super">$</span>
        {decimal}
        <span className="text-xs align-super">.{fraction}</span>
    </p>);
}

export default ProductPrice;