var campoVision = 45;
var relacionAspecto = window.innerWidth / window.innerHeight;
var planoCercano = 1;
var planoLejano = 1000;


var camara = new THREE.PerspectiveCamera(campoVision, relacionAspecto, planoCercano, planoLejano);
//camara.position.x = 100;
//camara.position.y = 100;
camara.position.z = 100;

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
var intialMaterial = colorGris;
for (i = 0; i < 8; i++) {
  for (j = 0; j < 8; j++) {
    var material = colorGris;
    if (isEven(i)) {
      if (isOdd(j)) {
        material = colorBlanco;
      } 
    } else {
      if (isEven(j)) {
        material = colorBlanco;
      } 
    }
    var cubo = new THREE.Mesh(new THREE.BoxGeometry(cubeSize,cubeSize,cubeSize),material);
    cubo.position.x = j*cubeSize;
    cubo.poistion.y = i*cubeSize;
    cuadros.push(cubo);
  }
}

//////////////////////////////////////////////////////////////////
var escena = new THREE.Scene();
for (cube in cuadros) {
escena.add(cube);
}

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
