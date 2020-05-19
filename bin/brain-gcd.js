#!/usr/bin/env node

import brainGcd from '../src/games/gcd.js';
import { userName } from '../src/index.js';

console.log(`Hello ${userName}! \nFind the greatest common divisor of given numbers.`);
console.log(brainGcd());
