import { AvatarIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { LuEye, LuLink } from "react-icons/lu";
import { Button } from "../ui/button";

function Header() {
  return (
    <header className=" min-w-[320px] sticky top-6 z-50 flex items-center justify-between rounded-lg bg-white py-4 px-6">
      <Link href="/">
        <Image
          src="/assets/logo.svg"
          alt="Dev links"
          width={183}
          height={40}
          className="hidden md:block"
        />
        <span className="md:hidden">
          <Image src="/assets/vector.svg" alt="vector" width={24} height={24} />
        </span>
      </Link>
      <nav className="flex items-center gap-7">
        <Button className="hidden md:inline-flex" asChild variant="ghost">
          <Link href="/">
            <LuLink className="mr-2.5" />
            Links
          </Link>
        </Button>
        <Button className="md:hidden" size="icon" asChild variant="ghost">
          <Link href="/">
            <LuLink />
          </Link>
        </Button>
        <Button className="hidden md:inline-flex" asChild variant="ghost">
          <Link href="/profile">
            <AvatarIcon className="mr-2.5 " />
            Profile Details
          </Link>
        </Button>
        <Button className="md:hidden" size="icon" asChild variant="ghost">
          <Link href="/profile">
            <AvatarIcon />
          </Link>
        </Button>
      </nav>
      <div>
        <Button className="hidden md:inline-flex" variant="outline" asChild>
          <Link href="/preview">
            <span>Preview</span>
          </Link>
        </Button>
        <Button className="md:hidden" variant="outline" size="icon" asChild>
          <Link href="/preview">
            <LuEye />
          </Link>
        </Button>
      </div>
    </header>
  );
}

export default Header;
