/**
 * Produtos participantes (Anexo I do regulamento), com as fotografias
 * oficiais em alta resolução fornecidas pela FranceFarma. Tá na Hora: a pasta
 * recebida estava vazia; foram usados os packshots oficiais publicados em
 * francefarma.com.br. Nomes de versão transcritos dos rótulos.
 * Inventário completo em INVENTARIO-ASSETS.md.
 */
import imagens from './imagens.json'

const base = import.meta.env.BASE_URL
const dims = imagens as Record<string, { w: number; h: number }>

export type Foto = { src: string; srcSm: string; w: number; h: number; wSm: number; alt: string }

function foto(pasta: 'produtos' | 'grupos', id: string, alt: string): Foto {
  const d = dims[id]
  const sm = dims[`${id}-sm`] ?? d
  return {
    src: `${base}img/${pasta}/${id}.webp`,
    srcSm: `${base}img/${pasta}/${id}-sm.webp`,
    w: d.w,
    h: d.h,
    wSm: sm.w,
    alt,
  }
}

/** Imagens de campanha (peça-chave, jornada, PDV). */
export function imgCampanha(id: string) {
  const d = dims[id]
  return { src: `${base}img/campanha/${id}.webp`, w: d.w, h: d.h }
}

export type Produto = { id: string; nome: string; detalhe: string; foto: Foto }
export type Familia = { id: string; nome: string; anexo: string; itens: Produto[]; grupo?: Foto; nota?: string }
export type Linha = {
  id: string
  nome: string
  marca: string
  chamada: string
  anexo: string
  familias: Familia[]
  destaque: Foto
  nota?: string
}

const p = (id: string, nome: string, detalhe: string, alt?: string): Produto => ({
  id,
  nome,
  detalhe,
  foto: foto('produtos', id, alt ?? `Embalagem ${nome}`),
})

export const LINHAS: Linha[] = [
  {
    id: 'vidalia',
    nome: 'Vidália',
    marca: 'Linha Vidália',
    chamada: 'Alto poder de hidratação, limpeza facial e cuidado diário para o corpo e as mãos.',
    anexo: 'Hidratante 200 ml, Hidratante 500 ml, Sabonete facial, Sabonete líquido e Água Micelar.',
    destaque: foto('grupos', 'grp-vid-facial-micelar', 'Sabonetes faciais e águas micelares Vidália lado a lado'),
    familias: [
      {
        id: 'hid200',
        nome: 'Hidratante corporal 200 ml',
        anexo: 'Hidratante 200 ml',
        itens: [
          p('vid-hid200-fashion', 'Vidália Fashion', 'Extrato de frutas vermelhas · 200 ml', 'Embalagem do hidratante Vidália Fashion, 200 ml'),
          p('vid-hid200-night', 'Vidália Night', 'Você perfumada toda noite · 200 ml', 'Embalagem do hidratante Vidália Night, 200 ml'),
          p('vid-hid200-ureia', 'Vidália Ureia', 'Para peles extra secas · 200 ml', 'Embalagem do hidratante Vidália Ureia, 200 ml'),
        ],
      },
      {
        id: 'hid425',
        nome: 'Hidratante corporal com válvula',
        anexo: 'Hidratante 500 ml',
        nota: 'O Anexo I cita “Hidratante 500 ml”; as embalagens fotografadas indicam 425 g. Conferência pendente.',
        grupo: foto('grupos', 'grp-vid-hid425', 'Hidratantes Vidália Night, Fashion e Clean com válvula'),
        itens: [
          p('vid-hid425-night', 'Vidália Night', 'Hidratante com válvula · 425 g', 'Embalagem do hidratante Vidália Night com válvula'),
          p('vid-hid425-fashion', 'Vidália Fashion', 'Hidratante com válvula · 425 g', 'Embalagem do hidratante Vidália Fashion com válvula'),
          p('vid-hid425-clean', 'Vidália Clean', 'Extrato de aloe vera · 425 g', 'Embalagem do hidratante Vidália Clean com válvula'),
        ],
      },
      {
        id: 'facial',
        nome: 'Sabonete facial',
        anexo: 'Sabonete facial',
        grupo: foto('grupos', 'grp-vid-facial', 'Sabonetes faciais Vidália nas versões zinco, ácido salicílico e vitamina C'),
        itens: [
          p('vid-facial-zinco', 'Sabonete Facial Zinco', 'Niacinamida · Vegano', 'Embalagem do sabonete facial Vidália com niacinamida e zinco'),
          p('vid-facial-salicilico', 'Sabonete Facial AC Salicílico', 'Ácido salicílico · Vegano', 'Embalagem do sabonete facial Vidália com ácido salicílico'),
          p('vid-facial-vitc', 'Sabonete Facial Vitamina C', 'Ácido hialurônico · Vegano', 'Embalagem do sabonete facial Vidália com vitamina C e ácido hialurônico'),
        ],
      },
      {
        id: 'liquido',
        nome: 'Sabonete líquido',
        anexo: 'Sabonete líquido',
        grupo: foto('grupos', 'grp-vid-liquido', 'Sabonetes líquidos Vidália Chá Verde, Frutas Vermelhas e Erva Doce'),
        itens: [
          p('vid-liq-frutas', 'Frutas Vermelhas', 'Sabonete líquido · 340 ml', 'Embalagem do sabonete líquido Vidália Frutas Vermelhas'),
          p('vid-liq-erva', 'Erva Doce', 'Sabonete líquido · 340 ml', 'Embalagem do sabonete líquido Vidália Erva Doce'),
          p('vid-liq-cha', 'Chá Verde', 'Sabonete líquido · 340 ml', 'Embalagem do sabonete líquido Vidália Chá Verde'),
        ],
      },
      {
        id: 'micelar',
        nome: 'Água micelar',
        anexo: 'Água Micelar',
        grupo: foto('grupos', 'grp-vid-micelar', 'Águas micelares Vidália lado a lado'),
        itens: [
          p('vid-micelar-limpeza', 'Água Micelar', 'Solução de limpeza · 220 ml', 'Embalagem da água micelar Vidália solução de limpeza'),
          p('vid-micelar-hialuronico', 'Água Micelar Hialurônico', 'Ácido hialurônico · 220 ml', 'Embalagem da água micelar Vidália com ácido hialurônico'),
        ],
      },
    ],
  },
  {
    id: 'intimoph',
    nome: 'Íntimo pH',
    marca: 'Linha Íntimo pH',
    chamada: 'Sabonetes íntimos de uso diário, com fragrâncias para cada momento.',
    anexo: 'Todos os itens da linha.',
    destaque: foto('produtos', 'iph-irresistivel', 'Embalagem do sabonete íntimo Íntimo pH Irresistível'),
    familias: [
      {
        id: 'sabonetes',
        nome: 'Sabonete íntimo 200 ml',
        anexo: 'Todos os itens da linha',
        itens: [
          p('iph-irresistivel', 'Irresistível', 'Liberdade e bem-estar'),
          p('iph-atrativa', 'Atrativa', 'Suavidade e bem-estar'),
          p('iph-floral', 'Floral', 'Harmonia e bem-estar'),
          p('iph-toque-fresco', 'Toque Fresco', 'Refrescância e bem-estar'),
          p('iph-neutro', 'Neutro', 'Equilíbrio e bem-estar'),
          p('iph-equilibrio', 'Equilíbrio Unissex', 'Proteção e bem-estar'),
          p('iph-elimina-odores', 'Elimina Odores', 'Ação hidratante'),
        ].map((x) => ({ ...x, foto: { ...x.foto, alt: `Embalagem do sabonete íntimo Íntimo pH ${x.nome}` } })),
      },
    ],
  },
  {
    id: 'tanahora',
    nome: 'Tá na Hora',
    marca: 'Linha Tá na Hora',
    chamada: 'Shampoos e condicionadores com D-pantenol para cada tipo de cabelo.',
    anexo: 'Condicionador, Shampoo e Creme para pentear.',
    nota: 'Fotos da pasta “TA NA HORA” não foram recebidas: usados os packshots oficiais de francefarma.com.br. A peça-chave mostra outra embalagem da linha; confirmar a versão vigente. Não há foto de Creme para pentear.',
    destaque: foto('produtos', 'tnh-sh-cachinhos', 'Embalagem do shampoo Tá na Hora Cachinhos'),
    familias: [
      {
        id: 'cachinhos',
        nome: 'Cachinhos',
        anexo: 'Shampoo e Condicionador',
        itens: [
          p('tnh-sh-cachinhos', 'Shampoo Cachinhos', 'Cachinhos definidos e sem frizz · 350 ml'),
          p('tnh-co-cachinhos', 'Condicionador Cachinhos', 'Cachinhos definidos e sem frizz · 350 g'),
        ],
      },
      {
        id: 'princesa',
        nome: 'Hidratação de Princesa',
        anexo: 'Shampoo e Condicionador',
        itens: [
          p('tnh-sh-princesa', 'Shampoo Hidratação de Princesa', 'Fórmula suave · 350 ml'),
          p('tnh-co-princesa', 'Condicionador Hidratação de Princesa', 'Cabelos hidratados e fáceis de pentear · 350 g'),
        ],
      },
      {
        id: 'lisinhos',
        nome: 'Lisinhos',
        anexo: 'Shampoo e Condicionador',
        itens: [
          p('tnh-sh-lisinhos', 'Shampoo Lisinhos', 'Lisinhos e sem frizz · 350 ml'),
          p('tnh-co-lisinhos', 'Condicionador Lisinhos', 'Lisinhos e sem frizz · 350 g'),
        ],
      },
      {
        id: 'todos',
        nome: 'Todos os tipos de cabelo',
        anexo: 'Shampoo e Condicionador',
        itens: [
          p('tnh-sh-todos', 'Shampoo Todos os Tipos', 'Com D-pantenol e camomila · 350 ml'),
          p('tnh-co-todos', 'Condicionador Todos os Tipos', 'Com D-pantenol e camomila · 350 g'),
        ],
      },
    ].map((f) => ({
      ...f,
      itens: f.itens.map((x) => ({ ...x, foto: { ...x.foto, alt: `Embalagem ${x.nome} Tá na Hora` } })),
    })),
  },
  {
    id: 'gel',
    nome: 'Gel de Massagem',
    marca: 'Gel de Massagem',
    chamada: 'Géis de arnica Doutormax e Tandrimax, para massagem com sensação refrescante.',
    anexo: 'Doutormax e Tandrimax.',
    nota: 'O Anexo I cita apenas “Doutormax” e “Tandrimax”. Confirmar se todas as versões fotografadas participam.',
    destaque: foto('grupos', 'grp-doutormax', 'Géis Doutormax nas quatro versões'),
    familias: [
      {
        id: 'doutormax',
        nome: 'Doutormax',
        anexo: 'Doutormax',
        grupo: foto('grupos', 'grp-doutormax', 'Géis Doutormax Extra Forte Ice, Sebo de Carneiro, Gel de Arnica e 7 Ervas'),
        itens: [
          p('gel-dm-arnica', 'Doutormax Gel de Arnica', 'Alívio refrescante · 200 g'),
          p('gel-dm-7ervas', 'Doutormax 7 Ervas', 'Gel para massagem com arnica e 7 ervas · 200 g'),
          p('gel-dm-sebo', 'Doutormax Sebo de Carneiro', 'Arnica e sebo de carneiro · 200 g'),
          p('gel-dm-ice', 'Doutormax Extra Forte Ice', 'Gel para massagem com arnica · 200 g'),
        ],
      },
      {
        id: 'tandrimax',
        nome: 'Tandrimax',
        anexo: 'Tandrimax',
        grupo: foto('grupos', 'grp-tandrimax', 'Géis Tandrimax Ice Extra Forte e Gel de Arnica'),
        itens: [
          p('gel-tm-arnica', 'Tandrimax Gel de Arnica', 'Ideal para massagens · 200 g'),
          p('gel-tm-ice', 'Tandrimax Ice Extra Forte', 'Gel massageador · 200 g'),
        ],
      },
    ].map((f) => ({
      ...f,
      itens: f.itens.map((x) => ({ ...x, foto: { ...x.foto, alt: `Embalagem do gel ${x.nome}` } })),
    })),
  },
]

/** Todos os produtos com foto individual, na ordem das linhas. */
export const TODOS = LINHAS.flatMap((l) => l.familias.flatMap((f) => f.itens.map((i) => ({ ...i, linha: l.id }))))

export const AVISO_PRODUTOS =
  'Imagens ilustrativas. Participam exclusivamente os produtos relacionados no Anexo I do regulamento. O selo da campanha na embalagem é apenas informativo: a ausência do selo não exclui um produto do Anexo I, e a presença do selo não inclui um produto que não esteja nele.'
