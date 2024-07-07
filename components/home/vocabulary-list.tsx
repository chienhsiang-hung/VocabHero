"use client";

import { useSession } from "next-auth/react";

export default function VocabularyList() {
    const {data: session} = useSession();
    if (!session?.user?.email) {
        return;
    };
    fetch('/api/vocabularies/b');
    return (
        <>
        {/* Vacabulary block */}
        <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
          {/* card level */}
          <div className="relative col-span-1 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md md:col-span-3">
            <div className="flex items-start justify-center mt-2"></div>
          </div>
        </div>
        </>
    );
}