"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="border-bbackdrop-blur-md bg-white/20 sticky ">
            <nav className="flex justify-between  items-center py-3 max-w-7xl mx-auto w-full px-3">


                <div className="flex gap-2 items-center">
                    <div className="grid grid-cols-2 gap-0.5 p-1rounded-md">
                        <Image
                            src={"/logo.png"}
                            alt="TilesCanvas Logo"
                            width={80}
                            height={80}
                            className="rounded-sm justify-center"
                        />
                    </div>
                    <h3 className="font-extrabold text-3xl tracking-tight">
                        Tiles<span className="text-orange-500">Canvas</span>
                    </h3>
                </div>


                <ul className="flex items-center gap-6 text-sm font-medium">
                    <li>
                        <Link href={"/"} className="hover:text-orange-500 transition">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={"/explore"} className="hover:text-orange-500 transition">
                            Explore Tiles
                        </Link>
                    </li>
                    <li>
                        <Link href={"/collections"} className="hover:text-orange-500 transition">
                            Collections
                        </Link>
                    </li>

                    <li>
                        <Link href={"/pricing"} className="hover:text-orange-500 transition">
                            Pricing
                        </Link>
                    </li>
                </ul>


                <div className="flex items-center gap-3 text-sm">
                    <Link
                        href={"/signin"}
                        className="px-4 py-1.5 text-white hover:text-orange-500 rounded-md border hover:bg-gray-100 transition"
                    >
                        Sign In
                    </Link>

                </div>

            </nav>
        </div>
    );
};

export default Navbar;