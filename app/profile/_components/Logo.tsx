import { Card } from "@/components/ui/card";
import { ImageIcon } from "@radix-ui/react-icons";

export function LogoInfo() {
  return (
    <>
      <Card className=" w-full bg-[#FAFAFA] text-foreground mt-6 p-5 flex items-center ">
        <div className="w-[37.210%] pr-[2.907%]">
          <span className="text-lg font-medium">Profile picture</span>
        </div>
        <div className="w-[calc(100%-37.210%)] inline-flex items-center">
          <div className="w-[45.117%]">
            <div className="bg-slate-500 rounded-xl overflow-hidden relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-black/50 after:z-10">
              <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20 inline-flex flex-col items-center gap-4">
                <ImageIcon width={32} height={32} />
                <span className="text-lg font-medium">Change Image</span>
              </div>
              <img src="./assets/shafiq.jpg" alt="Profile" />
            </div>
          </div>
          <div className="w-[calc(100%-45.117%)] pl-6">
            <span className="text-base font-light">
              Image must be below 1024&#x2715;1024px. Use PNG , JPG or BMP
              format
            </span>
          </div>
        </div>
      </Card>
    </>
  );
}
