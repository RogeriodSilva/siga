import { Spinner } from "../ui/spinner";

export default function Loading({ text, ...param }) {
    return (
        <div className="flex space-x-2 items-center justify-center select-none">
            {text && (
                <p>
                    <span className="italic font-light text-lg">{text}</span>
                </p>
            )}
            <Spinner className="size-5" />
        </div>
    );
}
