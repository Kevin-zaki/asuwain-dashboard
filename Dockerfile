
FROM node:20-alpine

WORKDIR /app

# Salin konfigurasi dependency
COPY package*.json ./

# Instal dependency
RUN npm install

# Salin seluruh source code
COPY . .

# Build Next.js
RUN npm run build

# Port aplikasi
EXPOSE 3000

# Jalankan aplikasi production
CMD ["npm", "run", "start"]
