#!/usr/bin/env node

import brainProgression from '../src/games/progression.js';
import { userName } from '../src/index.js';

console.log(`Hello ${userName}! \nWhat number is missing in the progression?`);
console.log(brainProgression());
