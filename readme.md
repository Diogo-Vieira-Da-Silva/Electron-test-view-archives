🎯 Objectives:

Show the atual path of the folder – ✅

List the files and folders on the directory – ✅

Differentiate visualy the files and folders  - ✅

Allow to enter into a folder by clicking on it – 

Implement a Back button to the previous folder – ✅

Update the list while navegating in the folders – ✅

Read and show the content of the .json and .txt files – ✅

Use IPC to the communication between renderer and main – ✅

Use FS in the main process to access the files – ✅

Use path to manipulate the paths correctly – ✅

Maintain control of the current directory - ✅

Take care of errors - ✅


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

--------------------------------------------TRADUÇÃO-----------------------------------------

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