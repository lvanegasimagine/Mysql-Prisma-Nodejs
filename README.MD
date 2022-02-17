# CREAR UN ARCHIVO .ENV y COPIAR LA CADENA DE CONEXION

EJP: 

Environment variables declared in this file are automatically made available to Prisma.
See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB (Preview) and CockroachDB (Preview).
See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="mysql://USER:PASS@localhost:3306/NAME_DB?schema=public"

# Migraciones de Tablas a BD

npx prisma migrate dev --name init

# Instalacion de Prisma Client
npm install @prisma/client