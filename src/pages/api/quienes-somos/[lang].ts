import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang;
  const locale = lang === 'pt' ? 'pt' : 'es';

  const content = locale === 'pt' ? `
<div class="text-cafeoscuro text-lg leading-relaxed">
  <p class="mb-4">
Organização latino-americana com mais de 16 anos trabalhando para fortalecer a democracia por meio de:
  </p>
  <ul class="list-disc list-inside">
    <li>Cidadania ativa e participação territorial</li>
    <li>Desenvolvimento de ferramentas digitais</li>
    <li>Investigação e ação contra ameaças à democracia</li>
    <li>Alianças estratégicas com atores locais e internacionais</li>
  </ul>
</div>` : `
<div class="text-cafeoscuro text-lg leading-relaxed">
  <p class="mb-4">
Organización latinoamericana con más de <strong>16 años</strong> trabajando por fortalecer la democracia mediante:
  </p>
  <ul class="list-disc list-inside">
    <li>Ciudadanía activa y participación territorial</li>
    <li>Desarrollo de herramientas digitales</li>
    <li>Investigación y acción frente a amenazas a la democracia</li>
    <li>Alianzas estratégicas con actores locales e internacionales</li>
  </ul>
</div>`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
};

export function getStaticPaths() {
  return [
    { params: { lang: 'es' } },
    { params: { lang: 'pt' } },
  ];
}
