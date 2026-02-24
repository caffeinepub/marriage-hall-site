import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent } from '../ui/dialog';

const galleryImages = [
  {
    src: '/assets/generated/gallery-stage-1.dim_1600x1066.png',
    alt: 'Stage decoration',
    category: 'Stage',
  },
  {
    src: '/assets/file_0000000095146243a4d78766e9007d41.png',
    alt: 'Outdoor venue',
    category: 'Venue',
  },
  {
    src: '/assets/generated/gallery-entrance-1.dim_1600x1066.png',
    alt: 'Entrance area',
    category: 'Entrance',
  },
  {
    src: '/assets/generated/gallery-dining-1.dim_1600x1066.png',
    alt: 'Celebration area',
    category: 'Dining',
  },
];

const categories = ['All', ...Array.from(new Set(galleryImages.map((img) => img.category)))];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
    } else {
      setCurrentImageIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Our Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our beautiful venue through these stunning photographs
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full ${selectedCategory !== category ? 'border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground' : ''}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow border-primary/20 hover:border-primary/50"
              onClick={() => openLightbox(index)}
            >
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-5xl p-0 bg-black/95">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={() => setLightboxOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>

              <div className="flex items-center justify-center min-h-[70vh]">
                <img
                  src={filteredImages[currentImageIndex]?.src}
                  alt={filteredImages[currentImageIndex]?.alt}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </div>

              <div className="absolute inset-y-0 left-4 flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={() => navigateImage('prev')}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
              </div>

              <div className="absolute inset-y-0 right-4 flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={() => navigateImage('next')}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </div>

              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <p className="text-sm">
                  {currentImageIndex + 1} / {filteredImages.length}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
