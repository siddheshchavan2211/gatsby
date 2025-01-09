import { CrownIcon } from "lucide-react";
import { ModeToggle } from "./ToggleMode";

function Header() {
  return (
    <header className="flex justify-between px-4 py-2 border-b-2">
      <CrownIcon />
      <ModeToggle />
    </header>
  );
}

export default Header;
