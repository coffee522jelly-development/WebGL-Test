// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera
// new THREE.PerspectiveCamera(画角, アスペクト比, 描画開始距離, 描画終了距離)
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#000000");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

// Create a Cube Mesh with basic materia

var geometry = new THREE.SphereGeometry( 1.5, 12, 12 );
var material = new THREE.MeshBasicMaterial(
   {
     color: 0xffffff, 
     wireframe:true,
    } );

var cube = new THREE.Mesh( geometry, material );
scene.add( cube );


// Render Loop
var render = function () {
  requestAnimationFrame( render );

  cube.rotation.y += 0.0012;
  cube.rotation.x += 0.001;

  // Render the scene
  renderer.render(scene, camera);
};

render();