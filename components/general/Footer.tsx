import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full flex flex-col items-center justify-center mt-15 py-10 bg-black text-white">
            <h2 className="text-3xl font-semibold mb-3">Citizenz.info</h2>

            <nav className="flex items-center gap-6 mb-6">
                <Link href="/">Accueil</Link>
                <Link href="/dashboard">Dashboard</Link>
            </nav>

            <p className="text-sm">Tous droits réservés.</p>
            <p className="text-xs">
                <span className="font-semibold">Citizenz.info</span> © {new Date().getFullYear()}
            </p>
        </footer>
    )
}