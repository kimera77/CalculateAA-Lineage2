// src/ai/flows/generate-lineage2-image.ts
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

const prompt = ai.definePrompt({
  name: 'generateLineage2ImagePrompt',
  input: {schema: GenerateLineage2ImageInputSchema},
  output: {schema: GenerateLineage2ImageOutputSchema},
  prompt: `You are an AI assistant specialized in searching for relevant Lineage 2 images (Gracia Final/Interlude era).

  Given the user's query, search for an image that enhances the nostalgia and visual appeal of the calculator page.
  Return the URL of the selected image.

  Query: {{{query}}}
  `,
});

const generateLineage2ImageFlow = ai.defineFlow(
  {
    name: 'generateLineage2ImageFlow',
    inputSchema: GenerateLineage2ImageInputSchema,
    outputSchema: GenerateLineage2ImageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
