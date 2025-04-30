const Footer = () => {
    return (
        <footer className="h-32 p-14 bg-[#0a0a0a] border-t-2 border-[#28133a]">
        <div className="container flex justify-between mx-auto px-1 text-xs md:text-sm">
            <p>© 2024 Raziel Navarro</p>
            <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/razielnavarro/" target="_blank" rel="noopener noreferrer">
                <img className="w-5 h-5 md:w-7 md:h-7" src="assets/linkedin.png" alt="linkedin"></img>
                </a>
                <a href="https://github.com/razielnavarro" target="_blank" rel="noopener noreferrer">
                    <img className="w-5 h-5 md:w-7 md:h-7" src="assets/GitHubRetroWhite.png" alt="github"></img>
                </a>
            </div>
        </div>
        </footer>
    );
    }

export default Footer;