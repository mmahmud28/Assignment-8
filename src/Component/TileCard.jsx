import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const TileCard = ({tileData}) => {
    console.log(tileData);
    
    return (
        <Card className=''>
            <div>
                <Image src={tileData.image} alt={tileData.name} width={200} height={200} className='w-full h-auto'/>
                <h2 className='text-lg font-bold mt-2'>{tileData.name}</h2>
                <p className='text-gray-600'>Price: ${tileData.price}</p>

            </div>
        </Card>
    );
};

export default TileCard;