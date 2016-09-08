var campoVision = 45;
var relacionAspecto = window.innerWidth / window.innerHeight;
var planoCercano = 1;
var planoLejano = 1000;


var camara = new THREE.PerspectiveCamera(campoVision, relacionAspecto, planoCercano, planoLejano);
camara.position.z = 15;

var colorNegro = new THREE.Color("rgb(0, 0, 0)");
var materialNegro = new THREE.MeshBasicMaterial();
materialNegro.color = colorNegro;
var colorBlanco = new THREE.Color("rgb(255, 255, 255)");
var materialBlanco = new THREE.MeshBasicMaterial();
materialBlanco.color = colorBlanco;



//////////////////////////////////////////////////////////////////
var escena = new THREE.Scene();
escena.add(esfera1,esfera2,cubo,light,spotLight);

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
