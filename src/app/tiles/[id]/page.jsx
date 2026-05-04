import Image from 'next/image';
import React from 'react';

const AllTilesDetailes = async ({ params }) => {
    const { id } = await params;

    const tiles = await fetch(
        "https://assignment-8-alpha-smoky.vercel.app/tilesCombo.json"
    );
    const tilesData = await tiles.json();

    const tile = tilesData.find((t) => t.id === id);

    const detailes = tile.details;
    console.log(detailes);

    return (
        <div className="min-h-screen mt-4 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center px-4 py-10">

            <div className="max-w-4xl p-5 w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 overflow-hidden">

                <div className="p-6 md:p-8 space-y-8 text-white">

                    <h1 className="text-3xl md:text-4xl font-bold text-center">
                        Tile Details
                    </h1>

                    <div className="overflow-hidden rounded-xl">
                        <Image
                            src={tile?.image}
                            alt={tile?.title}
                            width={600}
                            height={500}
                            unoptimized
                            className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                    </div>

                    <div className="space-y-2 text-center">
                        <p className="text-xl font-semibold">{tile?.title}</p>
                        <p className="text-white/70 text-sm">{tile?.description}</p>
                    </div>

                    <div className="bg-white/10 rounded-xl p-5 space-y-2 text-sm">
                        <h2 className="text-lg font-semibold mb-3">Specifications</h2>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllTilesDetailes;