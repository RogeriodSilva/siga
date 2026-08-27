import useChromeStorage from "@/hooks/useChromeStorage";

export default function Navbar() {
    const { name } = useChromeStorage("currentTab");

    return (
        <nav>
            <div className="w-max px-4 py-2 rounded-full border">{name}</div>
        </nav>
    );
}
