'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function ProgressBarProvider({ children }) {
    return (
        <>
            {children}
            <ProgressBar
                height="4px"
                color="#007bff"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    );
}