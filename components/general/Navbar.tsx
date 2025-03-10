import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { LogInIcon, UserPlusIcon } from "lucide-react";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


export async function Navbar() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <div className=" bg-slate-50 border border-gray-100 sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3">
                <div className="flex items-center gap-6">
                    <Link href="/">
                        <h1 className="text-3xl font-bold me-4 pb-2">
                            CitizenZ<span className="text-blue-500">.info</span>
                        </h1>
                    </Link>
                    <div className="hidden md:flex items-center gap-6">
                        <Link className="hover:text-blue-500 transition-colors" href="/">Accueil</Link>
                        <Link className="hover:text-blue-500 transition-colors" href="/dashboard">Dashboard</Link>
                    </div>
                </div>

                {user ? (
                    <div className="flex items-center gap-4">
                        <p>Bienvenue { user.given_name } !</p>
                        <LogoutLink className={buttonVariants({variant: "outline"})}>
                            <LogInIcon className="w-4 h-4" />Se déconnecter
                        </LogoutLink>
                    </div>
                ): (
                    <div className="flex items-center gap-4">
                        <LoginLink className={buttonVariants()}>
                            <LogInIcon className="w-4 h-4" />Se connecter
                        </LoginLink>
                        <RegisterLink className={buttonVariants({variant: "outline"})}>
                            <UserPlusIcon className="w-4 h-4" />S'enregistrer
                        </RegisterLink>
                    </div>
                )}
            </nav>
        </div>
    );
}