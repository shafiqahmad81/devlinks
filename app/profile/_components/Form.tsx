import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export function FormInput() {
  return (
    <>
      <div className="flex flex-row w-full  items-center gap-1.5 mt-6">
        <Label className="w-[45.117%]" htmlFor="email">
          Email
        </Label>
        <Input
          className="w-[calc(100%-45.117%)]"
          type="email"
          id="email"
          placeholder="Email"
        />
      </div>
    </>
  );
}
