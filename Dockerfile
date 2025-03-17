# filepath: c:\Users\aparato\mi-super-proyecto-xdxdxd\Dockerfile
# Utiliza docker-compose para construir y ejecutar los servicios
FROM docker/compose:1.29.2

WORKDIR /app

COPY . .

CMD ["docker-compose", "up"]