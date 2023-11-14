FROM node:18-alpine
WORKDIR /backend
COPY . .
RUN npm install
CMD ["sh", "-c", "npx prisma db push && npm run start:dev"]
EXPOSE 3000
