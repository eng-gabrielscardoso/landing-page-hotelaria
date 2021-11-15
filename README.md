# Landing Page Hotelaria

![Desktop](./src/assets/img/main.png)

Landing page para hotelaria, com cadastro em newsletter, responsiva e direcionada para otimização em mecanismos de busca. Feito inteiramente com:

- HTML5
- CSS3
- Javascript
- NodeJS + Express

## Motivação

Como principal motivação para o desenvolvimento da página web fora a prática dos conhecimentos em desenvolvimento front-end, assim como a integração com back-end utilizando NodeJS + Express. 

Todos os direitos sobre as imagens e projeto original recaem sobre a pessoa de Guilherme Cherem Grillo e a &copy;Danki Code, inscrita sobre o CNPJ 25.162.666/0001-77.

## Instalação e utilização

Para utilizar a aplicação bastar baixar o projeto através do Github ou via Git, através do comando:

```{bash}
git clone https://github.com/eng-gabrielscardoso/landing-page-hotelaria
```

Após o download, basta navegar até o diretório do projeto e instalar as dependências do projeto através do comando:

```{nodejs}
npm install
```

Com as dependências do projeto instaladas, basta rodar o comando para servir a página:

```{nodejs}
npm start
```

### Configuração do disparo de e-mails

Para utilizar o disparo de e-mails pelo Nodemailer, primeiramente deve-se ter uma conta de e-mail devidamente configurada para tal.

Por questões de segurança, a aplicação está configurada para receber os dados sensíveis de disparo de e-mail (como senhas) em variáveis de ambiente definidas pelo próprio usuário que irá utilizar a aplicação.

Na raiz do projeto, crie ficheiro .env para armazenar as variáveis a serem utilizadas, e nele insira as seguintes informações:

```
USERMAIL = <Endereço da conta que efetuará o disparo>
PASSWORD = <Senha da conta de e-mail>
HOSTMAIL = <Servidor de disparo>
PORTMAIL = <Porta a ser utilizada>
```

>Informações acerca do host e da porta podem ser encontrados a partir do servidor da conta a ser utilizada.
> A exempo, tem-se o Gmail, que utiliza como host **smtp.gmail.com** e como portas utiliza a porta **465**, para SSL, e a porta **587** para TLS.

Após a configuração das variáveis de ambiente basta iniciar a aplicação que os disparos estarão plenamente operando.

>Não se preocupe com os detalhes pessoais da sua conta, eles estarão sendo utilizados apenas em seu computador.

## Agradecimentos

Apesar da interface simples e propósito simples, o projeto auxiliou na prática do desenvolvimento web full-stack, bem como na possibilidade de escalar um projeto simples visto no curso de WebMaster FrontEnd, da &copy;Danki Code.

Agradeço a todos que testaram e contribuíram com o projeto

Siga-me em minhas redes:

[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/eng-gabrielscardoso/)
[![Instagram Badge](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/eng.gabrielscardoso)
[![Whatsapp Badge](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/message/SFETAGDRXGFND1)
[![Telegram Badge](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/enggabrielscardoso)
