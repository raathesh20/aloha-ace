import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface Video {
  src?: string;
  youtubeId?: string;
  title: string;
  thumbnail?: string;
}

interface VideoGalleryProps {
  videos: Video[];
}

export const VideoGallery = ({ videos }: VideoGalleryProps) => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [thumbnails, setThumbnails] = useState<Map<number, string>>(new Map());
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());

  const getYouTubeThumbnail = (youtubeId: string) => {
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  };

  // Generate thumbnails for local videos
  useEffect(() => {
    videos.forEach((video, idx) => {
      if (video.src && !video.youtubeId && !video.thumbnail && !thumbnails.has(idx)) {
        const videoElement = document.createElement('video');
        videoElement.src = video.src;
        videoElement.crossOrigin = 'anonymous';
        videoElement.preload = 'metadata';
        
        videoElement.addEventListener('loadedmetadata', () => {
          videoElement.currentTime = 0.5;
        });
        
        videoElement.addEventListener('seeked', () => {
          const canvas = document.createElement('canvas');
          canvas.width = videoElement.videoWidth;
          canvas.height = videoElement.videoHeight;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
            const thumbnailUrl = canvas.toDataURL('image/jpeg');
            setThumbnails(prev => new Map(prev).set(idx, thumbnailUrl));
          }
        });
      }
    });
  }, [videos]);

  const getThumbnailSrc = (video: Video, idx: number) => {
    if (video.thumbnail) return video.thumbnail;
    if (video.youtubeId) return getYouTubeThumbnail(video.youtubeId);
    return thumbnails.get(idx) || '';
  };

  return (
    <div className="relative">
      <Card className="overflow-hidden">
        <div className="relative aspect-video bg-black">
          {videos[playingIndex ?? 0].youtubeId ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videos[playingIndex ?? 0].youtubeId}${playingIndex !== null ? '?autoplay=1' : ''}`}
              title={videos[playingIndex ?? 0].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              className="w-full h-full"
              controls
              playsInline
              preload="metadata"
              src={videos[playingIndex ?? 0].src}
              ref={(el) => {
                if (el) videoRefs.current.set(playingIndex ?? 0, el);
              }}
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className="p-4 text-center">
          <p className="text-sm font-medium">{videos[playingIndex ?? 0].title}</p>
          <p className="text-xs text-muted-foreground mt-2">
            {(playingIndex ?? 0) + 1} / {videos.length}
          </p>
        </div>
      </Card>

      {/* Navigation Buttons */}
      {videos.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              const currentIndex = playingIndex ?? 0;
              setPlayingIndex((currentIndex - 1 + videos.length) % videos.length);
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              const currentIndex = playingIndex ?? 0;
              setPlayingIndex((currentIndex + 1) % videos.length);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {/* Thumbnail Strip */}
      {videos.length > 1 && (
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
          {videos.map((video, idx) => (
            <button
              key={idx}
              onClick={() => setPlayingIndex(idx)}
              className={`flex-shrink-0 w-32 h-20 rounded overflow-hidden border-2 transition-all relative group ${
                (playingIndex ?? 0) === idx
                  ? 'border-primary'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={getThumbnailSrc(video, idx)}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <Play className="h-6 w-6 text-white" fill="white" />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
