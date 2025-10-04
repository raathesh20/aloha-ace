import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  src: string;
  caption: string;
  orientation?: 'horizontal' | 'vertical';
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <>
      {/* Slider */}
      <div className="relative">
        <div className="overflow-hidden rounded-lg">
          <div className="relative aspect-video bg-muted">
            <img
              src={images[selectedIndex ?? 0].src}
              alt={images[selectedIndex ?? 0].caption}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              {images[selectedIndex ?? 0].caption}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              {(selectedIndex ?? 0) + 1} / {images.length}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            const currentIndex = selectedIndex ?? 0;
            setSelectedIndex((currentIndex - 1 + images.length) % images.length);
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            const currentIndex = selectedIndex ?? 0;
            setSelectedIndex((currentIndex + 1) % images.length);
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Thumbnail Strip */}
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
          {images.map((image, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`flex-shrink-0 w-24 h-16 rounded overflow-hidden border-2 transition-all ${
                (selectedIndex ?? 0) === idx
                  ? 'border-primary'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

    </>
  );
};
