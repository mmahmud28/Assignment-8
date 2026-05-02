import React from 'react';
import TileCard from './TileCard';

const TopTiles = async () => {
    const res = await fetch('https://assignment-8-alpha-smoky.vercel.app/data.json')
    const data = await res.json();
    const topTiles = data.slice(0, 8);    
    
    return (
        <div>
            <h1>Top Sell Tiles</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    topTiles.map(tile => (
                        <TileCard key={tile.id} tileData={tile} />
                    ))
                }
            </div>
        </div>
    );
};

export default TopTiles;