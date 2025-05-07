import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

async function streamToBuffer(
  stream: ReadableStream<Uint8Array>
): Promise<Buffer> {
  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];
  let done = false;

  while (!done) {
    const { value, done: readerDone } = await reader.read();
    if (value) chunks.push(value);
    done = readerDone;
  }

  return Buffer.concat(chunks);
}

export async function generateAnime(imageUrl: string): Promise<Buffer> {
  const output = await replicate.run(
    'catacolabs/cartoonify:f109015d60170dfb20460f17da8cb863155823c85ece1115e1e9e4ec7ef51d3b',
    {
      input: {
        image: imageUrl,
        seed: 2862431,
      },
    }
  );

  console.log('hey output', output);
  if (output instanceof ReadableStream) {
    return streamToBuffer(output as ReadableStream<Uint8Array>);
  }

  let imageUrl2;
  if (Array.isArray(output)) {
    imageUrl2 = output[0];
  } else if (typeof output === 'string') {
    imageUrl2 = output;
  } else {
    throw new Error('Unexpected output format from Replicate API');
  }

  const response = await fetch(imageUrl2);
  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${response.statusText}`);
  }

  const imageStream = response.body as ReadableStream<Uint8Array>;
  return streamToBuffer(imageStream);
}
