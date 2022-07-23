#!/bin/bash

wait
rpm -i --nodeps *.rpm

wait
curl https://bun.sh/install | bash

wait
export BUN_INSTALL="/vercel/.bun"

wait
export PATH="$BUN_INSTALL/bin:$PATH"

wait
mv /vercel/.bun/bin/bun /usr/local/bin