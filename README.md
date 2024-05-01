# FeelBetter <img height="30" src="https://purepng.com/public/uploads/large/purepng.com-green-leavesleaffoliageautumn-foliagephotosynthetic-function-14115270577090i4xd.png" >

FeelBetter es una aplicación web diseñada para ayudar en el manejo diario del dolor crónico a través de trabajo cognitivo y de la meditación.

Debido a la poca difusión actualizada de este tipo de contenido en español, decidí investigar y recoger la información ordenadamente, además de añadir herramientas para ayudar a ponerla en práctica. La web está disponible en español, en francés y también en inglés.

<div style="display:flex; justify-content:center;">
  <img src="src/presentation.gif" alt="Image description" height="400">
</div>

---

![Screenshot 2024-05-01 at 11 40 31](https://github.com/vanesascode/vanesascode/assets/131259155/924a3679-0145-454b-b75b-67b1f50d9d10)

![Screenshot 2024-05-01 at 11 41 28](https://github.com/vanesascode/vanesascode/assets/131259155/9da99bea-e302-44df-bbe0-39ed3c4d8d8e)

![Screenshot 2024-05-01 at 11 41 39](https://github.com/vanesascode/vanesascode/assets/131259155/45e7e1c4-3aa6-4ef9-a09a-f556b66f747a)

![Screenshot 2024-05-01 at 11 42 18](https://github.com/vanesascode/vanesascode/assets/131259155/8148b3b0-e9fc-4102-ad03-5409ee4da7ee)

![Screenshot 2024-05-01 at 11 46 04](https://github.com/vanesascode/vanesascode/assets/131259155/d8554bde-bb76-4eb0-beb7-d819f879f49e)

![Screenshot 2024-05-01 at 11 47 50](https://github.com/vanesascode/vanesascode/assets/131259155/bdbab725-f18b-4e87-b6ad-e621e7adb767)

---

---

## Herramientas para la creación del servidor:

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## <img height="30" src="https://purepng.com/public/uploads/large/purepng.com-green-leavesleaffoliageautumn-foliagephotosynthetic-function-14115270577090i4xd.png" >Swagger

`npm install --save @nestjs/swagger`

Add this in main.ts:

```bash
  const config = new DocumentBuilder()
    .setTitle('My API documentation')
    .setDescription('My API description')
    .setVersion('1.0')
    .addTag('auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
```

Add the @Apitags() decorators to the controllers

Go to: http://localhost:3000/api

## <img height="30" src="https://purepng.com/public/uploads/large/purepng.com-green-leavesleaffoliageautumn-foliagephotosynthetic-function-14115270577090i4xd.png" >Mongoose

`npm i @nestjs/mongoose mongoose`

Create the schema.

Import the MoongoseModule in the module file.

Add the InjectModel in the service file.

## <img height="30" src="https://purepng.com/public/uploads/large/purepng.com-green-leavesleaffoliageautumn-foliagephotosynthetic-function-14115270577090i4xd.png" >Pipes

`npm i --save class-validator class-transformer`

Add validations in the dto files

Add this to the main.ts file:

```bash
app.useGlobalPipes(new ValidationPipe());
```

## <img height="30" src="https://purepng.com/public/uploads/large/purepng.com-green-leavesleaffoliageautumn-foliagephotosynthetic-function-14115270577090i4xd.png" >ENV

`npm i --save @nestjs/config`

In app.module.ts add:

```bash
 ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
```

## <img height="30" src="https://purepng.com/public/uploads/large/purepng.com-green-leavesleaffoliageautumn-foliagephotosynthetic-function-14115270577090i4xd.png" >Auth packages

`npm i @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt`

`npm i -D @types/passport-jwt @types/bcrypt`
