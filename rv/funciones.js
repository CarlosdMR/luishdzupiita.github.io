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
   requestAnimationFrame(loop);
   renderizador.render(escena,camara);
   malla.rotateY(0.01);
   if (direccion === 1) {
    malla.position.x = malla.position.x + 0.1;
    if (malla.position.x > tresholdR) {
    direccion = 2;
    alert("right")
    }
   } else {
    malla.position.x = malla.position.x - 0.1;
    if (malla.position.x < tresholdL) {
    direccion = 1;
    alert("left")
    }
   }
 }
 
 var direccion = 1;
 var tresholdL = 20;
 var tresholdR = -20;
 init(1);
 loop();
