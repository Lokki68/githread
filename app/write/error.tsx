'use client' // Error components must be Client Components

import {useEffect} from 'react'
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {AlertTriangle} from "lucide-react";

export default function Error({
                                error,
                                reset,
                              }: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <Alert className='m-4'>
      <AlertTriangle/>
      <AlertTitle>Not logged</AlertTitle>
      <AlertDescription>
        You must be logged to access this page !
      </AlertDescription>
    </Alert>
  )
}