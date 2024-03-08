'use client'

import Image from "next/image";
import './card.css'

export default function MovieCard({movies, onClick}){
    const imageUrl = `https://image.tmdb.org/t/p/w500${movies.poster_path}`;
    const truncatedTitle = movies.title.length > 25 ? movies.title.substring(0,25) + '...' : movies.title;
    return (
        <div className="cursor-pointer" onClick={() => onClick(movies)}>
            <div className="flex w-64 h-96">
                <Image
                src={imageUrl}
                alt={truncatedTitle}
                layout="responsive"
                width={128}
                height={192}
                objectFit="cover"
                overflow="hidden"
                className="rounded-md"
                />
            </div>
            <h3 className="text-black text-lg">{truncatedTitle}</h3>
        </div>
    )
}
