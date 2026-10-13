// Saída de Curitiba (UTC-3) em 19/11/2026 às 20:55
export const DEPARTURE_DATE = new Date("2026-11-19T20:55:00-03:00");

export const itinerary = [
  {
    city: "Curitiba",
    country: "Brasil",
    flag: "🇧🇷",
    description: "Partida às 20h55 rumo à Europa.",
    type: "partida",
  },
  {
    city: "Lisboa",
    country: "Portugal",
    flag: "🇵🇹",
    description: "Conexão no caminho para Londres.",
    type: "conexão",
  },
  {
    city: "Londres",
    country: "Inglaterra",
    flag: "🇬🇧",
    description: "Tower Bridge, Stamford Bridge e muito chá das cinco.",
    type: "destino",
  },
  {
    city: "Paris",
    country: "França",
    flag: "🇫🇷",
    description: "Cidade Luz, croissants e a Torre Eiffel.",
    type: "destino",
  },
  {
    city: "Bruxelas",
    country: "Bélgica",
    flag: "🇧🇪",
    description: "Waffles, chocolates e a Grand-Place.",
    type: "destino",
  },
  {
    city: "Brugge",
    country: "Bélgica",
    flag: "🇧🇪",
    description: "Canais medievais e ruas de conto de fadas.",
    type: "destino",
  },
  {
    city: "Lisboa",
    country: "Portugal",
    flag: "🇵🇹",
    description: "Pastéis de nata, elétricos e um bate-volta a Nazaré.",
    type: "destino",
  },
  {
    city: "Londres",
    country: "Inglaterra",
    flag: "🇬🇧",
    description: "Último capítulo da aventura.",
    type: "retorno",
  },
];

export const highlights = [
  {
    title: "Tower Bridge",
    location: "Londres",
    description: "O cartão-postal vitoriano sobre o Tâmisa, com passarela de vidro no alto.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Tower_Bridge_at_Dawn.jpg/960px-Tower_Bridge_at_Dawn.jpg",
    credit: { author: "Fuzzypiggy", license: "CC BY-SA 3.0", source: "https://commons.wikimedia.org/wiki/File:Tower_Bridge_at_Dawn.jpg" },
  },
  {
    title: "Stamford Bridge",
    location: "Londres",
    description: "A casa do Chelsea — um dia de futebol inglês de verdade.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/London_Stamford_Bridge.jpg/960px-London_Stamford_Bridge.jpg",
    credit: { author: "Arne Müseler", license: "CC BY-SA 3.0 DE", source: "https://commons.wikimedia.org/wiki/File:London_Stamford_Bridge.jpg" },
  },
  {
    title: "Eurostar",
    location: "Londres → Paris",
    description: "Atravessando o Canal da Mancha por baixo do mar, de trem.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Eurostar_at_St_Pancras_Jan_2008.jpg/960px-Eurostar_at_St_Pancras_Jan_2008.jpg",
    credit: { author: "Purple", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Eurostar_at_St_Pancras_Jan_2008.jpg" },
  },
  {
    title: "Torre Eiffel",
    location: "Paris",
    description: "Ver a torre brilhar à noite é obrigatório.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/960px-Tour_Eiffel_Wikimedia_Commons.jpg",
    credit: { author: "Benh Lieu Song", license: "Domínio público", source: "https://commons.wikimedia.org/wiki/File:Tour_Eiffel_Wikimedia_Commons.jpg" },
  },
  {
    title: "Bélgica",
    location: "Bruxelas & Brugge",
    description: "Waffles, chocolates, cervejas e os canais encantados de Brugge.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Grand-Place%2C_Brussels_-_panorama%2C_June_2018.jpg/960px-Grand-Place%2C_Brussels_-_panorama%2C_June_2018.jpg",
    credit: { author: "Celuici", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Grand-Place%2C_Brussels_-_panorama%2C_June_2018.jpg" },
  },
  {
    title: "Lisboa",
    location: "Portugal",
    description: "Miradouros, o elétrico 28 e pastéis de Belém quentinhos.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Lisboa_-_Portugal_%2852597836992%29.jpg/960px-Lisboa_-_Portugal_%2852597836992%29.jpg",
    credit: { author: "Vitor Oliveira", license: "CC BY-SA 2.0", source: "https://commons.wikimedia.org/wiki/File:Lisboa_-_Portugal_%2852597836992%29.jpg" },
  },
  {
    title: "Nazaré",
    location: "Portugal",
    description: "As ondas gigantes mais famosas do mundo, vistas do Forte de São Miguel.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/La_grande_plage_de_Nazar%C3%A9_-_panoramio_%2820%29.jpg/960px-La_grande_plage_de_Nazar%C3%A9_-_panoramio_%2820%29.jpg",
    credit: { author: "Mister No", license: "CC BY 3.0", source: "https://commons.wikimedia.org/wiki/File:La_grande_plage_de_Nazar%C3%A9_-_panoramio_%2820%29.jpg" },
  },
];
