#!/usr/bin/env node

import brainPrime from '../src/games/isPrime.js';
import { userName } from '../src/index.js';

console.log(`Hello ${userName}! \nAnswer "yes" if given number is prime. Otherwise answer "no".`);
console.log(brainPrime());
