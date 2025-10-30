import Image from 'next/image';
import { Calculator } from '@/components/calculator';
import { generateLineage2Image } from '@/ai/flows/generate-lineage2-image';
import placeholderData from '@/lib/placeholder-images.json';

export default async function Home() {
  let imageUrl = placeholderData.placeholderImages[0]?.imageUrl || 'https://picsum.photos/seed/l2bg/1920/1080';
  let imageHint = placeholderData.placeholderImages[0]?.imageHint || 'lineage2 landscape';

  try {
    const response = await generateLineage2Image({ query: 'Lineage 2 Gracia Final Interlude wallpaper nostalgia' });
    if (response.imageUrl) {
      imageUrl = response.imageUrl;
      imageHint = 'Lineage 2';
    }
  } catch (error) {
    console.error("Failed to generate AI image, using fallback.", error);
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4 overflow-hidden">
      <div className="fixed inset-0">
        <Image
          src={imageUrl}
          alt="Lineage 2 Background"
          fill
          className="object-cover"
          data-ai-hint={imageHint}
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-8">
        <div className="flex flex-col items-center space-y-2">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-wider" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                AdenaCalc L2
            </h1>
            <p className="text-sm md:text-base text-foreground/80">Calculate your Ancient Adena yield from Seal Stones</p>
        </div>
        <Calculator />
      </div>
    </main>
  );
}
