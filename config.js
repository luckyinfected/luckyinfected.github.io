/*
  TUDO QUE VOCÊ PRECISA MEXER FICA AQUI.

  ARQUIVOS NA RAIZ DO REPOSITÓRIO:
  avatar.jpg
  banner.gif
  infblox.png
  music.mp3
*/

window.BIO_CONFIG = {
  pageTitle: "lucky",

  colors: {
    accent: "#7c432c",
    accent2: "#b16c41"
  },

  profile: {
    name: "lucky",
    username: "@luckyinfected",
    domain: "luckyinfected",
    bioTitle: "lucky, its me",
    bioText: "algumas coisas não precisam de explicação.",
    avatar: "avatar.jpg",
    banner: "banner.gif",
    footer: "lucky"
  },

  /*
    AJUSTE DO BANNER

    Pelo print que você mandou, o GIF está deitado.
    Por isso deixei rotate: -90.

    Se o seu GIF ficar certo sem girar:
    rotate: 0

    Se girar para o lado errado:
    rotate: 90

    scale aumenta o zoom.
    position muda o enquadramento antes da rotação.
  */
  bannerStyle: {
    rotate: -90,
    position: "center center"
  },

  badges: [
    { icon: "◉", text: "não perturbe" },
    { icon: "✦", text: "owner" },
    { icon: "◆", text: "perfil pessoal" }
  ],

  links: [
    {
      title: "InfBlox",
      subtitle: "infblox.com.br",
      url: "https://infblox.com.br/",
      icon: "infblox.png",
      iconClass: "infblox"
    },
    {
      title: "Discord",
      subtitle: "discord.gg/c8upFhfvBw",
      url: "https://discord.gg/c8upFhfvBw",
      icon: "discord.svg"
    },
    {
      title: "Spotify",
      subtitle: "@luckyinfected",
      url: "https://open.spotify.com/",
      icon: "spotify.svg"
    },
    {
      title: "GitHub",
      subtitle: "@luckyinfected",
      url: "https://github.com/luckyinfected",
      icon: "github.svg"
    }
  ],

  connections: [
    {
      name: "Discord",
      value: "lucky",
      icon: "discord.svg",
      url: "https://discord.gg/c8upFhfvBw"
    },
    {
      name: "Spotify",
      value: "@luckyinfected",
      icon: "spotify.svg",
      url: "https://open.spotify.com/user/31p4meczzzm372m3qx3cg7wqdsuy?si=1489856b27b94bcb"
    }
  ],

  spotify: {
    trackUrl: "https://open.spotify.com/intl-pt/track/1UNEuG9DYOWiikf00ayr52?si=169740d575ea460e",
    compact: false
  },

  particles: true
};
