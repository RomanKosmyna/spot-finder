import React from "react";
import Header from "@/src/components/Header/Header";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "@/app/venue/[venueId]/error";

export default function VenueLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header/>
      <ErrorBoundary errorComponent={Error}>
        <main>
          {children}
        </main>
      </ErrorBoundary>
    </>
  )
}