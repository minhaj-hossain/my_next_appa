import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AiDataCard = ({ techData }) => {

    const { id, image, company, description, category, year, name
    } = techData;

    return (
        <div>
            <div className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Image */}
                <div className="h-48 overflow-hidden">
                    <Image
                        src={image}
                        alt={name}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white">{name}</h2>
                        <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full">
                            {year}
                        </span>
                    </div>

                    <p className="text-sm text-indigo-300 font-medium">{category}</p>

                    <p className="text-sm text-gray-300 line-clamp-2">{description}</p>

                    <div className="flex items-center justify-between pt-3">
                        <span className="text-xs text-gray-400">{company}</span>


                        <Link
                            href={`/${id}`}
                            className="relative z-50 inline-block px-4 py-1.5 text-sm bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white transition"
                        >
                            Explore →
                        </Link>
                    </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-indigo-500/40 transition" />
            </div>

        </div>
    );
};

export default AiDataCard;