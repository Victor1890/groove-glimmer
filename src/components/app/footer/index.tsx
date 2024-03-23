import { LinkedInFill } from "@/components/icons/social";

const Footer = () => (
    <footer className="mt-8 pb-6 flex items-center justify-between max-w-xl mx-auto px-4 md:px-6 text-{#344054}">
        <div className="flex">
            <p>
                Made by
                <a className="ml-1 underline font-bold" href="https://github.com/victor1890">
                    Victor Rosario 💫
                </a>
            </p>
            <p className="ml-5">
                Original design by
                <a className="ml-1 underline font-bold" href="https://github.com/AlexGarrixen">
                    Alex Garrixen
                </a>
            </p>

        </div>
        <div className="flex gap-4">
            <a aria-label="my linkedin" href="https://www.linkedin.com/in/victor-j-rosario-v/?locale=en_US">
                <LinkedInFill width={24} height={24} />
            </a>
        </div>
    </footer>
)

export default Footer;