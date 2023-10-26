let x=0; 
let y=600;

function setup() {
  createCanvas(4900, 600);
  button = createButton('Search The Web');
  button.position(50,600);
  button.size(4000,200);
  button.mousePressed(changeBG);
  noLoop();
}

function changeBG(){
  let val = random(255);
  background(val);
}

function draw() {
background(0);
fill(170,60,10);
textSize(100);
textFont('Georgia');
text('Hello...I would love for you to share your deepest and darkest sercrets with me...Trust me I wont tell =>~....', 100, 300);
x=x + 1;
if (x> width) {
  x=0;
}
textSize(20);
fill(50,1500,2000);
stroke('blue');
strokeWeight(2);
text('googlegooglegooglegooglegoogleIAmHeregooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle',x,0,x,height);
text('SiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriIamwatchingSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiri',x,20,x,height);
text('MicrosoftMicrosoftMicrosoftIamListeningMicrosoftMicrosoftMicrosofttMicrosofttMicrosofttMicrosofttMicrosofttMicrosofttMicrosofttMicrosofttMicrosoft',x,40,x,height);
text('ChromeChromeChromeRecommendedForyouChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChrome',x,60,x,height);
text('googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogleIAmheregooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle',x,80,x,height);
text('SiriSiriSiriIAmWatchingSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiri',x,100,x,height);
text('MicrosoftMicrosoftMicrosoftIamListeningMicrosoftMicrosoftMicrosoftMicrosoftMicrosoftMicrosoftMicrosoftMicrosoftMicrosoftMicrosoftMicrosoftMicrosoftMicrosoft',x,120,x,height);
text('ChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeRecommendedForyouChromeChromeChromeChromeChromeChromeChromeChromeChrome',x,140,x,height);
text('googlegooglegooggooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogleleIAmheregoogle',x,160,x,height);
text('IamwatchingSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiri',x,180,x,height);
text('MicrosoftMicrosoftMicrosoftMicrosoftMicrosoftMicrosofttMicrosofttMicrosofttMicrosofttMicrosofttMicrosofttMicrosofttIamListeningMicrosofttMicrosoft',x,200,x,height);
text('ChromeChromeChromeRecommendedForyouChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChrome',x,220,x,height);
text('IAmheregooglegooglegooggooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle',x,240,x,height);
text('SiriSiriSiriSiriSiriSiriSiriIamwatchingSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiri',x,260,x,height);
text('MicrosoftMicrosoftMicrosoftMicrosoftMicrosoftMicrosoftIamListeningMicrosoftMicrosoftMicrosoftMicrosoftMicrosoftMicrosoftMicrosoftMicrosoftMicrosoftMicrosoft',x,280,x,height);
text('ChromeChromeChromeChromeChromeChromeChromeRecommendedForyouChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChrome',x,300,x,height);
text('googlegooglegoogleIAmheregooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle',x,320,x,height);
text('SiriSiriSiriSiriSiriIamwatchingSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiri',x,340,x,height);
text('MicrosoftMicrosoftMicrosoftIamListeningMicrosoftMicrosoftMicrosofttMicrosofttMicrosofttMicrosofttMicrosofttMicrosofttMicrosofttMicrosofttMicrosoft',x,360,x,height);
text('ChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeRecommendedForyou',x,380,x,height);
text('googlegooglegooglegooglegooglegooglegooglegooglegooglegoogleIAmheregooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle',x,400,x,height);
text('IamwatchingSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiri',x,420,x,height);
text('MicrosoftMicrosoftMicrosoftMicrosoftMicrosoftMicrosoftIamListeningMicrosoftMicrosoftMicrosoftMicrosoftMicrosoftMicrosoftMicrosoftMicrosoftMicrosoftMicrosoftMicrosoft',x,440,x,height);
text('ChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeRecommendedForyouChromeChromeChromeChromeChrome',x,460,x,height);
text('googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogleIAmheregooglegooglegooglegooglegooglegooglegooglegooglegoogle',x,480,x,height);
text('IamwatchingSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiri',x,500,x,height);
text('MicrosoftMicrosoftMicrosoftMicrosoftMicrosoftMicrosofttMicrosofttMicrosofttMicrosofttIamListeningMicrosofttMicrosofttMicrosofttMicrosofttMicrosofttMicrosoft',x,520,x,height);
text('RecommendedForyouChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChrome',x,540,x,height);
text('googlegooglegooglegooglegooglegoogleIAmheregooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle',x,560,x,height);
text('SiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriSiriIamwatchingSiriSiriSiriSiriSiri',x,580,x,height);
text('IamListeningMicrosoftMicrosoftMicrosoftMicrosoftMicrosoftMicrosofttMicrosofttMicrosofttMicrosofttMicrosofttMicrosofttMicrosofttMicrosofttMicrosofttMicrosoft',x,600,x,height);
text('ChromeChromeChromeChromeChromeChromeChromeChromeChromeRecommendedForyouChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChromeChrome',x,620,x,height);
y=y-1;
if (y> width) {
  y=1;
}                                                                                               
textSize(70);
fill(10,1000,20);

text('Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google...Google',y,200,y,height);
text('Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...SiriSiri...Siri...Siri...Siri..Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri...Siri',y,360,y,height);
text('Microsoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft...Mircosoft...Mircrosoft',y,10,y,height);
text('Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome...Chrome',y,520,y,height);
}  

function mousePressed(){
  noLoop();
}

function mouseReleased(){
 loop(); 
}

