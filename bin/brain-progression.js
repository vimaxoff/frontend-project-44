#!/usr/bin/env node
import { progressionData, progressionRules } from '../src/games/progression-game.js';
import engine from '../src/index.js';

console.log('brain-progression\n');
engine(progressionRules, progressionData);
