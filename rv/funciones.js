var escena, camara, renderizador, malla;

function init(p) {

var material = new THREE.MeshNormalMaterial();
malla = new THREE.Mesh( new THREE.BoxGeometry(p,p,p), material);

escena = new THREE.Scene();
escena.add(malla);

camara = new THREE.PerspectiveCamera();
camara.position.z = 3*p;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize(700,700);
document.body.appendChild(renderizador.domElement);

}
 var loop = function() {
   requestAnimatioFrame(loop);
   renderizador.render(escena,camara);
   malla.rotateY(0.01);
 }
 
 init(1);
 loop();
