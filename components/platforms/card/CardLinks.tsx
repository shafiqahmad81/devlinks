import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FaceBookIcon from "./cardIcon/FaceBook";
import GitIcn from "./cardIcon/GithubIcon";
import CardIcon from "./cardIcon/Icon";
import LinkedineIcon from "./cardIcon/Linkedin";
import TwitterIcon from "./cardIcon/Twitter";
import YouTubeIcon from "./cardIcon/YouTube";

export function CardWithForm() {
  return (
    <Card className=" w-full bg-[#FAFAFA] mt-6 ">
      <CardHeader className="flex-row items-center justify-between space-y-0 text-[#737373] text-xl">
        <button>
          <CardIcon />
        </button>
        <CardTitle className="grow ml-3 font-bold">Link #1</CardTitle>
        <button>Remove</button>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Platform</Label>
              <Select>
                <SelectTrigger
                  className="bg-white pl-8 relative"
                  id="framework"
                >
                  <SelectValue placeholder="Choose A Platform" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 flex h-3.5 w-3.5 items-center justify-center">
                      <GitIcn />
                    </span>
                    Github
                  </SelectItem>
                  <SelectItem value="youtube">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 flex h-3.5 w-3.5 items-center justify-center">
                      <YouTubeIcon />
                    </span>
                    Youtube
                  </SelectItem>
                  <SelectItem value="facebook">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 flex h-3.5 w-3.5 items-center justify-center">
                      <FaceBookIcon />
                    </span>
                    Facebook
                  </SelectItem>
                  <SelectItem value="twitter">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 flex h-3.5 w-3.5 items-center justify-center">
                      <TwitterIcon />
                    </span>
                    Twitter
                  </SelectItem>
                  <SelectItem value="linkdine">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 flex h-3.5 w-3.5 items-center justify-center">
                      <LinkedineIcon />
                    </span>
                    Linkdine
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Link</Label>
              <Input
                className="bg-white relative"
                id="name"
                placeholder="&#128279; https://www.github.com/benwright"
              />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
