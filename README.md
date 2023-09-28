**INFO GENERAL**:

-Este proyecto busca recrear una página de streaming de videos como YouTube


**COMO INICIALIZAR**:

01. Clona el proyecto utilizando el link del repo https://github.com/maquico/VideosApp/tree/main

02. Abre el proyecto en la terminal y ejecuta -> npm install <-

03. Ejecuta -> cd server <- para entrar al directorio del backend

04. Crea una carpeta /uploads que contenga una carpeta /videos y otra /miniaturas (dentro coloca videos y miniaturas)

05. Crea un archivo .env, en el colocaras el valor de PORT=3001 y el de DATABASE_URL="mysql://USER:PASSWORD@HOST:3306/DATABASE_NAME"

06. Ejecuta -> npm install <-

07. Ejecuta -> cd .. <-

08. Ejecuta -> cd client <-

09. Ejecuta -> cd .. <-

10. Ejecuta -> npm run start-dev <- (Esto correra ambos proyectos a la vez, el frontend en el puerto 3000 y el backend en el 3001)



OJO: Si dentro del server no tienes el folder /prisma con el archivo schema.prisma ejecuta npx prisma init y sigue los pasos para crear la conexión con la base de datos. Estos son los pasos de prisma init:

1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

   
**COMANDOS PRISMA**
   init   Set up Prisma for your app
        generate   Generate artifacts (e.g. Prisma Client)
              db   Manage your database schema and lifecycle
         migrate   Migrate your database
          studio   Browse your data with Prisma Studio
        validate   Validate your Prisma schema
          format   Format your Prisma schema
         version   Displays Prisma version info