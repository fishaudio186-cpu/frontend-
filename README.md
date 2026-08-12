# nurdakhil Frontend

Next.js 15 RTL storefront for نورالداخل.

## Dev

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Docker

```bash
docker build -t nurdakhil-web --build-arg NEXT_PUBLIC_API_URL=https://apinurdakhil.com .
docker run -p 3000:3000 nurdakhil-web
```

## Easypanel

- Domain: nurdakhil.com
- Port: 3000
- Set all NEXT_PUBLIC_* env vars before build
