import { Spinner } from "@/components/ui/spinner";
import useLocalStorageState from "use-local-storage-state";

export default function Loading({ ...param }) {
      const [local] = useLocalStorageState("localStorage");

      return (
            <div className="w-full h-100 flex flex-col space-y-4 items-center justify-center">
                  <Spinner className="size-8" />
                  {param.children && (
                        <p className="text-lg font-light">{param.children}</p>
                  )}
            </div>
      );
}
