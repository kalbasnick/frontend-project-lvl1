#!/usr/bin/env node

import calc from '../src/games/calc.js';
import { userName } from '../src/index.js';

console.log(`Hello ${userName}! \nWhat is the result of the expression?`);
console.log(calc());
