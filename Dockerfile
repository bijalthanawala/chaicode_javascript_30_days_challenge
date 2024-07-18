FROM node:alpine

USER node
WORKDIR /home/node
RUN mkdir js
RUN echo -e '// eslint.config.mjs'                  '\n' \
            'import js from "@eslint/js";'          '\n' \
            ''                                      '\n' \
            'export default ['                      '\n' \
            '   js.configs.all,'                    '\n' \
            '   {'                                  '\n' \
            '       rules: {'                       '\n' \
            '           "no-console": "off"',       '\n' \
            '           "no-magic-numbers": "off"', '\n' \
            '           "no-ternary": "off"',       '\n' \
            '       },'                             '\n' \
            '   }',                                 '\n' \
            '];'                                    '\n' > eslint.config.mjs

RUN npm install --save-dev eslint @eslint/js

ENTRYPOINT ["npx", "eslint"]

# docker run --rm --volume $(pwd):/home/node/js bijalatdocker/node_eslint /home/node/js/*.js
