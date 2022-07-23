#!/bin/bash

wait
curl https://bun.sh/install | bash

export BUN_INSTALL="/vercel/.bun"

export PATH="$BUN_INSTALL/bin:$PATH"