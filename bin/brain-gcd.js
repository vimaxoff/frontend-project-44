#!/usr/bin/env node
import { gcdData, gcdRules } from '../src/games/gcd-game.js';
import engine from '../src/index.js';

console.log('brain-gcd\n');
engine(gcdRules, gcdData);
