var colorGris = new THREE.Color("rgb(30, 30, 30)");
var materialGris = new THREE.MeshBasicMaterial();
materialGris.color = colorGris;
var colorBlanco = new THREE.Color("rgb(255, 255, 255)");
var materialBlanco = new THREE.MeshBasicMaterial();
materialBlanco.color = colorBlanco;

function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}

var cuadros = [];
var cubeSize = 10;
for (i = 0; i < 8; i++) {
  for (j = 0; j < 8; j++) {
    var material = materialGris;
    if (isEven(i)) {
      if (isOdd(j)) {
        material = materialBlanco;
      } 
    } else {
      if (isEven(j)) {
        material = materialBlanco;
      } 
    }
    var geometry = new THREE.BoxGeometry( 10, 10, 10 );
    var cubo = new THREE.Mesh(geometry,material);
    cubo.position.x = j*cubeSize;
    cubo.position.y = i*cubeSize; 
    cuadros.push(cubo);
  }
}
// Join cuadros
for (i = 1; i < 64; i++) {
cuadros[0].add(cuadros[i]);
}
// var cuboS = new THREE.Mesh(new THREE.BoxGeometry(cubeSize,cubeSize,cubeSize),material);
//////////////////////////////////////////////////////////////////
var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;
camara.position.x = 65;
camara.position.y = -70;
camara.lookAt(new THREE.Vector3(35,35,11))

var escena = new THREE.Scene();
for (i = 0; i < 64; i++) {
escena.add(cuadros[i]);
}

//Lados o bordes del tablero
var materialBorde = new THREE.MeshBasicMaterial();
materialBorde.color = new THREE.Color("rgb(200, 130, 60)");

var geometryLado1 = new THREE.BoxGeometry( 10, 100, 10 );
var geometryLado2 = new THREE.BoxGeometry( 100, 10, 10 );
var geometryLado3 = new THREE.BoxGeometry( 100, 10, 10 );
var geometryLado4 = new THREE.BoxGeometry( 10, 100, 10 );
var lado1 = new THREE.Mesh(geometryLado1,materialBorde);
var lado2 = new THREE.Mesh(geometryLado2,materialBorde);
var lado3 = new THREE.Mesh(geometryLado3,materialBorde);
var lado4 = new THREE.Mesh(geometryLado4,materialBorde);
lado1.position.x = -10;
lado1.position.y = 35;
lado2.position.x = 35;
lado2.position.y = -10;
lado3.position.x = 35;
lado3.position.y = 80;
lado4.position.x = 80;
lado4.position.y = 35;
escena.add(lado1);
escena.add(lado2);
escena.add(lado3);
escena.add(lado4);


var torres = [];

for (i = 0; i < 4; i++) {
   torres[i] = mallaFinal3.clone();
   torres[i].rotateX(Math.PI/2);
   torres[i].geometry.scale(0.6,0.6,0.6);
   torres[i].position.z = 10
   escena.add(torres[i]);
}

torres[0].position.y = -2;
torres[0].position.x = 2;
torres[1].position.y = -2;
torres[1].position.x = 69;
torres[2].position.y = 64;
torres[2].position.x = 2;
torres[3].position.y = 64;
torres[3].position.x = 69;

torres[2].material = new THREE.MeshLambertMaterial({color:colorGris});
torres[3].material = new THREE.MeshLambertMaterial({color:colorGris});

var iluminacionAmbiental = new THREE.AmbientLight(0x888888);
escena.add(iluminacionAmbiental);


var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
