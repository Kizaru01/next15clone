import { defineQuery } from "next-sanity";


export const StartUpQuery =
    defineQuery(`*[
        _type == "startup" && defined(slug.current) && !defined($search) || category match ($search) || author->name match ($search) || title match ($search)] | order(_createdAt desc){
            _id,
            title,
            slug,
            _createdAt,
            author -> {
                _id, name, image, 
                
            },
            views,
            description,
            category,
            image
        }`);