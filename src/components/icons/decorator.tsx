import { SVGProps } from "react";

function SVGDecorator(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="none"
            height="81"
            viewBox="0 0 75 81"
            width="75"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M32.7002 6.80787C37.656 18.7733 29.9084 34.9035 41.3047 44.952C47.8754 50.7456 57.7286 51.9261 67.7055 51.0387"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="4"
            />
            <path
                d="M17.2605 10.443C31.298 22.2685 17.1271 43.2831 30.8944 55.4221C40.2347 63.6577 56.2077 62.5718 69.7404 59.4751"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="4"
            />
            <path
                d="M2 15.5912C4.39599 16.5454 6.58754 17.7868 8.47393 19.376C22.5114 31.2014 8.34054 52.216 22.1078 64.355C34.1978 75.0151 57.4006 70.0575 72.0396 65.3369"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="4"
            />
        </svg>
    );
}

export default SVGDecorator;