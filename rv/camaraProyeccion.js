var campoVision = 45;
var relacionAspecto = window.innerWidth / window.innerHeight;
var planoCercano = 1;
var planoLejano = 1000;


var camara = new THREE.PerspectiveCamera(campoVision, relacionAspecto, planoCercano, planoLejano);
camara.position.z = 15;

var cubo = new THREE.Mesh(new THREE.BoxGeometry(2,2,2),new THREE.MeshNormalMaterial());
cubo.rotateY(Math.PI/4);

var colorRojo = new THREE.Color("rgb(255, 0, 0)");
var materialRojo = new THREE.MeshBasicMaterial();
materialRojo.color = colorRojo;

var esfera1 = new THREE.Mesh(new THREE.SphereGeometry(1),materialRojo);
esfera1.position.x = 5;

var esfera2 = new THREE.Mesh(new THREE.SphereGeometry(1),new THREE.MeshNormalMaterial());
esfera2.position.x = -5;
esfera2.position.z = -10;

var light = new THREE.PointLight( 0xff0000, 1, 100 );
light.position.set( 0, 0, 10 );

var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 5, 0, 5);

spotLight.castShadow = true;

spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;

var escena = new THREE.Scene();
escena.add(esfera1,esfera2,cubo,light,spotLight);

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
