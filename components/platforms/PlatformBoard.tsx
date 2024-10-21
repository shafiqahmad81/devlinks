import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AddNew from "./AddNew";
import { CardWithForm } from "./card/CardLinks";
import { CardStartForm } from "./card/Cardstart";

function PlatformBoard() {
  return (
    <>
      <Card className="grow inline-flex flex-col ">
        <CardHeader className="px-10">
          <CardTitle className="font-bold text-2xl md:text-4xl text-heading mb-3">
            Customize your links
          </CardTitle>
          <CardDescription className="mb-10">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </CardDescription>
        </CardHeader>
        {/* <p className="mb-10">Add your details to create a personal touch to your profile.</p> */}
        <CardContent className="grow px-10">
          <AddNew />
          <CardWithForm />
          <CardWithForm />
          <CardStartForm />
        </CardContent>
        <CardFooter className="flex justify-end px-10 pt-6 border-t">
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default PlatformBoard;
