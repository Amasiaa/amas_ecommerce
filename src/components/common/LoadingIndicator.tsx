"use client";

import React from 'react'
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

function LoadingIndicator() {
    return (
        <ProgressBar height='3px' color='#B88E2F' options={{ showSpinner: true }} />
    )
}

export default LoadingIndicator