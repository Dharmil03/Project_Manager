import {Medal } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Marketing=()=>{
    return (
        <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center flex-col">
               <div className="mb-4 flex items-center border shadow-sm
               p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
                 <Medal className="h-6 w-6
                 mr-2"></Medal>
                 best Task Manager
               </div>
               <h1 className="text-3xl md:text-6xl text-center text-neutral-700
               mb-6">
                Taskifyy helps Team smoothly
               </h1>
               <div className="text-3xl md:text-6xl bg-gradient-to-r from-pink-500 to-pin-600 text-white px-4 p-2 rounded-md
               pb-4 w-fit">
                   Work Faster
               </div>
            </div>
            <div className="text-sm md:text-xl text-neutral-400 
            mt-4 max-w-xl md:max-w-2xl text-center mx-auto">
                collaborate manage projects ,and reach new productivity
                peaks,from High rises to the home office ,the way your team
                works is unique-Accomplish it all with taskify.
            </div>
            <Button className="mt-10 "size="lg">
                <Link href="/sign-up">
                   Get Taskify for free
                </Link>
            </Button>
        </div>
    )
}

export default Marketing;