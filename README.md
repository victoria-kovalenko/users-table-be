<h1 align="center">Welcome to my Backend Template 👋</h1>

## Description

This template was coded in Typescript, TypeORM and Express, contains a login with a password recovery system. Also, have a notifications provider with MongoDB and a Redis provider to be used for cache. The recovery password email system was setup with AWS SES for production and the profile avatar setup to be saved with AWS S3.For commits, we setup a config with commitlint/commitizen/husky and for. For code analyses, we are using ESLint and Prettier. For tests, we are using JEST. You can see at the technologies section, all dependencies we are using.

To use this template you will need to configure the files bellow:

- ormconfig.json
- .env

It also has an insomnia file with the api docs to test all the login features, only need to reconfigure the "Response => Body Attribute" with the Request route.

Utils:
Generating the app_secret: http://www.md5.cz/ (type some random text and generate a hash)
AWS credentials: Take it creating a new user on Amazon

## :computer: Languages

- **#TypeScript**

## :books: Technologies

- **https://users-table-be.herokuapp.com/**

## :file_cabinet: Databases

- **#Postgres**
- **#MongoDB**
- **#Redis**

## Install

Init your repository before install, or you will need to reinstall husky.

```sh
yarn install
```

## Usage

```sh
yarn dev:server
```

## Author

👤 **Arthur Pedroti**

* Github: [@ArthurPedroti](https://github.com/ArthurPedroti)
* Linkedin: [@ArthurPedroti](https://www.linkedin.com/in/arthurpedroti)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/ArthurPedroit/Template/issues). You can also take a look at the [contributing guide](https://github.com/ArthurPedroit/Template/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Arthur Pedroti](https://github.com/ArthurPedroti).<br />
This project is [MIT](https://github.com/ArthurPedroit/Template/blob/master/LICENSE) licensed.

---

Made by :blue_heart: by [Arthur Pedroti](https://github.com/ArthurPedroti)
