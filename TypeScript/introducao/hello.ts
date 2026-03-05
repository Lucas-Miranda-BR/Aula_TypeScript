/* Para instalar o TypeScript primeiro se dever instalar o NodeJS apartir desse link:
https://nodejs.org
*/

/* Após instalar o nodeJS pode executar o seguinte comando para instalar o TypeScript
npm install -g typescript
*/

/* Deve-se gerar um código de configuração a partir do seguinte comando
npx tsc --init
*/

/* Compilar codigo .ts
npx tsc hello.ts
*/

/* Use esse codigo para criar o node modules
npm i
*/

function greet(name: string): string{
    return `Hello, ${name}!`;
    }
    
    const message: string = greet("World");
    console.log(message);