export default function Button({ children, className = "", ...props }) {
    const dfClass = `rounded-full bg-zinc-900 hover:bg-zinc-800 text-white p-1 text-sm transition-all duration-300 ease-in-out disabled:opacity-[.5] disabled:cursor-not-allowed`;
    return (
        <button
            className={`cursor-pointer w-full ${dfClass} ${className}`.trim()}
            {...props}
        >
            {children}
        </button>
    );
}
