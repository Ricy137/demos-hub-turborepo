import Link from "next/link";
// import { useRouter } from "next/router";
// import cx from "clsx";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0px flex flex-row items-center justify-center w-full h-80px z-10">
      <NavItem href="/" lable="Home" />
      <NavItem href="/nft" lable="nft demo" />
    </nav>
  );
};

const NavItem: React.FC<{ href: string; lable: string }> = ({
  href,
  lable,
}) => {
  // const router = useRouter();

  return (
    <div>
      <Link
        href={href}
        className="p-[24px] flex items-center"
        // router.pathname === href &&
        //   "border-b-[1px] border-solid border-black dark:border-white"
      >
        {lable}
      </Link>
    </div>
  );
};
export default Navbar;
