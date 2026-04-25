# Learning in Public Blog

Blog pessoal estático em Hugo para documentar estudos de Engenharia Elétrica, Programação e Inglês técnico.

## Recursos

- Suporte a LaTeX com KaTeX
- Syntax highlighting para C#, Python, Java e C++
- Organização por pastas/seções: `/calculo`, `/circuitos`, `/programacao`, `/ingles`
- Navegação hierárquica em `Tópicos`: Pastas > Artigos
- Busca global por palavras e frases em todo o conteúdo
- Toggle Light/Dark no menu com persistência da preferência
- Estrutura pronta para deploy gratuito em GitHub Pages, Vercel ou Netlify

## Estrutura

- `content/` contém os posts e as seções
- `layouts/` contém os templates do site
- `static/css/main.css` controla o visual
- `hugo.toml` centraliza a configuração

## Como usar

1. Instale o Hugo Extended.
2. Execute o servidor local com `hugo server -D`.
3. Crie novos posts dentro da pasta da seção desejada.
4. Use `Tópicos` no menu para navegar em: Pastas (assuntos) > Artigos.
5. A página `/topicos` também mostra a hierarquia completa automaticamente.
6. Use a barra de busca no topo (ou acesse `/search`) para encontrar posts por termo.
7. Use o botão `Tema` no menu para alternar entre modo claro e escuro.
8. Publique usando GitHub Pages, Vercel ou Netlify.

## Convenção de posts

Cada seção usa front matter com `cascade.categories` para categorizar automaticamente os posts da pasta.

Exemplo:

```yaml
---
title: "Meu post"
date: 2026-04-25T10:00:00-03:00
draft: false
tags: ["estudo", "tema"]
---
```

## Próximos passos sugeridos

- Adicionar RSS e sitemap customizados, se desejar
- Criar páginas de autoria e sobre
- Integrar CI/CD para deploy automático
