import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";

const TileCard = ({ tileData }) => {
    return (
        <Card className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border">

            {/* Image Section */}
            <div className="relative w-full aspect-square overflow-hidden">
                <Image
                    src={tileData.image}
                    alt={tileData?.name || "Tile Image"}
                    fill
                    className="object-cover object-center"
                />

                <Chip className="absolute top-3 right-3 bg-white/90 backdrop-blur text-sm font-medium">
                    {tileData.category}
                </Chip>
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col gap-2">
                <h2 className="text-lg font-semibold line-clamp-1">
                    {tileData.name}
                </h2>

                <p className="text-gray-500 text-sm">
                    Price: <span className="font-medium text-black">${tileData.price}</span>
                </p>

                <Button
                    variant="solid"
                    className="mt-2 w-full rounded-xl bg-black text-white hover:bg-gray-800"
                >
                    View Details
                </Button>
            </div>
        </Card>
    );
};

export default TileCard;