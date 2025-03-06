install:
	npm ci

game:
	node bin/brain-games.js

publish:
	npm publish --dry-run

calc:
	node bin/brain-calc.js

even:
	node bin/brain-even.js

gcd:
	node bin/brain-gcd.js