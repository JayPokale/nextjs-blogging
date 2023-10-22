
## Getting Started

Clone this project in your machine and run following command:
```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```
Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Folder structure

```
app
├── page.tsx
├── layout.tsx
│   
├── api
│   ├── generate/route.ts
│   └── upload/route.ts
│   
├── auth/page.tsx
├── [userId]/page.tsx
│   
├── p
│   ├── [postId]/page.tsx
│   └── create/page.tsx
│   
├── profile
│   ├── page.tsx
│   └── edit/page.tsx
│   
├── robots.txt/page.tsx
└── sitemap.xml/page.tsx


components
├── ui
│   ├── button.tsx
│   └── popover.tsx
│   
├── Footer.tsx
└── Header.tsx
```