"use client";
import "@/app/lib/i18n_call"
import { useTranslation } from "react-i18next";

export default function Presentation() {
    const { t } = useTranslation();

    return (
        <>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                My Portfolio
            </h1>
            <p className="mb-4">
                {t('intro.p1')}
            </p>
        </>
    );
}
