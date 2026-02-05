import React from "react";

import linkedinLogo from "../assets/linkedin-svgrepo-com.svg";
import instaLogo from "../assets/insta_svg.svg";

const ICON_SIZE = 24;

/* ================= FACEBOOK ================= */
export const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        viewBox="0 0 36 36"
        width={ICON_SIZE}
        height={ICON_SIZE}
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
        className={className}
    >
        <path
            d="M36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 26.9853 6.57962 34.4257 15.1875 35.7801V23.201H10.6171V18H15.1875V14.0347C15.1875 9.53063 17.8687 7.02752 21.9754 7.02752C23.9423 7.02752 26 7.37899 26 7.37899V11.8021H23.7317C21.4984 11.8021 20.8031 13.1879 20.8031 14.61V18H25.7909L24.993 23.201H20.8031V35.7801C29.411 34.4257 36 26.9853 36 18Z"
            fill="#1877F2"
        />
        <path
            d="M24.993 23.201L25.7909 18H20.8031V14.61C20.8031 13.1879 21.4984 11.8021 23.7317 11.8021H26V7.37899C26 7.37899 23.9423 7.02752 21.9754 7.02752C17.8687 7.02752 15.1875 9.53063 15.1875 14.0347V18H10.6171V23.201H15.1875V35.7801C16.1136 35.9257 17.0544 36 18 36C18.9456 36 19.8864 35.9257 20.8125 35.7801V23.201H24.993Z"
            fill="white"
        />
    </svg>
);

/* ================= INSTAGRAM ================= */
export const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img
        src={instaLogo}
        alt="Instagram"
        width={ICON_SIZE + 4}
        height={ICON_SIZE + 4}
        style={{
            display: "block",
            objectFit: "contain",
        }}
        className={className}
    />
);

/* ================= YOUTUBE ================= */
export const YouTubeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        viewBox="0 0 24 24"
        width={ICON_SIZE}
        height={ICON_SIZE}
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
        className={className}
    >
        <path
            d="M21.582 5.093C21.328 4.141 20.582 3.395 19.63 3.141C17.906 2.68 12 2.68 12 2.68C12 2.68 6.09401 2.68 4.37001 3.141C3.41801 3.395 2.67201 4.141 2.41801 5.093C1.95801 6.817 1.95801 10.417 1.95801 10.417C1.95801 10.417 1.95801 14.017 2.41801 15.741C2.67201 16.693 3.41801 17.439 4.37001 17.693C6.09401 18.154 12 18.154 12 18.154C12 18.154 17.906 18.154 19.63 17.693C20.582 17.439 21.328 16.693 21.582 15.741C22.042 14.017 22.042 10.417 22.042 10.417C22.042 10.417 22.042 6.817 21.582 5.093Z"
            fill="#FF0000"
        />
        <path d="M10 7.5L15 10.5L10 13.5V7.5Z" fill="white" />
    </svg>
);

/* ================= LINKEDIN ================= */
export const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img
        src={linkedinLogo}
        alt="LinkedIn"
        width={ICON_SIZE}
        height={ICON_SIZE}
        style={{
            display: "block",
            objectFit: "contain",
        }}
        className={className}
    />
);

/* ================= TIKTOK ================= */
export const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        viewBox="0 0 640 640"
        width={ICON_SIZE}
        height={ICON_SIZE}
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
        className={className}
    >
        <rect width="640" height="640" rx="100" fill="white" />
        <path
            d="M544.5 273.9C500.5 274 457.5 260.3 421.7 234.7V413.4C421.7 446.5 411.6 478.8 392.7 506C373.8 533.2 347.1 554 316.1 565.6C285.1 577.2 251.3 579.1 219.2 570.9C187.1 562.7 158.3 545 136.5 520.1C114.7 495.2 101.2 464.1 97.5 431.2C93.8 398.3 100.4 365.1 116.1 336C131.8 306.9 156.1 283.3 185.7 268.3C215.3 253.3 248.6 247.8 281.4 252.3V342.2C266.4 337.5 250.3 337.6 235.4 342.6C220.5 347.6 207.5 357.2 198.4 369.9C189.3 382.6 184.4 398 184.5 413.8C184.6 429.6 189.7 444.8 199 457.5C208.3 470.2 221.4 479.6 236.4 484.4C251.4 489.2 267.5 489.2 282.4 484.3C297.3 479.4 310.4 469.9 319.6 457.2C328.8 444.5 333.8 429.1 333.8 413.4V64H421.8C421.7 71.4 422.4 78.9 423.7 86.2C426.8 102.5 433.1 118.1 442.4 131.9C451.7 145.7 463.7 157.5 477.6 166.5C497.5 179.6 520.8 186.6 544.6 186.6V274Z"
            fill="#000000"
        />
    </svg>
);

/* ================= GOOGLE MAPS ================= */
export const MapsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        viewBox="0 0 24 24"
        width={ICON_SIZE}
        height={ICON_SIZE}
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
        className={className}
    >
        <path d="M12 3C8.1 3 5 6.1 5 10C5 14.5 12 22 12 22C12 22 19 14.5 19 10C19 6.1 15.9 3 12 3Z" fill="#EA4335" />
        <circle cx="12" cy="10" r="3" fill="#4285F4" />
    </svg>
);
