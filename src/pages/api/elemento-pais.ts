import type { APIRoute } from 'astro';

const paisesData: Record<string, Record<string, { titulo: string; contenido: string }>> = {};

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const pais = url.searchParams.get('pais');
  const id = url.searchParams.get('id');

  if (!pais || !id) {
    return new Response(JSON.stringify({ error: 'Parámetros requeridos' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const paisData = paisesData[pais.toLowerCase()];
  
  if (!paisData || !paisData[id]) {
    return new Response(JSON.stringify({ error: 'Elemento no encontrado' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return new Response(JSON.stringify(paisData[id]), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}