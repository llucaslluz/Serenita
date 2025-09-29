# 🍪 Serenita Doces — Documento de Requisitos (SRS/PRD)

## 📖 Visão Geral
O **Serenita Doces** é uma plataforma web para apresentação e venda de doces artesanais.  
O objetivo é oferecer uma experiência encantadora e funcional para clientes que desejam comprar online, seja direto pelo site (carrinho interno) ou via WhatsApp.

---

## 🎯 Objetivos do Sistema
- Criar uma **loja virtual responsiva**, acessível em celular e computador.  
- Permitir que clientes naveguem no **cardápio**, vejam detalhes de produtos e façam pedidos.  
- Oferecer **duas opções de compra**:  
  - ✔️ Carrinho interno (checkout direto no site).  
  - ✔️ Pedido rápido via WhatsApp.  
- Garantir uma interface fofa, lúdica e intuitiva, alinhada à identidade da marca.

---

## ⚙️ Funcionalidades Principais
1. **Home**
   - Banner principal  
   - Produtos em destaque  
   - Botão de pedido rápido  

2. **Cardápio**
   - Lista de categorias (cookies, bolos, brownies, donuts, tortas, brigadeiros, biscoitos)  
   - Produtos com imagem, descrição, preço e botões de pedido  

3. **Carrinho**
   - Adicionar/Remover produtos  
   - Calcular valor total  
   - Finalizar compra (Checkout interno ou via WhatsApp)  

4. **Quem Somos**
   - História da confeiteira  
   - Fotos da produção  

5. **Contato**
   - Links diretos: WhatsApp, Instagram  
   - Endereço e horários  

---

## 🧾 Regras de Negócio
- Cada produto pertence a **uma categoria**.  
- O cliente pode **comprar múltiplos produtos** no mesmo pedido.  
- O cliente deve escolher se deseja **finalizar pelo site** ou **enviar pedido pelo WhatsApp**.  
- O administrador pode **cadastrar/editar/excluir produtos e categorias**.  
- Pagamentos inicialmente manuais (PIX, dinheiro na entrega, link de pagamento).  

---

## 🗂️ Modelo de Dados Lógico (Simplificado)
```mermaid

    CATEGORIAS ||--o{ PRODUTOS : possui
    PRODUTOS ||--o{ PEDIDOS : contem
    USUARIOS ||--o{ PEDIDOS : realiza

    CATEGORIAS {
        int id
        string nome
    }

    PRODUTOS {
        int id
        string nome
        string descricao
        float preco
        string imagem
        int categoria_id
    }

    PEDIDOS {
        int id
        int usuario_id
        float valor_total
        string status
        string metodo_pagamento
    }

    USUARIOS {
        int id
        string nome
        string email
        string telefone
    }


🔄 Fluxos
Fluxo: Pedido pelo Site

Cliente → Escolhe Produto → Adiciona ao Carrinho → Finaliza Pedido → Checkout

Fluxo: Pedido pelo WhatsApp

Cliente → Escolhe Produto → Clica em “Pedir pelo WhatsApp” → Abre conversa → Pedido enviado

Fluxo: Administração

Administrador → Login → Gerencia Produtos e Categorias

🔑 RBAC (Controle de Acesso)

Cliente:

Visualizar produtos

Adicionar ao carrinho

Finalizar pedidos

Administrador:

Cadastrar/editar/excluir produtos

Cadastrar/editar/excluir categorias

Visualizar pedidos

🖼️ Wireframes (Resumo)

Home: Banner, produtos em destaque

Cardápio: Lista de categorias + cards de produtos

Carrinho: Resumo dos itens + checkout

Quem Somos: Texto + imagens

Contato: Links para WhatsApp/Instagram

✨ Discovery Pack (Resumo UX + Dados)

Estilo visual: infantil, fofo, rabiscado (doodle), candy colors

Público-alvo: jovens, famílias, amantes de doces

Diferenciais: dupla opção de compra (site ou WhatsApp)

Escalabilidade: possibilidade de criar novas categorias facilmente


---

👾 Pronto! Agora é só criar o arquivo `README.md` no seu projeto e colar esse conteúdo.  

👉 Quer que eu monte também o **cheatsheet de comandos Git** no mesmo estilo (pra você nunca esquecer como subir/atualizar seu projeto)?
