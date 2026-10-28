# Modelo 3 — Confiança, Cuidado e Transparência

Landing page da campanha **“Satisfação Garantida ou Seu Dinheiro de Volta”**, da FranceFarma Cosméticos.
Esta é uma de três propostas criativas independentes (modelo1, modelo2, modelo3) para avaliação da equipe de marketing.

**URL publicada:** https://lucasandradeinf.github.io/modelo3/

> ⚠️ **Ambiente de demonstração.** O regulamento disponível (v02, 21/08/2026) ainda tem notas internas de revisão e
> pontos em aberto. A página mostra uma faixa de “versão para avaliação” e está com `noindex`. Antes de divulgar,
> veja [PENDENCIAS-APROVACAO.md](PENDENCIAS-APROVACAO.md).

## Conceito e direção de arte

Campanha humana e acolhedora, centrada na relação de confiança. Tons creme, sálvia e blush, com Fraunces (títulos) e Nunito Sans (texto). Ilustrações vetoriais originais de pessoas diversas em autocuidado convivem com as embalagens reais. A assinatura do modelo é a **jornada**: uma linha tracejada que liga as seis etapas, um quadro “o que vale / o que não vale” e um checklist de documentos que funciona só na tela do visitante (não envia nem guarda nada).

## Conteúdo

Hero com logo oficial, título, subtítulo e dois CTAs · A garantia (benefício e limites) · Como funciona (6 etapas, com cláusulas) ·
Produtos participantes (Anexo I) · Condições principais · Documentos necessários · CTA para o SAC (`mailto:sac@francefarma.com.br`) ·
FAQ (15 perguntas) · Regulamento completo (leitura no site, PDF e DOCX original) · Rodapé.

O site é estático. Ele **não** coleta, envia ou armazena dados pessoais: o botão do SAC apenas abre o programa de e-mail
do visitante com um roteiro do que enviar.

## Stack

Vite 6 · React 18 · TypeScript · CSS próprio (sem framework) · lucide-react (ícones) · fontes locais via Fontsource.
Deploy por GitHub Actions para o GitHub Pages.

## Executar localmente

```bash
npm ci
npm run dev        # http://localhost:5173/modelo3/
```

## Build de produção

```bash
npm run typecheck
npm run build      # gera dist/
npm run preview    # serve o build em http://localhost:4173/modelo3/
```

## Estrutura

| Caminho | Conteúdo |
|---|---|
| `src/content/campanha.ts` | **Fonte única do texto jurídico-comercial** (passos, condições, documentos, produtos, FAQ). Contém o bloco `APROVACAO`, que isola o que depende de aprovação (faixa de demonstração, redes participantes, versão do regulamento). |
| `src/content/regulamento.json` | Transcrição literal do DOCX, exibida no leitor do regulamento. As notas de revisão aparecem destacadas como tal. |
| `src/components/RegulamentoLeitor.tsx` | Diálogo acessível com a íntegra do regulamento e os links de download. |
| `src/App.tsx`, `src/styles.css` | Layout e direção de arte do modelo. |
| `public/regulamento/` | DOCX original (cópia byte a byte) e PDF gerado pelo Microsoft Word a partir dele. |
| `public/img/` | Logo oficial e embalagens (fonte: francefarma.com.br), otimizadas em WebP. |
| `.github/workflows/deploy.yml` | Build e deploy no GitHub Pages a cada push na `main`. |

## Publicação

- `vite.config.ts` usa `base: '/modelo3/'`, porque o Pages publica em subdiretório. Se o domínio mudar, ajuste o `base`
  e as URLs `og:url`/`og:image` do `index.html`.
- O GitHub Pages do repositório usa **Source: GitHub Actions**.
- Para sair do modo de aprovação, siga a seção 4 de `PENDENCIAS-APROVACAO.md`.

## Testes realizados

Build e typecheck aprovados. Testes automatizados em navegador (Edge/Playwright), em desktop (1440×900) e mobile (390×844):
menu mobile (abrir, fechar ao navegar, fechar com Esc), FAQ por mouse e teclado, diálogo do regulamento, `mailto` do SAC,
download do PDF/DOCX, âncoras internas, carregamento de imagens, texto alternativo, link “pular para o conteúdo”, ausência
de overflow horizontal e de erros de console. Lighthouse mobile: veja `COMPARATIVO-MODELOS.md` na pasta de trabalho.
