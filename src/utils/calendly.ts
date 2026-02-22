import { siteConfig } from '../config/site';

// Calendly popup utility
export const openCalendlyPopup = () => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
        (window as any).Calendly.initPopupWidget({
            url: siteConfig.contact.calendly
        });
    }
};

// Type declaration for Calendly
declare global {
    interface Window {
        Calendly: {
            initPopupWidget: (options: { url: string }) => void;
            initBadgeWidget: (options: {
                url: string;
                text: string;
                color: string;
                textColor: string;
                branding: boolean
            }) => void;
        };
    }
}

export { };
