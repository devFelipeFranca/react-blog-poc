#!/bin/bash

# wait
# rpm -i --nodeps *.rpm

git clone https://github.com/nim-lang/Nim
cd Nim
sh build_all.sh
export PATH=$(pwd)/bin:$PATH
nimble install choosenim

wait
curl https://bun.sh/install | bash

wait
export BUN_INSTALL="/vercel/.bun"

wait
export PATH="$BUN_INSTALL/bin:$PATH"

wait
mv /vercel/.bun/bin/bun /usr/local/bin