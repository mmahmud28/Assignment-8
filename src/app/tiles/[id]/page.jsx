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


    return (
        <div className="min-h-screen mt-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-10">

            <div className="max-w-5xl p-5 rounded-2xl w-full bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">

                <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10 text-white">

                    {/* Image Section */}
                    <div className="group overflow-hidden rounded-2xl">
                        <Image
                            src={tile?.image}
                            alt={tile?.title}
                            width={600}
                            height={500}
                            unoptimized
                            className="w-full h-full object-cover rounded-2xl transform group-hover:scale-110 transition duration-700 ease-in-out"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="flex p-5 flex-col justify-between space-y-6">

                        {/* Title & Description */}
                        <div className="space-y-3">
                            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                                {tile?.title}
                            </h1>
                            <p className="text-white/70 text-sm leading-relaxed">
                                {tile?.description}
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-white/20"></div>

                        {/* Specifications */}
                        <div className="bg-white/10 rounded-2xl p-5 space-y-4">
                            <h2 className="text-xl font-semibold">Specifications</h2>

                            <div className="grid grid-cols-2 gap-4 text-sm">

                                <div className="bg-white/5 p-3 rounded-lg">
                                    <p className="text-white/50">Category</p>
                                    <p className="font-medium">{detailes.category}</p>
                                </div>

                                <div className="bg-white/5 p-3 rounded-lg">
                                    <p className="text-white/50">Style</p>
                                    <p className="font-medium">{detailes.style}</p>
                                </div>

                                <div className="bg-white/5 p-3 rounded-lg">
                                    <p className="text-white/50">Usage</p>
                                    <p className="font-medium">{detailes.usage}</p>
                                </div>

                                <div className="bg-white/5 p-3 rounded-lg">
                                    <p className="text-white/50">Material</p>
                                    <p className="font-medium">{detailes.material_theme}</p>
                                </div>

                                <div className="bg-white/5 p-3 rounded-lg col-span-2">
                                    <p className="text-white/50">Design Focus</p>
                                    <p className="font-medium">{detailes.design_focus}</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllTilesDetailes;