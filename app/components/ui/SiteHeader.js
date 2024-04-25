import LogoSvg from "./LogoSvg"

export default function SiteHeader() {

    return (
        <header className="relative flex items-center justify-between py-6 px-14 z-50">
            <div className="flex items-center justify-center w-40 -ml-8">
                <LogoSvg />
            </div>
            <div className="flex items-center justify-center space-x-6 font-bold text-2xl">
                <a href="#" className="text-white">Gladsaxe</a>
                <a href="#" className="text-white">Odense</a>
                <a href="#" className="text-white">Kolding</a>
                <a href="#" className="text-white">København</a>


            </div>
        </header>
    )
}