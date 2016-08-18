var escena = new THREE.Scene();
var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
var cilindro = new THREE.CylinderGeometry(3,3,30,60);
var esfera = new THREE.SphereGeometry(20,60,60);
var material = new THREE.MeshNormalMaterial();
var parteSuperior = new THREE.Mesh(esfera, material);
var parteInferior = new THREE.Mesh(cilindro, material);

parteSuperior.position.y = 45;

escena.add(parteSuperior);
escena.add(parteInferior);
renderizador.render(escena, camara);
 
