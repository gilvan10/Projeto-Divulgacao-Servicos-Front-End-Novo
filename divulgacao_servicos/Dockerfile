# Etapa 1: Build
FROM node:24 AS build

# Diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todo o código
COPY . .

# Expor porta padrão do Nginx
EXPOSE 4200

# Rodar Nginx
CMD ["npm", "start"]