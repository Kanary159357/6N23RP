import { APIRoute } from "astro";

export const post: APIRoute = async ({ params, request }) => {
  const a = request.body;
  const buff = await streamToArrayBuffer(a);
  const text = new TextDecoder().decode(buff);
  const bodyObject = JSON.parse(text);
  return {
    body: JSON.stringify({ message: "This was a GET" }),
  };
};

export async function streamToArrayBuffer(
  stream: ReadableStream<Uint8Array>
): Promise<Uint8Array> {
  let result = new Uint8Array(0);
  const reader = stream.getReader();
  while (true) {
    // eslint-disable-line no-constant-condition
    const { done, value } = await reader.read();
    if (done) {
      break;
    }

    const newResult = new Uint8Array(result.length + value.length);
    newResult.set(result);
    newResult.set(value, result.length);
    result = newResult;
  }
  return result;
}
