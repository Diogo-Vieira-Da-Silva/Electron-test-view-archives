 ⚙️ Project Setup and Execution

To run this project, you need to have Node.js installed on your computer. If you do not have it installed yet, download and install it before proceeding.

📌 1. Create or access the project folder

You can create a new project folder using the terminal (optional):

mkdir my-first-app cd my-first-app

You may also use an existing folder if preferred.

📌 2. Initialize the Node.js project

Run the following command in the terminal to automatically generate the package.json file:

npm init -y 📌 3. Install Electron

Install Electron as a development dependency:

npm install electron --save-dev 📌 4. Create the project files

Create the following files in the project folder:

main.js

index.html

renderer.js

These files should follow the same structure used in this repository. The renderer.js file can remain empty initially.

▶️ 5. Run the application

To start the application in development mode, run:

npm start 📦 6. Build the desktop executable

To generate a desktop version of the application, install electron-builder:

npm install electron-builder --save-dev

Then adjust the package.json file according to the configuration provided in this repository.

After that, run:

npm run build 🖥️ 7. Run the generated application

After the build process finishes:

Open the project folder

Navigate to the dist folder

Then open the win-unpacked folder

Run the file with the Electron icon

⚠️ Note

Even though the project uses .gitignore to ignore certain folders, the dependencies must still be installed for the project to work properly. Make sure that the following folders are generated correctly during installation and build:

node_modules

dist

🔄 Additions

Since I already had the basic knowledge of Electron, I decided that I should try to add something new. So I used the documentation to see what I could implement, which were:

A second window;

And a button that changes the page’s lighting (dark/light mode).

Then I started the process.

First, I created a second HTML file and followed what I saw in the documentation. At the beginning, I had some trouble because I thought I needed to create a second version of each file. However, I later learned that I could use only one main.js, just by creating a new function with different constants.

After that, I started adding elements to renderer.js, and I also created preload.js and style.css. Once everything was finished, it was easy to run the project. However, I discovered that both pages were connected. Soon I realized that it was because of how I made the style and the other functions that affected the entire system and the theme of the pages.

Just like I mentioned in my last project, I changed this and modified the styles and the functions in the JavaScript files so that the theme would not affect the entire project, including the window based on index.html. This allowed me to finally separate the windows and also make some improvements to the style of the second one to better differentiate it.

------------------------------------TRADUÇÃO-------------------------------------------------

⚙️ Configuração e Execução do Projeto

Para executar este projeto, é necessário ter o Node.js instalado em seu computador. Caso ainda não tenha instalado, faça o download e a instalação antes de prosseguir.

📌 1. Criar ou acessar a pasta do projeto

Você pode criar uma nova pasta para o projeto pelo terminal (opcional):

mkdir meu-primeiro-app cd meu-primeiro-app

Também é possível utilizar uma pasta já existente, conforme preferir.

📌 2. Inicializar o projeto Node.js

No terminal, execute o seguinte comando para gerar automaticamente o arquivo package.json:

npm init -y 📌 3. Instalar o Electron

Instale o Electron como dependência de desenvolvimento:

npm install electron --save-dev 📌 4. Criar os arquivos do projeto

Crie os seguintes arquivos na pasta do projeto:

main.js

index.html

renderer.js

Esses arquivos devem seguir a mesma estrutura apresentada neste repositório. O arquivo renderer.js pode permanecer vazio inicialmente.

▶️ 5. Executar o aplicativo

Para iniciar o aplicativo em modo de desenvolvimento, execute:

npm start 📦 6. Gerar a versão executável (Desktop)

Para criar uma versão executável do aplicativo, instale o electron-builder:

npm install electron-builder --save-dev

Em seguida, ajuste o arquivo package.json conforme a configuração presente neste repositório.

Depois execute:

npm run build 🖥️ 7. Executar a build do aplicativo

Após a finalização do build:

Você pode executar com o npm start 🖥️ 7. Executar o aplicativo gerado

Ou então você pode acessar de outro modo:

Acesse a pasta do projeto

Entre na pasta dist

Depois na pasta win-unpacked

Execute o arquivo com o ícone do Electron

⚠️ Observação

Mesmo que o projeto utilize .gitignore para ignorar algumas pastas, é necessário instalar corretamente as dependências para que o projeto funcione. Portanto, certifique-se de que as pastas:

node_modules

dist

sejam geradas corretamente durante o processo de instalação e build.

🔄 Adições

Com eu possuindo o conhecimento base do Electron, agora eu deveria tentar adicionar algo novo. Por isso usei a documentação e vi o que deveria implementar, sendo:

Uma segunda janela;

E m botão que mude a iluminação da página

E em seguida comecei meu processo:

Primeiro comecei criando um segundo html e me baseando no que eu via na documentação, eu inicialmente tive problemas achando que eu deveria fazer uma segunda versão para cada arquivo, mas aprendi a como usar somente um main.js e apenas criando uma nova função com const diferentes.

Após isso, fui adicionando elementos ao renderer.js e criei o preload.js e o style.css, com tudo finalizado, foi fácil rodar, porém descobri que ambas as páginas estavam ligadas e logo vi que era por causa do modo que fiz o style e as outras funções que pegavam todo o sistema, todo o tema das páginas.

E tal qual como eu falei no meu último projeto, eu mudei isso e mexi no style e nas funções nos js para que não pegue o tema de todo o projeto incluindo a janela baseada no index.html, assim eu pude finalmente dividir as janelas e também fazer algumas melhorias no estilo da segunda para diferenciar.