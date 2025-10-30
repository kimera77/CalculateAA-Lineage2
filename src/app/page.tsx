import Image from 'next/image';
import { Calculator } from '@/components/calculator';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const bgImage = PlaceHolderImages.find((img) => img.id === 'l2-bg');
  const imageUrl = bgImage?.imageUrl ?? 'https://picsum.photos/seed/1/1920/1080';
  const imageHint = bgImage?.imageHint ?? 'fantasy landscape';

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start pt-8 p-4 overflow-hidden">
      <div className="fixed inset-0">
        <Image
          src={imageUrl}
          alt="Lineage 2 Catacombs Background"
          fill
          className="object-cover"
          data-ai-hint={imageHint}
          priority
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-wider" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                CALCULATE AA
            </h1>
        </div>
        <Calculator />
      </div>
    </main>
  );
}
