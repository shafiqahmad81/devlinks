import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export function FormInput() {
  return (
    <>
      <div className=" w-full bg-[#FAFAFA] text-foreground mt-6 p-5 rounded-lg flex flex-col gap-6 ">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <Label className="w-full sm:w-[37.210%]" htmlFor="firstname">
            First name
          </Label>
          <Input
            className="w-full sm:w-[calc(100%-37.210%)] transition-all duration-500 focus:shadow-3xl h-12"
            type="text"
            id="firstname"
            placeholder="Ben I"
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <Label className="w-full sm:w-[37.210%]" htmlFor="lastname">
            Last name
          </Label>
          <Input
            className="w-full sm:w-[calc(100%-37.210%)] transition-all duration-500 focus:shadow-3xl h-12"
            type="text"
            id="lastname"
            placeholder="Wright"
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <Label className="w-full sm:w-[37.210%]" htmlFor="email">
            Email
          </Label>
          <Input
            className="w-full sm:w-[calc(100%-37.210%)] transition-all duration-500 focus:shadow-3xl h-12"
            type="email"
            id="email"
            placeholder="ben@example.com"
          />
        </div>
      </div>
    </>
  );
}
