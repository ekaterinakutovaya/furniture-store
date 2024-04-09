import { navigation } from "../constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav className="flex gap-[40px] border-test-red">
        {navigation.map((item, index) => (
          <Link key={index} href={item.url} className="hover:text-accentColor">
            {item.title}
          </Link>
        ))}
      </nav>

      <div className="">
        <Button variant="link" size="icon">
          <SearchIcon className="h-4 w-4 search-icon-hover" />
        </Button>
      </div>
    </>
  );
};

export default Navbar;
