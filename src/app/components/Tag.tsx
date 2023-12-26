import { CiSquareRemove } from "react-icons/ci";

interface TagProps {
    add?: string,
    value?: string
}

export function Tag ({add, value} : TagProps) {

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
    };

    const bg = add === "true" ? "bg-yellow-400" : "bg-white"

    return (
        <section className={bg + " pl-3 pr-1 py-1 mr-2 rounded border-2 border-black text-sm cursor-pointer inline-block"}>
            <div className="flex items-center">
                 {value}
                 <button onClick={handleClick} className="pl-2 text-xl"><CiSquareRemove /></button>
             </div>
        </section>
    )
}