import Image from "next/image";

const AllTiles = async () => {
  

  const photos = await fetch("https://assignment-8-alpha-smoky.vercel.app/data.json");
  const data = await photos.json();


  return (
    <div className="p-4">
     <div>
        {
            data.map((photo) => (
                <div key={photo.id} className="mb-4 p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border rounded">
                    <Image src={photo.image} alt={photo.title} width={600} height={400} />
                    <p className="text-xl text-yellow-300">{photo.title}</p>
                </div>
            ))
        }
     </div>
    </div>
  );
};

export default AllTiles;