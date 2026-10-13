# ✈️ Nossa Aventura pela Europa

Landing page da nossa viagem de férias pela Europa, com contagem regressiva até a partida, o roteiro completo e os pontos altos que não podemos perder.

## 🎯 Objetivo

Este projeto nasceu para celebrar e organizar a viagem de férias que vou fazer com a minha esposa em **novembro de 2026**. A ideia é ter um lugar bonito e simples para:

- **Acompanhar a contagem regressiva** até a partida, em **19/11/2026 às 20h55**, saindo de Curitiba;
- **Visualizar o roteiro** parada por parada;
- **Lembrar dos pontos altos** que queremos viver em cada destino;
- **Compartilhar** a empolgação com família e amigos.

### ⭐ Pontos altos

| Destino         | Ponto alto                           |
| --------------- | ------------------------------------ |
| Londres         | Tower Bridge, Stamford Bridge        |
| Londres → Paris | Eurostar (trem pelo Canal da Mancha) |
| Paris           | Torre Eiffel                         |
| Bélgica         | Bruxelas (Grand-Place) e Brugge      |
| Portugal        | Lisboa e Nazaré                      |

## 🛠️ Tecnologias

| Tecnologia                                | Uso                                                   |
| ----------------------------------------- | ----------------------------------------------------- |
| [React 19](https://react.dev)             | Interface com componentes                             |
| [Vite 8](https://vite.dev)                | Servidor de desenvolvimento e build                   |
| [Tailwind CSS 4](https://tailwindcss.com) | Estilização, via plugin `@tailwindcss/vite`           |
| JavaScript (ESM)                          | Lógica da aplicação (sem TypeScript)                  |
| ESLint                                    | Padronização do código                                |
| Google Fonts                              | Fontes _Playfair Display_ (títulos) e _Inter_ (texto) |
| Wikimedia Commons                         | Fotos dos pontos altos, de uso livre                  |

## 📁 Estrutura

```
viagem-lp/
├── index.html               # HTML base, fontes e metadados
├── vite.config.js           # Vite com os plugins React e Tailwind
├── public/                  # Arquivos estáticos (favicon)
└── src/
    ├── main.jsx             # Ponto de entrada do React
    ├── App.jsx              # Monta as seções da página
    ├── index.css            # Import do Tailwind e tema (fontes)
    ├── data/
    │   └── trip.js          # Data da partida, roteiro e pontos altos
    ├── hooks/
    │   └── useCountdown.js  # Lógica da contagem regressiva
    └── components/
        ├── Hero.jsx         # Título principal e contador
        ├── Countdown.jsx    # Blocos de dias, horas, minutos e segundos
        ├── Itinerary.jsx    # Linha do tempo do roteiro
        ├── Highlights.jsx   # Cartões com as fotos dos pontos altos
        └── Footer.jsx       # Rodapé
```

## ⚙️ Como funciona

### Contagem regressiva

A data da partida fica em `src/data/trip.js`, com o fuso de Curitiba (UTC-3), para a contagem ficar certa em qualquer fuso horário:

```js
export const DEPARTURE_DATE = new Date("2026-11-19T20:55:00-03:00");
```

O hook `useCountdown` calcula a cada segundo quanto tempo falta e devolve `days`, `hours`, `minutes`, `seconds` e `isOver`. Quando a data chega, o intervalo é encerrado e a página passa a mostrar **"Boa viagem! ✈️"**.

### Conteúdo separado da interface

Todo o conteúdo da página (cidades, descrições, fotos e créditos) fica em `src/data/trip.js`. Para mudar um texto, adicionar uma parada ou trocar uma foto, basta editar esse arquivo, sem mexer nos componentes.

Cada ponto alto segue este formato:

```js
{
  title: "Torre Eiffel",
  location: "Paris",
  description: "Ver a torre brilhar à noite é obrigatório.",
  image: "https://upload.wikimedia.org/...",
  credit: { author: "Benh Lieu Song", license: "Domínio público", source: "https://commons.wikimedia.org/..." },
}
```

### Imagens

As fotos vêm do **Wikimedia Commons** e são carregadas direto dos servidores da Wikimedia, com `loading="lazy"`. Cada foto mostra o autor e a licença, como as licenças Creative Commons exigem.

## 🚀 Como rodar

**Pré-requisito:** Node.js 20.19+ ou 22.12+.

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento (http://localhost:5173)
npm run dev

# Gerar build de produção (pasta dist/)
npm run build

# Visualizar o build localmente
npm run preview

# Verificar o código com ESLint
npm run lint
```

---
