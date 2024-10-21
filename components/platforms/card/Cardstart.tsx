import { Card } from "@/components/ui/card";
import { TabIcon } from "./cardIcon/Tab";

export function CardStartForm() {
  return (
    <Card className=" w-full bg-[#FAFAFA] mt-6 py-20 flex items-center flex-col text-center">
      <TabIcon />
      <h2 className="mb-6 text-4xl font-semibold">Let’s get you started</h2>
      <p className="max-w-[688px] text-[#737373] text-base">
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </Card>
  );
}
