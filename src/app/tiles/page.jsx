import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const AllTiles = async () => {
  const photos = await fetch(
    "https://assignment-8-alpha-smoky.vercel.app/tilesCombo.json"
  );

  const data = await photos.json();

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {data.map((photo) => {
          console.log(photo.image);

          return (
            <div
              key={photo.id}
              className="mb-4 p-5 border rounded shadow space-y-4"
            >
              <Image
                src={photo.image}
                alt={photo.title}
                width={400}
                height={300}
                className="w-full h-auto rounded"
                unoptimized
              />

              <div className="p-2">
                <h2 className="text-xl font-bold mb-2">
                  {photo.title}
                </h2>

                <p className="text-gray-600">
                  {photo.details?.style}
                </p>

                <p className="text-sm text-gray-500">
                  {photo.description}
                </p>
              </div>

              <div className="flex justify-end">
                <Link href={`/all-tiles/${photo.id}`}>
                  <Button variant="primary">View Details</Button>
                </Link>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default AllTiles;