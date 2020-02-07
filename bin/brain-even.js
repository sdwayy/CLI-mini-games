#!/usr/bin/env node

import {
  brainEvenLogic,
  getGameGreeting,
} from '../src/index.js';

getGameGreeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log(brainEvenLogic());
