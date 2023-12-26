interface ButtonProps {
    className?: string,
    value?: string
}

export function Button ({className, value} : ButtonProps) {

    return (
        <>
            <button className={className + " mt-3 px-5 py-2 rounded border-2 border-black bg-yellow-400 font-bold"}>{value}</button>
        </>
    )
}