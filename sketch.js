var astronauta,astronautaImg;
var n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15;
var iconoSumasImg,iconoSumas;
var objetivoSumas=0;
var puntaje=0;
var groupNumeros;
var numeros;
function preload(){
  astronautaImg=loadImage("imagenes/astronauta.png");
  iconoSumasImg=loadImage("imagenes/iconoSumas.png");
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

  iconoSumas=createSprite(width -300, height-650, 20, 20);
  iconoSumas.addImage("icono de sumas",iconoSumasImg);

  groupNumeros=new Group();
  
}
function objetivoSumasF(){
  objetivoSumas=Math.round(random(10,20));
}
function draw() {
  background(0);
  drawSprites();
  
  generaNumeros();
  
  
  
  if(objetivoSumas===puntaje){
    objetivoSumasF();
  }
  textSize(50);
  text(objetivoSumas,width-330,height-570)

}

  function generaNumeros(){
    if(frameCount % 60 === 0){

      numeros = createSprite(Math.round(random(80,windowWidth-80)),0,20,30);
      numeros.scale=0.4;
      numeros.velocityY =5;

      var opcion=Math.round(random(1,15));

      switch (opcion) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
          numeros.addImage(window['n' + opcion]);
          numeros.valor = opcion;
               
            break;
        default:
            // Caso por defecto
            break;
      }
      //cambiando profundidad de astronauta para que salga sobre los numeros
      groupNumeros.add(numeros);

      astronauta.depth=numeros.depth;
      astronauta.depth=astronauta.depth+1;
    
    }
    
    
  }

function mouseMoved() {
  // Esta función se ejecuta cuando el ratón se mueve o el dedo arrastra en la pantalla
  astronauta.position.x = mouseX;
}


