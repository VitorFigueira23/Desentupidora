import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  before: string;
  after: string;
  service: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Desentupimento de Pia",
    description: "Pia de cozinha entupida com acúmulo de resíduos",
    before: "/images/before-after-1-before.jpg",
    after: "/images/before-after-1-after.jpg",
    service: "Desentupimento de Pia"
  },
  {
    id: 2,
    title: "Desentupimento de Vaso Sanitário",
    description: "Vaso sanitário entupido com transbordamento de água",
    before: "/images/before-after-2-before.jpg",
    after: "/images/before-after-2-after.jpg",
    service: "Desentupimento de Vaso Sanitário"
  }
];

export function BeforeAfterGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const currentItem = galleryItems[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
    setSliderPosition(50);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
    setSliderPosition(50);
  };

  const handleSliderChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div className="space-y-8">
      {/* Before/After Slider */}
      <div className="relative w-full overflow-hidden rounded-lg border-2 border-primary/20 group">
        <div
          className="relative w-full h-[500px] cursor-col-resize"
          onClick={handleSliderChange}
          onMouseMove={(e) => {
            if (e.buttons === 1) handleSliderChange(e);
          }}
        >
          {/* After Image (Background) */}
          <img
            src={currentItem.after}
            alt={`${currentItem.title} - Depois`}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Before Image (Overlay) */}
          <div
            className="absolute inset-0 overflow-hidden transition-all duration-75"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={currentItem.before}
              alt={`${currentItem.title} - Antes`}
              className="w-full h-full object-cover"
              style={{ width: `${(100 / sliderPosition) * 100}%` }}
            />
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-primary transition-all duration-75 group-hover:w-2"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-background rounded-full p-2 shadow-lg">
              <div className="flex gap-1">
                <ChevronLeft className="w-4 h-4" />
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-sm font-bold uppercase">
            Antes
          </div>
          <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded text-sm font-bold uppercase">
            Depois
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-secondary/5 border border-white/10 rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">
              {currentItem.title}
            </h3>
            <p className="text-gray-300 mb-4">{currentItem.description}</p>
            <div className="inline-block">
              <span className="text-xs uppercase font-display font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                {currentItem.service}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col justify-center gap-4">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">
                Caso {currentIndex + 1} de {galleryItems.length}
              </p>
              <div className="flex gap-2 justify-center">
                {galleryItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setSliderPosition(50);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-white/20 w-2 hover:bg-white/40"
                    }`}
                    aria-label={`Ir para caso ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={handlePrevious}
                className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded font-display font-bold uppercase hover:bg-primary/90 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                Anterior
              </button>
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded font-display font-bold uppercase hover:bg-primary/90 transition-colors"
              >
                Próximo
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
