
import { useState } from "react";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "/lovable-uploads/79a77a7e-4f65-4732-9b65-62472e4baa86.png",
      alt: "Tarn performing live with vibrant stage lights"
    },
    {
      src: "/lovable-uploads/da50e92a-5060-4927-a807-c1424482be1a.png",
      alt: "Tarn with guitar in natural outdoor setting"
    },
    {
      src: "/lovable-uploads/92a53784-59fa-46fc-9e46-6e94ae8b813a.png",
      alt: "Tarn playing guitar in autumn landscape"
    },
    {
      src: "/lovable-uploads/a21c2ac9-7c7f-44fb-a4c1-caf2113fb686.png",
      alt: "Black and white artistic photo of Tarn with guitar"
    },
    {
      src: "/lovable-uploads/be4d762c-2049-41c3-a8f4-b16b37295c20.png",
      alt: "Tarn performing live at venue"
    },
    {
      src: "/lovable-uploads/57c035f8-3cab-4765-a770-cbb8dbd8b6d8.png",
      alt: "Tarn performing with colorful stage lighting"
    },
    {
      src: "/lovable-uploads/62fe06c6-97bd-4126-8848-50c4e3c118eb.png",
      alt: "Black and white portrait of Tarn with guitar"
    }
  ];

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Photo Gallery
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">View Full Size</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img 
                src={selectedImage}
                alt="Selected photo"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
