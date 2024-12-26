const Footer = () => {
    return (
        <footer className="h-32 p-14 bg-[#0a0a0a] border-t-2 border-[#28133a]">
        <div className="container flex justify-between mx-auto px-4 text-sm">
            <p>© 2024 Raziel Navarro</p>
            <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/raziel-navarro-3a2b8b1b2/" target="_blank" rel="noopener noreferrer">
                <img className="w-7 h-7" src="assets/linkedin.png" alt="linkedin"></img>
                </a>
                <a href="https://github.com/razielnavarro" target="_blank" rel="noopener noreferrer">
                    <img className="w-7 h-7" src="assets/GitHubRetroWhite.png" alt="github"></img>
                </a>
            </div>
        </div>
        </footer>
    );
    }

export default Footer;