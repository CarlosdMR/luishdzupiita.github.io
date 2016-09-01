var puntos = [];

for (var i = 0; i<75; i++) {
  puntos.push(new THREE.Vector2(Math.sin(i*0.13)*1+20,(i)*1));
}

var cuadro = new THREE.Shape();

cuadro.moveTo(15,75);
cuadro.lineTo(15,85);
cuadro.lineTo(21,85);
cuadro.lineTo(21,75);
cuadro.lineTo(15,75);


var cuadroFigura = new THREE.ExtrudeGeometry(cuadro, {amount: 10});

var material = new THREE.MeshNormalMaterial();

var malla2 = new THREE.Mesh(cuadroFigura,material);
//malla2.rotateX(Math.PI/2);

var forma = new THREE.LatheGeometry(puntos);
var malla = new THREE.Mesh(forma,material);
//malla.rotateX(Math.PI/6);

var scene = new THREE.Scene();
scene.add(malla);
scene.add(malla2);
var camara = new THREE.PerspectiveCamera();
camara.position.z = 400;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);

document.body.appendChild(renderizador.domElement);
renderizador.render(scene,camara);
