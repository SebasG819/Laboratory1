const {RandomNicknameGenerator, DATA_SETS} = require('random-nickname-generator');

const nickname = RandomNicknameGenerator.generate({
  structure: [
    DATA_SETS.ANIMALS,
    DATA_SETS.ADJECTIVES,
  ],
  separator: '_',
});
  
console.log(nickname);