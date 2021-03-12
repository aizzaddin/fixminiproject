# Development Notes #
Berisi catatan atau paduan dalam pengerjaan mini project. Dengan dibuatnya paduan ini, diharapkan temen-temen dimudahkan dalam mengerjakan project.


## Get Started ##
Clone atau menyalin repository ke repository lokal
``` bash
$ git clone 
```
Membuat file .env yang berisi konfigurasi seperti berikut :
``` js
DB_USERNAME="" // Isi dengan nama username postgresql
DB_PASSWORD="" // Isi dengan password username postgresql
DB_DATABASE="miniproject"
DB_HOST="localhost"
DB_DIALECT="postgres"
JWT_SECRET="synrgyacademy"
PORT=3000
```
Install packages
``` bash
$ npm install
```
Membuat database dari konfigurasi
``` bash
$ sequelize db:create
```
Membuat migration
``` bash
$ sequelize db:migrate
```
Jalankan server
``` bash
$ npm run dev
```

## Important Link ##
1. Gitlab : https://gitlab.com/synrgy-mini-project-batch-2/team-g/backend
2. Trello : https://trello.com/b/eoxenXHW/mini-project
3. Miro : https://miro.com/welcomeonboard/Zv4FzQ8zdUsDgwlJct4nJk1NxaHbS5F85UhgS4PEXVrAapBbYi49m2oSl6Lm3Oz6
4. Figma : https://www.figma.com/file/28vNKaAlNsDwd6BNeUJQl7/Untitled

## Site Routes ##
| Routes | Description |
| ------ | ----------- |
| / | Landing Page |
| /login | Login Page |
| /register | Register Page |
| /questions | Dashboard |
| /:question_id | Question & Answer Page |
| /profile | Profile Page

## Packages ##
1. Bcrypt : https://www.npmjs.com/package/bcrypt
2. Body Parser : https://www.npmjs.com/package/body-parser
3. Dotenv : https://www.npmjs.com/package/dotenv
4. Ejs : https://www.npmjs.com/package/ejs
5. Express : https://www.npmjs.com/package/express | https://expressjs.com/
6. Json Web Token : https://www.npmjs.com/package/jsonwebtoken
7. Nanoid : https://www.npmjs.com/package/nanoid
8. Passport : https://www.npmjs.com/package/passport | https://passportjs.org/
9. Passport-jwt : https://www.npmjs.com/package/passport-jwt
10. Pg : https://www.npmjs.com/package/pg
11. Sequelize : https://www.npmjs.com/package/sequelize | https://sequelize.org/
    
## API ##
### Search & Filter API ###
Soon 🤣