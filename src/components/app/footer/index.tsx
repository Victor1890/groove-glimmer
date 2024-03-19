function Footer() {

    return (
        <footer className="mt-8 pb-6 flex items-center justify-center max-w-xl mx-auto px-4 md:px-6">
            <p>
                Made by
                <a className="ml-1 underline" href="https://github.com/AlexGarrixen">
                    Victor Rosario
                </a>
            </p>
            <p className="ml-5">
                Original design by
                <a className="ml-1 underline" href="https://github.com/AlexGarrixen">
                    Alex Garrixen
                </a>
            </p>
            {/* <div className={classes.icons}>
                <a aria-label="my website" href="https://alextexis.vercel.app">
                    <LinkFill />
                </a>
                <a aria-label="x account" href="https://twitter.com/AlexGarrixen">
                    <SocialXFill />
                </a>
            </div> */}
        </footer>
    )
}

export default Footer;