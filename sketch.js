var astronauta,astronautaImg;
var n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15;

function preload(){
  astronautaImg=loadImage("imagenes/astronauta.png");
  n1=loadImage("imagenes/1.png");
  n2=loadImage("imagenes/2.png");
  n3=loadImage("imagenes/3.png");
  n4=loadImage("imagenes/4.png");
  n5=loadImage("imagenes/5.png");
  n6=loadImage("imagenes/6.png");
  n7=loadImage("imagenes/7.png");
  n8=loadImage("imagenes/8.png");
  n9=loadImage("imagenes/9.png");
  n10=loadImage("imagenes/10.png");
  n11=loadImage("imagenes/11.jpg");
  n12=loadImage("imagenes/12.png");
  n13=loadImage("imagenes/13.png");
  n14=loadImage("imagenes/14.png");
  n15=loadImage("imagenes/15.png");
}

function setup(){
  
  createCanvas(windowWidth, windowHeight);
  astronauta=createSprite(width / 2, height-100, 20, 20);
  astronauta.addImage("astronauta",astronautaImg);
  astronauta.scale=0.4;
  
  
}

function draw() {
  background(0);
  drawSprites();
  
  generaNumeros();
  //haciendo que funcione para mouse o para touches
  if (touches.length > 0) {
    let dx = touches[0].x - touches[0].x;
    astronauta.position.x += dx;
    return false;
  }else {
    astronauta.x = mouseX; 
  }
}

function generaNumeros(){
  if(frameCount % 60 === 0){

    var numeros = createSprite(Math.round(random(windowWidth+10,windowHeight-10)),0,20,30);
    numeros.scale=0.4;
    numeros.velocityY =5;

    var opcion=Math.round(random(1,15));

  switch (opcion){
    case 1:
      numeros.addImage(n1);
    break;
    case 2:
      numeros.addImage(n2);
    break;
    case 3:
      numeros.addImage(n3);
    break;
    case 4:
      numeros.addImage(n4);
    break;
    case 5:
      numeros.addImage(n5);
    break;
    case 6:
      numeros.addImage(n6);
    break;
    case 7:
      numeros.addImage(n7);
    break;
    case 8:
      numeros.addImage(n8);
    break;
    case 9:
      numeros.addImage(n9);
    break;
    case 10:
      numeros.addImage(n10);
    break;
    case 11:
      numeros.addImage(n11);
    break;
    case 12:
      numeros.addImage(n12);
    break;
    case 13:
      numeros.addImage(n13);
    break;
    case 14:
      numeros.addImage(n14);
    break;
    case 15:
      numeros.addImage(n15);
    break;

  }
  }
  
}
