import { auth, signOut } from "@/app/_lib/auth";
import NavLink from "./navlink";
import Image from "next/image";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Account", path: "/account" },
  { name: "Users", path: "/users" },
  { name: "Products", path: "/products" },
];

export default async function Navigation() {
  const session = await auth();
  const navs = [...navItems];

  if (!session?.user) navs.push({ name: "Login", path: "/login" });

  return (
    <nav className="flex items-center justify-between w-full">
      <ul className="flex items-center gap-8">
        {navs.map(({ name, path }) => (
          <li key={name} className="relative group">
            <NavLink name={name} path={path} />
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}

        {session?.user && (
          <div className="flex items-center gap-6 ml-6 border-l border-gray-300 pl-6">
            <li className="flex items-center gap-3 bg-purple-50 px-3 py-1.5 rounded-full border border-purple-100">
              <span className="text-sm font-semibold text-purple-900 hidden lg:inline">
                {session.user.name}
              </span>
              <Image
                src={session.user.image as string}
                width={36}
                height={36}
                alt="User Profile"
                className="rounded-full ring-2 ring-purple-500 ring-offset-2 hover:ring-purple-700 transition-all shadow-md"
              />
            </li>

            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/login" });
              }}
            >
              <button className="bg-red-500 text-white text-sm font-bold px-5 py-2 rounded-full hover:bg-red-600 active:scale-95 transition-all shadow-sm hover:shadow-md">
                Logout
              </button>
            </form>
          </div>
        )}
      </ul>
    </nav>
  );
}