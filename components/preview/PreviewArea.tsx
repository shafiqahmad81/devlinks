import { Card } from "../ui/card";
import ProfileInfo from "./ProfileInfo";

function PreviewArea() {
  return (
    <Card className="hidden lg:flex items-center justify-center p-10 lg:min-h-[44.5rem] lg:min-w-[24.25rem] lg:w-[40.23vw]">
      <div className="w-[19.25rem] h-[39.5rem] bg-[url('/assets/mobile-frame.svg')] bg-contain bg-top">
        <div className="mt-16 flex gap-12 flex-col items-center">
          <ProfileInfo />
        </div>
      </div>
    </Card>
  );
}

export default PreviewArea;
