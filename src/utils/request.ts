export async function requestBodyToJson<T>(body) {
  return await (new Response(body).json() as T);
}
