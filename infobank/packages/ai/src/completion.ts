import { streamText, generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

interface CompletionOptions {
  system?: string;
  maxTokens?: number;
  temperature?: number;
}

export async function generateCompletion(
  prompt: string,
  options: CompletionOptions = {}
) {
  const { system, maxTokens = 1000, temperature = 0.7 } = options;

  const result = await generateText({
    model: openai('gpt-4o-mini'),
    system,
    prompt,
    maxTokens,
    temperature,
  });

  return result.text;
}

export async function streamCompletion(
  prompt: string,
  options: CompletionOptions = {}
) {
  const { system, maxTokens = 1000, temperature = 0.7 } = options;

  const result = await streamText({
    model: openai('gpt-4o-mini'),
    system,
    prompt,
    maxTokens,
    temperature,
  });

  return result;
}
