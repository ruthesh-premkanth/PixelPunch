import { ImageWithFallback } from './figma/ImageWithFallback';

interface LogoCardProps {
  src: string;
  name: string;
}

export function LogoCard({ src, name }: LogoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 w-48">
      <div className="flex flex-col items-center gap-3">
        <div className="h-16 w-full flex items-center justify-center">
          <ImageWithFallback 
            src={src}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-sm text-neutral-700 text-center">{name}</p>
      </div>
    </div>
  );
}
