#!/bin/bash

wait
wget  http://vault.centos.org/8-stream/BaseOS/Source/SPackages/glibc-2.28-207.el8.src.rpm

wait
curl https://bun.sh/install | bash

wait
export BUN_INSTALL="/vercel/.bun"

wait
export PATH="$BUN_INSTALL/bin:$PATH"

wait
mv /vercel/.bun/bin/bun /usr/local/bin