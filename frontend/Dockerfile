FROM node:20

# Establecer directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar archivos de la aplicación
COPY . .

# Mostrar contenido de package.json para depuración
RUN cat package.json

# Listar scripts disponibles
RUN npm run

# Intentar construir la aplicación para producción
RUN npm run build || (echo "Error durante la construcción. Mostrando logs:" && cat npm-debug.log)

# Instalar un servidor ligero para servir la aplicación
#RUN npm install -g http-server
#RUN npm run dev 
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# Exponer puerto 8080
EXPOSE 5173

# Comando para ejecutar la aplicación
#CMD [ "http-server", "dist" ]