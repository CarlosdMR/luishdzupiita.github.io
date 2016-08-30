var puntos = [];

for (var i = 0; i<75; i++) {
  puntos.push(new THREE.Vector2(Math.sin(i*0.13)*1+20,(i)*1));
}

var forma = new THREE.LatheGeometry(puntos);

var torreForma = new THREE.Geometry();
torreForma.merge(troncoMalla.geometry, troncoMalla.matrix);

var material = new THREE.MeshNormalMaterial();
var torreMalla = new THREE.Mesh(torreForma, material);

var escena = new THREE.Scene();
escena.add(torreMalla);
var camara = new THREE.PerspectiveCamera();
camara.position.z = 200;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
