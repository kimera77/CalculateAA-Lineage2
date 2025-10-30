'use server';
/**
 * @fileOverview An image generation AI agent that searches for relevant Lineage 2 images.
 *
 * - generateLineage2Image - A function that handles the image search and selection process.
 * - GenerateLineage2ImageInput - The input type for the generateLineage2Image function.
 * - GenerateLineage2ImageOutput - The return type for the generateLineage2Image function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLineage2ImageInputSchema = z.object({
  query: z.string().describe('A search query for Lineage 2 images.'),
});
export type GenerateLineage2ImageInput = z.infer<typeof GenerateLineage2ImageInputSchema>;

const GenerateLineage2ImageOutputSchema = z.object({
  imageUrl: z.string().describe('URL of the selected Lineage 2 image.'),
});
export type GenerateLineage2ImageOutput = z.infer<typeof GenerateLineage2ImageOutputSchema>;

export async function generateLineage2Image(input: GenerateLineage2ImageInput): Promise<GenerateLineage2ImageOutput> {
  return generateLineage2ImageFlow(input);
}

const generateLineage2ImageFlow = ai.defineFlow(
  {
    name: 'generateLineage2ImageFlow',
    inputSchema: GenerateLineage2ImageInputSchema,
    outputSchema: GenerateLineage2ImageOutputSchema,
  },
  async input => {
    // This flow is not currently in use, but kept for potential future use.
    // It is superseded by a static image defined in `src/lib/placeholder-images.json`.
    return {
      imageUrl: 'https://picsum.photos/seed/l2catacombs/1920/1080'
    };
  }
);
