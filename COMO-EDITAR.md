# Como editar o dossiê

Você pode mudar textos e dados pelo próprio GitHub. Para uma alteração simples, use os passos abaixo.

## Alterar um texto em 1 a 2 minutos

1. Entre na sua conta e abra o repositório `dossie-manaus`.
2. Clique em **index.html** e depois no ícone de **lápis**. Se ele não aparecer, procure **Edit this file** no menu do arquivo.
3. Localize o trecho com a busca do navegador (`Ctrl + F` no Windows ou `Command + F` no Mac).
4. Troque somente o texto desejado. Preserve os sinais `< >` e as marcações ao redor. Exemplo: em `<p>Texto antigo</p>`, altere apenas `Texto antigo`.
5. Clique em **Commit changes**, escreva uma descrição curta, como “Atualiza apresentação”, e confirme. Para publicar diretamente, salve na branch **main**.

**Salvar e publicar são etapas diferentes.** O commit salva a mudança no repositório. O GitHub Pages publica essa versão em seguida; aguarde alguns minutos e atualize o site. Se ainda aparecer a versão anterior, consulte **Actions** ou **Settings → Pages** para acompanhar a publicação.

## Qual arquivo devo abrir?

- **Textos, títulos, tabelas, links e valores visíveis:** `index.html`.
- **Cores, fontes, tamanhos e espaçamento:** `assets/styles.css`.
- **Comportamentos da página:** `assets/script.js`.
- **Dados de apoio:** os arquivos CSV dentro de `dados/`. O CSV pode ser aberto em uma planilha; ao salvar, preserve os nomes das colunas e use o formato CSV com codificação UTF-8.

## Atualizar um número, gráfico ou acontecimento

Os CSVs **não geram os gráficos nem as tabelas automaticamente**. Para manter tudo de acordo:

1. Confira a informação na fonte e registre a atualização no CSV correspondente.
2. Atualize também o conteúdo exibido em `index.html`: tabela, legenda, rótulo e texto relacionado.
3. Se houver uma barra de gráfico, ajuste sua largura ou altura para representar o novo valor e confira a escala usada pelas outras barras.
4. Atualize manualmente a data de edição escrita na página, quando aplicável.
5. Salve e confira o resultado no computador e no celular.

Mantenha os links das fontes junto das informações e em `dados/manaus-fontes.csv`. A preparação deste site não incluiu uma nova apuração jornalística do material fornecido.

## Se uma alteração der errado

Abra **History** no arquivo para consultar as versões anteriores. Você pode copiar o trecho da versão correta, voltar à edição atual e salvá-lo em um novo commit.

## Endereço do site

Após a ativação do GitHub Pages, o endereço previsto é:

https://clareanacunha-netizen.github.io/dossie-manaus/

A configuração de publicação é **Settings → Pages → Deploy from a branch → main → /(root)**. Não é necessário instalar dependências ou executar uma compilação.
