import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext<{
    lang: string;
    handleChangeLang: (newLang: string) => void;
} | undefined>(undefined);

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [lang, setLang] = useState<string>("fr");

    const handleChangeLang = (newLang: string) => {
        setLang(newLang);
    };

    return (
        <LanguageContext.Provider value={{ lang, handleChangeLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

const useLanguage = () => {
    const context = useContext(LanguageContext)

    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }

    return context

}

export { LanguageProvider, useLanguage }