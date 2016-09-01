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

var cuadro2 = new THREE.Shape();

cuadro2.moveTo(-15,75);
cuadro2.lineTo(-15,85);
cuadro2.lineTo(-21,85);
cuadro2.lineTo(-21,75);
cuadro2.lineTo(-15,75);

var cuadro3 = new THREE.Shape();

cuadro3.moveTo(3,75);
cuadro3.lineTo(3,85);
cuadro3.lineTo(-3,85);
cuadro3.lineTo(-3,75);
cuadro3.lineTo(3,75);

var cuadroFigura = new THREE.ExtrudeGeometry(cuadro, {amount: 10});
var cuadroFigura2 = new THREE.ExtrudeGeometry(cuadro2, {amount: 10});
var cuadroFigura3 = new THREE.ExtrudeGeometry(cuadro3, {amount: 10});

var material = new THREE.MeshNormalMaterial();

var mallac = new THREE.Mesh(cuadroFigura,material);
var mallac2 = new THREE.Mesh(cuadroFigura2,material);
var mallac3 = new THREE.Mesh(cuadroFigura3,material);

//malla2.rotateX(Math.PI/2);

var forma = new THREE.LatheGeometry(puntos);
var malla = new THREE.Mesh(forma,material);
//malla.rotateX(Math.PI/6);

var formaIntermedia1 = new THREE.Geometry();
formaIntermedia1.merge(mallac.geometry, mallac.matrix);
formaIntermedia1.merge(malla.geometry, malla.matrix);

var formaIntermedia2 = new THREE.Geometry();
formaIntermedia2.merge(mallac2.geometry, mallac2.matrix);
formaIntermedia2.merge(formaIntermedia1.geometry, formaIntermedia1.matrix);

var formaIntermedia3 = new THREE.Geometry();
formaIntermedia3.merge(mallac3.geometry, mallac3.matrix);
formaIntermedia3.merge(formaIntermedia2.geometry, formaIntermedia2.matrix);

var mallaFinal = new THREE.Mesh(formaIntermedia3, material);

var scene = new THREE.Scene();
scene.add(mallaFinal);
//scene.add(mallac);
//scene.add(mallac2);
//scene.add(mallac3);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 400;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(scene,camara);
