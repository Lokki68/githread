import {AlertTriangle} from "lucide-react";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";

export default function NotFound() {
  return (
    <Alert className='m-4'>
      <AlertTriangle/>
      <AlertTitle>Not Found</AlertTitle>
      <AlertDescription>
        Post not found !
      </AlertDescription>
      <Link href={'/'} className={buttonVariants({variant: 'link'})}>Home</Link>
    </Alert>
  );
}
