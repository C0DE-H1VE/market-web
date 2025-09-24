# Market Web

Stack de desenvolvimento web moderna com Next.js, TypeScript, Tailwind CSS e Zustand.

## 🚀 Stack Tecnológica

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utility-first
- **Zustand** - Gerenciamento de estado leve e moderno
- **ESLint** - Linting e análise de código

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes reutilizáveis
│   ├── Counter.tsx        # Exemplo de counter com Zustand
│   └── UserLogin.tsx      # Exemplo de login com estado
├── stores/                # Stores do Zustand
│   ├── atoms.ts           # Definição das stores
│   └── index.ts           # Exportações
└── types/                 # Definições de tipos TypeScript
    └── index.ts           # Tipos globais
```

## 🛠 Configurações

### Import Aliases
Configurado para usar `@/*` como alias para `./src/*`:

```typescript
import Counter from "@/components/Counter"
import { useCounterStore } from "@/stores/atoms"
```

### Zustand Stores
Exemplo de store para counter:

```typescript
export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}))
```

## 🎯 Como usar

1. **Instalação das dependências:**
   ```bash
   npm install
   ```

2. **Executar em desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Build para produção:**
   ```bash
   npm run build
   ```

4. **Executar produção:**
   ```bash
   npm start
   ```

## 📝 Scripts Disponíveis

- `npm run dev` - Executa o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Executa o servidor de produção
- `npm run lint` - Executa o ESLint

## 🔧 Características

- ✅ **App Router** - Roteamento moderno do Next.js 15
- ✅ **TypeScript** - Tipagem estática completa
- ✅ **Tailwind CSS** - Estilização utilitária
- ✅ **Zustand** - Estado global reativo
- ✅ **Import Aliases** - Importações limpas com @
- ✅ **ESLint** - Análise de código automática
- ✅ **Turbopack** - Build rápido em desenvolvimento

## 🌐 Deploy

O projeto está configurado para deploy fácil na Vercel, Netlify ou qualquer provedor que suporte Next.js.

---

**Desenvolvido com ❤️ usando as tecnologias mais modernas do ecossistema React.**
