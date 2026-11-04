# Modelo 3 — Experiência visual e interativa

Landing page da campanha **“Satisfação Garantida ou Seu Dinheiro de Volta”** (Ação Promocional 2026/27), da FranceFarma Cosméticos.
É uma de três propostas criativas independentes (modelo1, modelo2, modelo3) que usam a mesma identidade oficial.

**URL publicada:** https://lucasandradeinf.github.io/modelo3/

> ⚠️ **Ambiente de demonstração.** O regulamento disponível (v02, 21/08/2026) ainda tem notas internas de revisão, e há
> divergências com a apresentação de treinamento (por exemplo, a vigência). A página mostra a faixa “versão para avaliação”
> e está com `noindex`. Veja [PENDENCIAS-APROVACAO.md](PENDENCIAS-APROVACAO.md).

## Conceito

Leve e acolhedora: abas por linha com filtro por família e ampliação de cada embalagem, jornada em etapas com as fotos oficiais, quadro “vale / não vale”, checklist de documentos e busca no FAQ.

## Identidade

Cores, selo, ícones e tom extraídos da peça-chave e da apresentação oficial: marinho `#0A1832`, azul do selo `#094982`,
azul-claro `#86C2EB`, amarelo `#FBBC42`/`#FFC800`, Inter (texto) e Source Sans 3 (títulos e selo). O sistema visual
fica em `src/shared/tokens.css` e é idêntico nos três modelos.

## Stack

Vite 6 · React 18 · TypeScript · CSS próprio · lucide-react · fontes locais via Fontsource · deploy por GitHub Actions.

```bash
npm ci
npm run dev        # http://localhost:5173/modelo3/
npm run typecheck
npm run build      # gera dist/
npm run preview    # http://localhost:4173/modelo3/
```

## Estrutura

| Caminho | Conteúdo |
|---|---|
| `src/shared/campanha.ts` | Fonte única do texto da campanha (jornada, prazos, condições, documentos, FAQ). O bloco `APROVACAO` isola o que depende de aprovação: vigência, redes e modo de demonstração. |
| `src/shared/produtos.ts` | Catálogo dos produtos participantes por linha e família, com as fotografias oficiais. |
| `src/shared/Selo.tsx` | Selo “Satisfação Garantida ou seu dinheiro de volta” em vetor, reproduzido da peça. |
| `src/shared/ui.tsx` | Logo, foto de produto, ícones da peça, FAQ acessível e hooks. |
| `src/shared/tokens.css` | Sistema visual compartilhado (cores, tipografia, espaços, bordas, sombras, botões). |
| `src/shared/RegulamentoLeitor.tsx` | Diálogo com a íntegra do regulamento e os downloads. |
| `src/App.tsx`, `src/modelo.css` | Composição e direção de arte deste modelo. |
| `public/img/` | Fotografias de produto, peça-chave, jornada, PDV e logos (WebP/PNG otimizados). |
| `public/regulamento/` | DOCX original e PDF. |

A pasta `src/shared/` é gerada a partir de `_assets/v2/shared/` da pasta de trabalho (`bash _assets/v2/sync.sh modelo3`).
O repositório é autossuficiente: todos os assets necessários estão nele.

## Publicação

`vite.config.ts` usa `base: '/modelo3/'`. O GitHub Pages usa **Source: GitHub Actions** (`.github/workflows/deploy.yml`, a
cada push na `main`). O site não coleta dados: o botão do SAC só abre o e-mail do visitante com um roteiro.
