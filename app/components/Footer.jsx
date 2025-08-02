'use client';
const Footer = () => {

    const handleDinoGuideClick = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 710,
            behavior: "smooth",
        });
    };

    return (
        <footer className="w-full bg-neutral-900 bg-opacity-50 text-slate-400 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center space-x-8">
                <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors duration-300"
                >
                    ホーム
                </a>
                <a
                    href="#"
                    onClick={handleDinoGuideClick}
                    className="hover:text-cyan-400 transition-colors duration-300"
                >
                    恐竜図鑑
                </a>
                <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors duration-300"
                >
                    利用規約
                </a>
            </div>

            <div className="max-w-7xl mx-auto mt-4 px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
                &copy; 2025 DinoVerse. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
