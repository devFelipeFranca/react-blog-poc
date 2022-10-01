# Oiê, Lipe aqui...

Esta é apenas uma poc para experimentar o que temos de "melhor" e mais rápido atualmente em react.

A real intenção desta poc é unir o que o [ViteJs](https://vitejs.dev/) e o [Bun](https://bun.sh/) tem pra oferecer juntos ao react, o projeto tem somente configurações iniciais e daqui pra frente vai de acordo com a criatividade de cada um :D!


# Como Rodar?

Tenha o [Docker](https://docs.docker.com/desktop/install/windows-install/), [nodejs](https://nodejs.org/en/download/) e o [Bun](https://bun.sh/)  instalado em sua máquina.

Dentro de `scripts` existem alguns arquivos .sh que irão configurar o docker da melhor forma de acordo com sua máquina.

Obs: *Para usuários de macOS silicon, o bun não possui uma boa compatibilidade com o mesmo, então o projeto irá rodar usando o recurso de compatibilidade do [yarn](https://yarnpkg.com/).*

Execute:

Para  gerar o Dockerfile corretamente use: `./scripts/docker-sync.sh`;

Para montar a imagem docker corretamente use: `./scripts/docker-up.sh`;

Em seguida verifique o *"log"* em qual porta está rodando sua aplicação e divirta-se.
