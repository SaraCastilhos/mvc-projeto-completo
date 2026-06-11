# 📦 Sistema de Gerenciamento de Produtos – MVC com Express

![GitHub repo size](https://img.shields.io/github/repo-size/SaraCastilhos/Projeto-MVC)
![GitHub language count](https://img.shields.io/github/languages/count/SaraCastilhos/Projeto-MVC)
![Node Version](https://img.shields.io/badge/node-%3E%3D18-blue)

Aplicação web simples e funcional para gerenciamento de produtos, desenvolvida como atividade prática para demonstrar o padrão de arquitetura **MVC (Model-View-Controller)** com **Node.js** e **Express**. O sistema permite cadastrar, listar, editar, excluir e buscar produtos, utilizando armazenamento em memória (sem banco de dados).

---

## 🛠️ Tecnologias Utilizadas

- **Runtime:** Node.js
- **Framework Web:** Express
- **Template Engine:** EJS (Embedded JavaScript)
- **Front-end:** HTML5 + CSS3 (arquitetura responsiva)
- **Estilização:** CSS modular (global, home, produtos, contato, sobre)

---

## ✨ Funcionalidades Principais

- [x] **Páginas institucionais:** Home, Sobre, Contato (navegação simples)
- [x] **Listagem de produtos:** Exibe nome e preço em tabela responsiva
- [x] **Cadastro de produto:** Formulário com validação de campos obrigatórios
- [x] **Edição de produto:** Atualização inline com formulário dinâmico
- [x] **Exclusão de produto:** Remove item com confirmação visual
- [x] **Busca por nome:** Filtra produtos em tempo real (case insensitive)
- [x] **Feedback ao usuário:** Mensagens de sucesso/erro via query string (`?msg=...`)
- [x] **Armazenamento em memória:** Dados mantidos durante a execução (reinicia ao parar o servidor)

---

## 🖼️ Demonstração Visual

*Não há capturas de tela neste momento, mas você pode executar o projeto localmente e visualizar:*

- Tela inicial com boas‑vindas
- Página de produtos com tabela, busca e formulário de adição
- Modo de edição inline com campos pré‑preenchidos
- Estilo limpo e responsivo (adapta‑se a dispositivos móveis)

> 💡 *Sugestão para contribuição: adicione prints ou um GIF demonstrando o fluxo de uso.*

---

## 📦 Como Executar o Projeto

### 📋 Pré‑requisitos

Antes de começar, certifique‑se de ter instalado em sua máquina:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (versão 18 ou superior)

### 🔧 Passos para Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/SaraCastilhos/Projeto-MVC.git
   ```

2. **Acesse a pasta do projeto**
   ```bash
   cd Projeto-MVC
   ```

3. **Instale as dependências**
   ```bash
   npm install
   ```

4. **Inicie o servidor**
   ```bash
   npm start
   ```
   *O comando `start` está definido no `package.json` como `node app.js`.*

5. **Abra o navegador** e acesse:
   ```
   http://localhost:3000
   ```

---

## ⚙️ Variáveis de Ambiente e Configuração

O projeto **não exige** arquivo `.env` – a porta é fixa (`3000`) e não há dependências externas (banco de dados, chaves de API).

Caso deseje alterar a porta, edite a última linha do arquivo `app.js`:

```javascript
app.listen(3000, () => { ... }); // altere 3000 para a porta desejada
```

> 🔒 Em uma versão real de produção, recomenda‑se utilizar variáveis de ambiente com o pacote `dotenv` para gerenciar porta e outras configurações sensíveis.

---

## 📁 Estrutura do Projeto (MVC)

```
Projeto-MVC/
├── controllers/
│   └── produtoController.js   # Lógica das rotas (CRUD, renderização)
├── models/
│   └── produtoModel.js        # Array de produtos em memória
├── public/
│   └── CSS/                   # Estilos separados por página
│       ├── global.css
│       ├── home.css
│       ├── produtos.css
│       ├── contato.css
│       └── sobre.css
├── routes/
│   └── produtoRoutes.js       # Definição das rotas Express
├── views/
│   ├── home.ejs
│   ├── sobre.ejs
│   ├── contato.ejs
│   └── produtos.ejs
├── app.js                     # Configuração principal e servidor
├── package.json
└── README.md                  # (este arquivo)
```

---

## 🧪 Como Testar as Funcionalidades

| Funcionalidade        | Ação no navegador                                                                |
|-----------------------|----------------------------------------------------------------------------------|
| **Adicionar produto** | Na página `/produtos`, preencha o nome e preço e clique em "Adicionar".          |
| **Buscar produto**    | Digite parte do nome no campo de busca e clique em "Buscar".                     |
| **Editar produto**    | Clique no botão "Editar" ao lado do produto, altere os valores e salve.          |
| **Excluir produto**   | Clique no botão "Excluir" – o item é removido imediatamente.                     |
| **Mensagens**         | Após cada operação, uma mensagem de sucesso/erro aparece no topo da tabela.      |

> ⚠️ **Atenção:** Os produtos são armazenados apenas em memória. Ao reiniciar o servidor, os dados voltam aos valores iniciais (dois produtos de exemplo).

---

## 📌 Observações Técnicas

- **Validação:** O controller verifica se os campos `nome` e `preco` não estão vazios antes de adicionar ou editar.
- **Sanitização:** `nome.trim()` remove espaços extras; `parseFloat` converte preço para número.
- **Roteamento:** Utiliza parâmetros dinâmicos (`:index`) para edição e exclusão.
- **Arquivos estáticos:** CSS servido via `express.static('public')`.
- **Navegação:** Menu comum em todas as páginas (arquivos `.ejs` separados).

---

## 👩‍💻 Autora

**Sara Amabili Castilhos**  
- GitHub: [@SaraCastilhos](https://github.com/SaraCastilhos)  
- Desenvolvido como atividade prática para a disciplina **Criação de Sites** – 2026.
