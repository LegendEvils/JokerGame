var homeImage, storyImage, crowdImage, jokerSitting, messyRoom, playImage;
var clothesImage, bottleImage, knifeImage, earringImage;
var gamestate = "homestate"
var home, story, crowd, joker, room, play;
var clothes, bottle, knife, earring;

function preload(){
  homeImage = loadImage('jokerFrontImage[1].jpg')
  storyImage = loadImage("jokerFrontImage[2].jpg")
  crowdImage = loadImage("crowd[3].jpg")
  jokerSitting = loadImage("jokerSitting[4].jpg")
  messyRoom = loadImage("aMessyRoom2[5].jpg")
  playImage = loadImage("playButton-[1].png")
  clothesImage = loadImage("bloodClothes-clue(2).png")
  bottleImage = loadImage("bloodBottle-clue(4).png")
  knifeImage = loadImage("bloodKnife-clue(1).png")
  earringImage = loadImage("victimEarring-clue(3).png")
}

function setup() {
  createCanvas(displayWidth, displayHeight);
 // createSprite(400, 200, 50, 50);
  home = createSprite(displayWidth/2, displayHeight/2);
  home.addImage(homeImage);

  story = createSprite(displayWidth/2, displayHeight/2);
  story.addImage(storyImage);
  story.scale = 0.4

  crowd = createSprite(displayWidth/2, displayHeight/2);
  crowd.addImage(crowdImage);
  crowd.scale = 2

  joker = createSprite(displayWidth/2, displayHeight/2);
  joker.addImage(jokerSitting);
  joker.scale = 0.4

  room = createSprite(displayWidth/2, displayHeight/2);
  room.addImage(messyRoom);
  room.scale = 0.3

  clothes = createSprite(displayWidth/2 + 150, displayHeight/2 + 350);
  clothes.addImage(clothesImage);
  clothes.scale = 0.2

  knife = createSprite(displayWidth/2 + 200, displayHeight/2 + 100);
  knife.addImage(knifeImage);
  knife.scale = 0.3

  bottle = createSprite(displayWidth/2 - 250, displayHeight/2 + 250);
  bottle.addImage(bottleImage);
  bottle.scale = 0.1

  earring = createSprite(displayWidth/2 + 70, displayHeight/2 + 100);
  earring.addImage(earringImage);
  earring.scale = 0.05

  play = createSprite(displayWidth/2 - 80, displayHeight/2 + 150);
  play.addImage(playImage);
}

function draw() {
  background(255,255,255);  fill("yellow");
  textSize(20)
  fill("yellow");
  drawSprites();
  if(gamestate==="homestate"){
    story.visible = false
    crowd.visible = false
    joker.visible = false
    room.visible = false
    knife.visible = false
    bottle.visible = false
    earring.visible = false
    clothes.visible = false
    gamestate = "playText"
   
  }
  if(gamestate==="playText"){
    text("Press the PLAY Button to continue.", displayWidth/2 - 80, displayHeight/2 + 200);
  }
  if(gamestate==="storystate"){
    story.visible = true
    home.visible = false
    crowd.visible = false
    joker.visible = false
    room.visible = false
    play.visible = false
    knife.visible = false
    bottle.visible = false
    earring.visible = false
    clothes.visible = false
    gamestate = "rightText"
  }
  if(gamestate==="rightText"){
    text("There is a Clown who hunts people who visit his circus.", displayWidth/2 - 200, displayHeight/2 - 200);
    text("He kills them in his house.", displayWidth/2 - 200, displayHeight/2 - 230)
    text("You have to find the clues to enjoy the thrill of the game.", displayWidth/2 - 200, displayHeight/2 - 260);
    text("Press the Right Arrow Key to proceed.",displayWidth/2 - 200, displayHeight/2 + 300 );
  }
  if(gamestate==="crowdstate"){
    crowd.visible = true
    home.visible = false
    story.visible = false
    joker.visible = false
    room.visible = false
    play.visible = false
    knife.visible = false
    bottle.visible = false
    earring.visible = false
    clothes.visible = false
    gamestate = "enterText"; 
  }
  if(gamestate==="enterText"){
    text("He hunts a person from the crowd", displayWidth/2 - 200, displayHeight/2 - 200);
    text("Press the Enter Key to proceed.",displayWidth/2 - 200, displayHeight/2 + 300 );

  }
  if(gamestate==="jokerstate"){
    room.visible = false
    home.visible = false
    story.visible = false
    joker.visible = true
    crowd.visible = false
    play.visible = false
    knife.visible = false
    bottle.visible = false
    earring.visible = false
    clothes.visible = false
    gamestate = "spaceText";
  }
  if(gamestate==="spaceText"){
    text("Press the Space Key to proceed.",displayWidth/2 - 200, displayHeight/2 + 300 );
  }

  if(keyDown("space")){
    gamestate = "roomstate"
  }
  if(keyDown("enter")){
    gamestate = "jokerstate";
  }
  if(keyDown(RIGHT_ARROW)){
    gamestate = "crowdstate";
  }
  if(mousePressedOver(play)){
    gamestate = "storystate";

  }
  
  if(gamestate==="roomstate"){
    room.visible = true
    home.visible = false
    story.visible = false
    crowd.visible = false
    joker.visible = false
    play.visible = false
    knife.visible = true
    bottle.visible = true
    earring.visible = true
    clothes.visible = true
    
    text("* Clues :", displayWidth/2 - 350, displayHeight/2 + 260);
    text("1. The Jewellary",displayWidth/2 - 350, displayHeight/2 + 300);
    text("2. The victim was tortured with.", displayWidth/2 - 350, displayHeight/2 + 340);
    text("3. The material with blood.", displayWidth/2 - 350, displayHeight/2 + 380);
    text("4. The murder weapon.", displayWidth/2 - 350, displayHeight/2 + 420);
    
    if(mousePressedOver(clothes)){
      clothes.destroy();
    }
    if(mousePressedOver(earring)){
      earring.destroy();
    }
    if(mousePressedOver(bottle)){
      bottle.destroy();
    }
     if(mousePressedOver(knife)){
      knife.destroy();
      gamestate = "end";
     
    }
  }
  if(gamestate==="end"){
    fill("red");
    stroke("black");
    textSize(25);
    strokeWeight(4);
    text("Congrats! The Clues against the culprit has been found.", displayWidth/2 - 300, displayHeight/2 + 100);
  }
}