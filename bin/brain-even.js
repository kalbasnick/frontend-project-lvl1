#!/usr/bin/env node

import brainEven from '../src/games/isEven.js';
import { userName } from '../src/index.js';

console.log(`Hello ${userName}! \nAnswer "yes" if the number is even, otherwise answer "no".`);
console.log(brainEven());
