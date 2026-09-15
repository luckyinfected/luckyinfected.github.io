# Lucky Bio v3

Essa versão foi feita para o jeito que seu repositório está organizado: tudo na raiz.

## Arquivos que ficam na raiz

- index.html
- style.css
- script.js
- config.js
- avatar.png
- banner.gif
- infblox.png
- discord.svg
- spotify.svg
- github.svg
- music.mp3 (você adiciona)

## Avatar quebrado

A versão anterior procurava `assets/avatar.png`.
Agora procura diretamente:

`avatar.png`

Então basta deixar a imagem na raiz com esse nome.

## Banner deitado

Abra `config.js` e procure:

```js
bannerStyle: {
  rotate: -90,
  scale: 1.85,
  position: "center center"
}
```

- se estiver certo: não mexa
- se ficar girado para o outro lado: use `rotate: 90`
- se seu GIF original já estiver correto: use `rotate: 0`
- aumente/diminua `scale` para controlar o zoom

## Logo InfBlox

O arquivo `infblox.png` é um placeholder.
Substitua pelo PNG real da logo da InfBlox e mantenha o mesmo nome.

## Discord e Spotify

Já estão incluídos como:
- `discord.svg`
- `spotify.svg`

## Música

Suba seu MP3 na raiz com o nome:

`music.mp3`

O template já está apontando para ele.


## Alterações desta versão

- Corrigido avatar para `avatar.jpg` (arquivo real do seu projeto).
- Banner vertical 240x426 é rotacionado e dimensionado automaticamente.
- Removida a frase/cartão de citação.
- Conexões agora são links clicáveis.
- Player local foi trocado pelo embed oficial do Spotify.
- A música configurada é **Love Me Not — Ravyn Lenae**.
- Para trocar a música, cole outro link de faixa do Spotify em `spotify.trackUrl` no `config.js`.
