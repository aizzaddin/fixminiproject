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
Seed Data
``` bash
$ sequelize db:seed:all
```
Jalankan server
``` bash
$ npm run dev
```

## Database Schema ##
![](/readme/db_schema.png)
Lihat lebih detail [di sini](https://dbdiagram.io/d/602fc828fcdcb6230b209b27)

## Important Link ##
1. Gitlab : https://gitlab.com/synrgy-mini-project-batch-2/team-g/
2. Trello : https://trello.com/b/eoxenXHW/mini-project
3. Miro : https://miro.com/welcomeonboard/Zv4FzQ8zdUsDgwlJct4nJk1NxaHbS5F85UhgS4PEXVrAapBbYi49m2oSl6Lm3Oz6
4. Figma : https://www.figma.com/file/28vNKaAlNsDwd6BNeUJQl7/Untitled

## Site Routes ##
| Routes | Description | Method |
| ------ | ----------- | ------ |
| / | Landing Page | GET |
| /login | Login Page | POST |
| /register | Register Page | POST |
| /dashboard | Dashboard | GET|
| /:question_id | Question Details with Answer | GET |
| /post | Add Question Page | GET |
| /post/new | Add Question | POST |
| /answer | Add Answer | POST |
| /profile | Profile Page | GET |
| /profile | Edit Profile | POST |
| /profile/editpassword | Edit Password Page | GET |
| profile/editpassword | Edit Password | POST |
 
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
12. Path : https://www.npmjs.com/package/path
13. Fs : https://www.npmjs.com/package/fs
14. Busboy : https://www.npmjs.com/package/busboy
15. Moment : https://www.npmjs.com/package/momentjs
16. SHA1 : https://www.npmjs.com/package/sha1
17. Cookie-Parser : https://www.npmjs.com/package/cookie-parser
18. Nodemon : https://www.npmjs.com/package/nodemon
19. Sequelize-CLI : https://www.npmjs.com/package/sequelize-cli
    