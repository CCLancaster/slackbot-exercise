// Set this assignment to true if you do want to use it.
module.exports.ACTIVATE_BOT = true;

module.exports.botScripts = [
  {
    label: 'An Example Script',
    prompt: 'Good Evening',
    handler: function () {
      return 'Good Evening to You!';
    },
  },
  {
  label: 'This is a magic eight ball buddy via Big Gilly',
  prompt: 'My name is #{name}, whats my destiny',
  handler: function(params){
    let userName= params.name;
    userName ? console.log("Hello," + userName + " !") : console.log("Hello!");
    const randomNumber = Math.floor(Math.random() * 8);
    let eightBall= "";
    switch(randomNumber){
      case 0:
      eightBall= 'Reconsider this question';
      break;
      case 1:
      eightBall='Here we go agian...'
      break;
      case 2:
      eightball='Really dude? why... like why...';
      break;
      case 3:
      eightBall='I dont get paid enough for this';
      break;
      case 4:
      eightBall='Its not what your doing right now bud.';
      break;
      case 5:
      eightBall='Eh, maybe you have some purpose';
      break;
      case 6:
      eightBall='You can be a sailor';
      break;
      case 7:
      eightBall='Just be a programmer and live happy!';
      break;
    }
    console.log(eightBall)
  },
  isCaseSensitive:false,
  isListening:true,
  isReply:true,
}  
];
