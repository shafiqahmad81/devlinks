import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormInput } from "./Form";
import { LogoInfo } from "./Logo";

function ProfileDetails() {
  return (
    <Card className="grow inline-flex flex-col">
      <CardHeader className="px-10">
        <CardTitle className="font-bold text-2xl md:text-4xl text-heading mb-3">
          Profile details
        </CardTitle>
        <CardDescription className="mb-10">
          Add your details to create a personal touch to your profile.
        </CardDescription>
      </CardHeader>
      <CardContent className="grow px-10">
        <LogoInfo />
        <FormInput />
      </CardContent>
      <CardFooter className="flex justify-end px-10 pt-6 border-t">
        <Button> Save</Button>
      </CardFooter>
    </Card>
  );
}
export default ProfileDetails;
