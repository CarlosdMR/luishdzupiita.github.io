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
    var cubo = new THREE.Mesh(new THREE.BoxGeometry(cubeSize,cubeSize,cubeSize),material);
    cubo.position.x = j*cubeSize;
    cubo.position.y = i*cubeSize; 
    cuadros.push(cubo);
  }
}
// var cuboS = new THREE.Mesh(new THREE.BoxGeometry(cubeSize,cubeSize,cubeSize),material);
//////////////////////////////////////////////////////////////////
var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;
camara.position.x = 40;
camara.position.y = -20;
camara.lookAt(new THREE.Vector3(50,50,11))

var escena = new THREE.Scene();
for (i = 0; i < 64; i++) {
escena.add(cuadros[i]);
}

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
