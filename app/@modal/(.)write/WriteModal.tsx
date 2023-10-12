'use client'

import React from 'react';
import {usePathname, useRouter} from "next/navigation";
import {Dialog, DialogContent} from "@/components/ui/dialog";
import {WritePostForm, WritePostFormValues} from "@/app/write/WritePostForm";
import {User} from "@prisma/client";

export const WriteModal = ({user, createPost}: {
  user: User,
  createPost: (values: WritePostFormValues) => Promise<string>,
}) => {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <Dialog open={pathname?.includes('write')} onOpenChange={() => router.back()}>
      <DialogContent>
        <WritePostForm user={user} onSubmit={createPost}/>
      </DialogContent>
    </Dialog>
  );
};