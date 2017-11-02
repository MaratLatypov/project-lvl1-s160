install:
	npm install
start:
	npm run babel-node -- 'src/bin/brain-games.js'
start2:
	npm run babel-node -- 'src/games/brain-even.js'
start3:
	npm run babel-node -- 'src/games/brain-calc.js'
publish:
	npm publish
lint:
	npm run eslint 'src'
