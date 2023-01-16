#!/usr/bin/env node
/*
import calculate from '../src/games/calc-game.js';

calculate();
*/
import { calcData, calcRules } from '../src/games/calc-game.js';
import engine from '../src/index.js';

console.log('brain-calc\n');
engine(calcRules, calcData);
