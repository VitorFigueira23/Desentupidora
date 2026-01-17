# Guia de Otimização SEO - Desentupidora Express

## 📋 Resumo das Otimizações Implementadas

Este documento descreve todas as otimizações SEO implementadas no site e como personalizá-las para sua cidade específica.

---

## 1. Meta Tags e Estrutura HTML

### Alterações Realizadas

**Arquivo:** `client/index.html`

✅ **Linguagem:** Alterada para `pt-BR` (português brasileiro)

✅ **Title Tag:** Otimizado com palavras-chave principais
```html
<title>ExpressTec | Desentupimento 24h em Sua Cidade</title>
```

✅ **Meta Description:** Descrição concisa com CTA
```html
<meta name="description" content="ExpressTec - Serviço de desentupimento rápido, profissional e com garantia. Atendimento 24 horas em sua cidade. Chegamos em até 30 minutos!" />
```

✅ **Meta Keywords:** Palavras-chave estratégicas
```html
<meta name="keywords" content="desentupidora, desentupimento, desentupidor, cano entupido, desentupidora 24 horas, desentupidora em minha cidade, serviço de desentupimento" />
```

✅ **Open Graph Tags:** Otimizados para compartilhamento em redes sociais

✅ **Twitter Card Tags:** Melhor visualização em tweets

---

## 2. Schema Markup (Dados Estruturados)

### LocalBusiness Schema

Implementado schema JSON-LD para **LocalBusiness**, que ajuda o Google a entender:
- Nome e descrição do negócio
- Telefone e email
- Endereço completo
- Horário de funcionamento (24 horas)
- Avaliações agregadas (rating)
- Links para redes sociais

**Localização:** `client/index.html` (linhas 32-70)

### Como Personalizar

Edite os seguintes campos no schema:

```json
{
  "name": "ExpressTec",  // Seu nome
  "url": "https://expresstec.com.br",  // Seu domínio
  "telephone": "+55 11 9 9999-9999",  // Seu telefone
  "email": "contato@desentupidora-express.com.br",  // Seu email
  "address": {
    "streetAddress": "Sua Rua, 123",  // Seu endereço
    "addressLocality": "Sua Cidade",  // Sua cidade
    "addressRegion": "SP",  // Seu estado
    "postalCode": "00000-000",  // Seu CEP
    "addressCountry": "BR"
  },
  "sameAs": [
    "https://www.facebook.com/seu-perfil",
    "https://www.instagram.com/seu-perfil",
    "https://wa.me/seu-numero"
  ]
}
```

---

## 3. Conteúdo Otimizado para SEO

### Palavras-Chave Principais

O site foi otimizado para as seguintes palavras-chave:

| Palavra-Chave | Localização | Prioridade |
|---|---|---|
| desentupidora | Title, H1, H2, descrição | Alta |
| desentupimento | Title, H1, H2, conteúdo | Alta |
| desentupidor | Meta keywords | Média |
| cano entupido | Meta keywords, conteúdo | Média |
| desentupidora 24 horas | Meta keywords, conteúdo | Alta |
| desentupidora em [cidade] | Conteúdo, schema | Alta |
| serviço de desentupimento | Meta keywords, conteúdo | Média |

### Otimizações de Conteúdo

✅ **H1 Tag:** Contém palavra-chave principal
```html
<h1>Desentupidora em Sua Cidade? Nós Resolvemos Em instantes</h1>
```

✅ **H2 Tags:** Estrutura semântica com palavras-chave
- "Tipos de Desentupimento Profissional"
- "Desentupimento de Pias e Ralos"
- "Desentupimento de Vasos Sanitários"
- etc.

✅ **Descrição:** Inclui palavras-chave naturalmente

✅ **Alt Text em Imagens:** Todas as imagens possuem descrições relevantes

---

## 4. Arquivos de Configuração SEO

### robots.txt

**Localização:** `client/public/robots.txt`

Controla como os bots dos mecanismos de busca rastreiam o site:
- Permite acesso geral
- Bloqueia diretórios administrativos
- Define crawl delay
- Aponta para o sitemap

### sitemap.xml

**Localização:** `client/public/sitemap.xml`

Mapa do site em formato XML que:
- Lista todas as URLs importantes
- Inclui datas de última modificação
- Define prioridades
- Inclui imagens com descrições

---

## 5. Otimizações de Performance (Impacto em SEO)

### Preload de Recursos Críticos

Adicionado preload para imagens críticas:
```html
<link rel="preload" as="image" href="/images/hero-bg.jpg" />
<link rel="preload" as="image" href="/images/service-icon-1.png" />
```

### Canonical URL

```html
<link rel="canonical" href="https://desentupidora-express.com.br" />
```

Evita problemas de conteúdo duplicado.

---

## 6. Próximos Passos Recomendados

### Essencial

1. **Google Search Console**
   - Acesse: https://search.google.com/search-console
   - Adicione seu domínio
   - Envie o sitemap.xml
   - Verifique a propriedade do site

2. **Google Business Profile**
   - Acesse: https://business.google.com
   - Crie/atualize seu perfil local
   - Adicione fotos, horários, categorias
   - Responda a avaliações

3. **Personalizar Meta Tags**
   - Substitua "Sua Cidade" pelo nome real
   - Atualize telefone, email e endereço
   - Adicione links corretos para redes sociais

### Importante

4. **Adicionar Google Site Verification**
   - No Google Search Console, obtenha o código de verificação
   - Descomente a linha no `client/index.html`:
   ```html
   <meta name="google-site-verification" content="seu-codigo-aqui" />
   ```

5. **Criar Conteúdo Local**
   - Adicione páginas específicas por bairro/região
   - Crie blog posts sobre dicas de manutenção
   - Inclua depoimentos de clientes locais

6. **Backlinks Locais**
   - Registre em diretórios locais (Google Maps, Yelp, etc.)
   - Solicite links de sites parceiros
   - Crie conteúdo que outros sites queiram linkar

### Avançado

7. **Monitoramento Contínuo**
   - Use Google Analytics para acompanhar tráfego
   - Monitore posições de palavras-chave
   - Analise comportamento de usuários

8. **Otimização Contínua**
   - Atualize conteúdo regularmente
   - Adicione mais serviços e detalhes
   - Implemente FAQ schema para perguntas comuns

---

## 7. Palavras-Chave por Localidade

Para otimizar para sua cidade específica, adapte as palavras-chave:

### Exemplo para São Paulo:
- desentupidora em São Paulo
- desentupimento em SP
- desentupidor São Paulo
- cano entupido São Paulo
- desentupidora 24 horas São Paulo

### Exemplo para Rio de Janeiro:
- desentupidora no Rio de Janeiro
- desentupimento RJ
- desentupidor Rio
- cano entupido Rio de Janeiro
- desentupidora 24 horas Rio

### Como Implementar

1. Edite o `client/index.html` e atualize:
   - `<title>` tag
   - `<meta name="description">`
   - `<meta name="keywords">`
   - Open Graph tags

2. Edite `client/src/pages/Home.tsx`:
   - Atualize o H1 com sua cidade
   - Personalize descrições
   - Adicione informações locais

3. Atualize o schema JSON-LD com:
   - Endereço correto
   - Cidade e estado
   - Telefone local

---

## 8. Checklist de Implementação

- [ ] Personalizar meta tags com sua cidade
- [ ] Atualizar schema JSON-LD com informações reais
- [ ] Criar conta no Google Search Console
- [ ] Criar/atualizar Google Business Profile
- [ ] Enviar sitemap.xml ao Google
- [ ] Verificar site no Google Search Console
- [ ] Adicionar Google Site Verification meta tag
- [ ] Configurar Google Analytics
- [ ] Testar com Google Mobile-Friendly Test
- [ ] Monitorar posições de palavras-chave
- [ ] Criar conteúdo adicional (blog, FAQ)
- [ ] Implementar backlinks locais

---

## 9. Ferramentas Recomendadas

| Ferramenta | Uso | Link |
|---|---|---|
| Google Search Console | Monitorar indexação | https://search.google.com/search-console |
| Google Business Profile | Gerenciar perfil local | https://business.google.com |
| Google Analytics | Analisar tráfego | https://analytics.google.com |
| SEMrush | Pesquisa de palavras-chave | https://www.semrush.com |
| Ahrefs | Análise de backlinks | https://ahrefs.com |
| Google Mobile-Friendly Test | Testar responsividade | https://search.google.com/test/mobile-friendly |
| Lighthouse | Auditoria de performance | Chrome DevTools |

---

## 10. Contato e Suporte

Para dúvidas sobre as otimizações implementadas, consulte este guia ou procure um especialista em SEO local.

**Última atualização:** 09 de janeiro de 2026
