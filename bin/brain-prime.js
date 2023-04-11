#!/usr/bin/env node
import { primeData, primeRules } from '../src/games/prime-game.js';
import engine from '../src/index.js';

console.log('brain-prime\n');
engine(primeRules, primeData);
