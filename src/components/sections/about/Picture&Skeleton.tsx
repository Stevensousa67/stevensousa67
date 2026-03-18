'use client';
import { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

export default function PictureAndSkeleton() {
    const baseUrl = `/ss-pictures/`;
    const imageSrc = `${baseUrl}Steven Sousa.jpeg`;
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
        <div className="relative w-40 h-40 rounded-full">
            {(!isImageLoaded) && (<Skeleton className="w-40 h-40 rounded-full absolute inset-0 z-0" />)}
            <Avatar className="relative z-10 w-40 h-40 rounded-full overflow-hidden">
                <AvatarImage
                    src={imageSrc}
                    alt="Steven Sousa"
                    onLoad={() => setIsImageLoaded(true)}
                    className={`object-cover w-full h-full object-[center_top] transition-opacity duration-500 ease-in-out ${!isImageLoaded ? 'opacity-0' : 'opacity-100'}`}
                />
            </Avatar>
        </div>
    );
}