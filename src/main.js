import * as THREE from 'three';
import textureImage from './tv.jpg';
import standTexture from './stand.jpg';
import statueTexture from './statue.jpg';
import bedSheets from './sheets.jpg';
import bedbase from './bedbase.jpg';
import headBoard from './bed.jpg'
import headBoardarm from './bed1.jpg';
import artOne from './art1.jpg';
import artMid from './artMid.jpg';
import artTwo from './art2.jpg';
import doorTexture from './door1.webp';
import backW from './sDoor.jpg';
import ceilingTexture from './ceiling.jpg';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

//creating the scene
const scene = new THREE.Scene();

//creating the camera
const camera = new THREE.PerspectiveCamera( 75, 
    window.innerWidth / window.innerHeight,
     0.1, 
     1000 );

//creating the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//adding light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

//creating a gridHelper
const radius = 10;
const sectors = 16;
const rings = 18;
const divisions = 64;

//creating the ground
const geometry = new THREE.BoxGeometry( 8.5, 0.05, 10 );
const material = new THREE.MeshBasicMaterial( {color: 0x6c757d} );
const ground = new THREE.Mesh( geometry, material );
ground.position.y = -2.4;
ground.position.z = -3;
ground.position.x = -0.2;

//creating the ceiling
const textureLoaderC = new THREE.TextureLoader();

const materialC = new THREE.MeshBasicMaterial({ map: textureLoaderC.load(ceilingTexture) });
const geometryC = new THREE.BoxGeometry( 8.5, 0.05, 10 );
const ceiling = new THREE.Mesh( geometryC, materialC );
ceiling.position.y = 4.6;
ceiling.position.z = -3;
ceiling.position.x = -0.2;
scene.add(ceiling);
	   
	   //Walls
	   //creating the front wall
	   const geometry10 = new THREE.PlaneGeometry( 8.5, 7 );
	   const material10 = new THREE.MeshStandardMaterial( {color: 0x495057} );
	   const frontWall = new THREE.Mesh( geometry10, material10 );
	   frontWall.position.y = 1.1;
	   frontWall.position.x = -0.2;
	   frontWall.position.z = -8;

	   //creating the back wall
	   const textureLoaderwall = new THREE.TextureLoader();

       const materialback = new THREE.MeshBasicMaterial({ map: textureLoaderwall.load(backW) });
	   const geometryback = new THREE.PlaneGeometry( 8.5, 7 );
	   const backWall = new THREE.Mesh( geometryback, materialback );
	   backWall.position.y = 1.1;
	   backWall.position.x = -0.2;
	   backWall.position.z = 2;
	   scene.add(backWall);
	   
	   //creating the right wall
	   const geometry11 = new THREE.BoxGeometry( 0.05, 7, 7 );
	   const material11 = new THREE.MeshStandardMaterial( {color: 0x495057} );
	   const rightWall = new THREE.Mesh( geometry11, material11 );
	   rightWall.position.z = -1.5;
	   rightWall.position.x = 4; 
	   rightWall.position.y = 1.1;
	   
	   //creating the left wall
	   const geometry111 = new THREE.BoxGeometry( 0.05, 7, 10 );
	   const material111 = new THREE.MeshStandardMaterial( {color: 0x495057} );
	   const leftWall = new THREE.Mesh( geometry111, material111 );
	   leftWall.position.z = -3.05;
	   leftWall.position.x = -4.48; 
	   leftWall.position.y = 1.1;
	   
	   const geometry12 = new THREE.BoxGeometry( 0.05, 7, 1 );
	   const material12 = new THREE.MeshStandardMaterial( {color: 0x495057} );
	   const last = new THREE.Mesh( geometry12, material12 );
	   last.position.z = -7.5;
	   last.position.x = 4; 
	   last.position.y = 1.1;
	   
	   const geometry13 = new THREE.BoxGeometry( 0.05, 2, 2 );
	   const material13 = new THREE.MeshStandardMaterial( {color: 0x495057} );
	   const topWall = new THREE.Mesh( geometry13, material13 );
	   topWall.position.z = -6;
	   topWall.position.x = 4; 
	   topWall.position.y = 3.6;
	   
	   //door
const textureLoaderdoor = new THREE.TextureLoader();

const material14 = new THREE.MeshBasicMaterial({ map: textureLoaderdoor.load(doorTexture) });
 const geometry14 = new THREE.BoxGeometry( 0.1, 5, 2 );
	   const door = new THREE.Mesh( geometry14, material14 );
	   door.position.z = -6.3;
	   door.position.x = 3.2; 
	   door.position.y = 0.1;
	   door.rotation.y += -0.8;
	   
	   const wholeWall = new THREE.Group();
	   wholeWall.add(frontWall, leftWall, rightWall, last, topWall, door,ground);


const helper = new THREE.PolarGridHelper( radius, sectors, rings, divisions ); 
helper.position.y = -2.5;
helper.position.z = -2;
scene.add( helper );

//creating a bed
//art

//First
const textureLoaderArt1 = new THREE.TextureLoader();

const materialArt1 = new THREE.MeshBasicMaterial({ map: textureLoaderArt1.load(artOne) });

const geometryArt1 = new THREE.BoxGeometry( 0.05, 2.2, 1.7 );
const art1 = new THREE.Mesh( geometryArt1, materialArt1 );
art1.position.y = 2.4;
art1.position.x = -3.5;
scene.add(art1);

//Middle
const textureLoaderArt = new THREE.TextureLoader();

const materialArt = new THREE.MeshBasicMaterial({ map: textureLoaderArt.load(artMid) });

const geometryArt = new THREE.BoxGeometry( 0.05, 2.2, 1.7 );
const art = new THREE.Mesh( geometryArt, materialArt );
art.position.z = -2;
art.position.y = 2.4;
art.position.x = -3.5;
scene.add(art);

//Last
const textureLoaderArt2 = new THREE.TextureLoader();

const materialArt2 = new THREE.MeshBasicMaterial({ map: textureLoaderArt2.load(artTwo) });

const geometryArt2 = new THREE.BoxGeometry( 0.05, 2.2, 1.7 );
const art2 = new THREE.Mesh( geometryArt2, materialArt2 );
art2.position.z = -4;
art2.position.y = 2.4;
art2.position.x = -3.5;
scene.add(art2);

//base
const textureLoaderbase = new THREE.TextureLoader();

const material1 = new THREE.MeshBasicMaterial({ map: textureLoaderbase.load(bedbase) });
const geometry1 = new THREE.BoxGeometry( 4, 1, 5 );
const base = new THREE.Mesh( geometry1, material1 );
base.position.y = -1.9;
base.position.z = -1;
base.position.x = -1.2;

//headboard
//the head side
const textureLoaderheard = new THREE.TextureLoader();

const material4 = new THREE.MeshBasicMaterial({ map: textureLoaderheard.load(headBoard) });
const geometry4 = new THREE.BoxGeometry( 7, 3, 0.2 );
const head = new THREE.Mesh( geometry4, material4 );
head.position.x = -1.2;
head.position.z = 1.53;
head.position.y = -1;

//left side
const textureLoaderheardleft = new THREE.TextureLoader();

const geometry2 = new THREE.BoxGeometry( 0.1, 3, 0.4 );
const material2= new THREE.MeshStandardMaterial( {map: textureLoaderheardleft.load(headBoardarm) } );
const left = new THREE.Mesh( geometry2, material2 );
left.position.x = -4.7;
left.position.z = 1.35;
left.position.y = -1;
left.rotation.y = 0.5;

//right side
const geometry3 = new THREE.BoxGeometry( 0.1, 3, 0.4 );
const material3= new THREE.MeshStandardMaterial( {map: textureLoaderheardleft.load(headBoardarm) } );
const right = new THREE.Mesh( geometry3, material3 );
right.position.z = 1.35;
right.position.y = -1;
right.position.x = 2.3;
right.rotation.y = -0.5;


//bed
const textureLoadersheets = new THREE.TextureLoader();

const material9 = new THREE.MeshBasicMaterial({ map: textureLoadersheets.load(bedSheets) });
const geometry9 = new THREE.BoxGeometry( 3.9, 1, 4.9 );
const bed = new THREE.Mesh( geometry9, material9 );
bed.position.y = -1.6;
bed.position.z = -1;
bed.position.x = -1.2;


const wholeBed = new THREE.Group();
wholeBed.add(base,left, right,head,bed);
wholeBed.rotation.y = -1.55;
wholeBed.position.x = -2.8;
wholeBed.position.z = -1;

//Creating a TV
//tv
const geometry15 = new THREE.BoxGeometry( 5, 3, 0.2 );
const material15= new THREE.MeshStandardMaterial( {color: 0x121212} );
const tv = new THREE.Mesh( geometry15, material15 );
tv.position.z = -8;
tv.position.x = -0.2;
tv.position.y = 2;

//screen
const textureLoader = new THREE.TextureLoader();

const material0 = new THREE.MeshBasicMaterial({ map: textureLoader.load(textureImage) });

const geometry0 = new THREE.PlaneGeometry(4.8, 2.7); 
const screen = new THREE.Mesh(geometry0, material0);
screen.position.z = -7.89;
screen.position.x = -0.2;
screen.position.y = 2; 

const TV = new THREE.Group();
TV.add(tv, screen);

//wardrobe
const geometry17 = new THREE.BoxGeometry( 0.03, 5, 3.3 );
const material17 = new THREE.MeshStandardMaterial( {color: 0x212529} );
const wr1 = new THREE.Mesh( geometry17, material17 );
wr1.position.z = 0.3;
wr1.position.x = 3; 
wr1.position.y = 0.14;

const geometry18 = new THREE.BoxGeometry( 0.03, 1.9, 3.3 );
const material18 = new THREE.MeshStandardMaterial( {color: 0x212529} );
const wr2 = new THREE.Mesh( geometry18, material18 );
wr2.position.z = 0.3;
wr2.position.x = 3; 
wr2.position.y = 3.625;

const geometry19 = new THREE.BoxGeometry( 0.03, 5, 3.3 );
const material19 = new THREE.MeshStandardMaterial( {color: 0x212529} );
const wr3 = new THREE.Mesh( geometry19, material19 );
wr3.position.z = -3.1;
wr3.position.x = 3; 
wr3.position.y = 2.1;

const geometry20 = new THREE.BoxGeometry( 0.03, 1.9, 3.3 );
const material20 = new THREE.MeshStandardMaterial( {color: 0x212529} );
const wr4 = new THREE.Mesh( geometry20, material20 );
wr4.position.z = -3.1;
wr4.position.x = 3; 
wr4.position.y = -1.4;

const geometry21 = new THREE.CylinderGeometry( 0.05, 0.05, 2.5, 32 ); 
const material21 = new THREE.MeshStandardMaterial( {color: 0xadb5bd} ); 
const handle = new THREE.Mesh( geometry21, material21 );
handle.position.x = 2.8;
handle.position.y = 3;
handle.position.z = 1.7;

 const geometry22 = new THREE.CylinderGeometry( 0.04, 0.04, 0.3, 32 ); 
const material22 = new THREE.MeshStandardMaterial( {color: 0xadb5bd} ); 
const nail1 = new THREE.Mesh( geometry22, material22 );
nail1.position.x = 3;
nail1.position.y = 4;
nail1.position.z = 1.7;
nail1.rotation.z = 1.57;

 const geometry23 = new THREE.CylinderGeometry( 0.04, 0.04, 0.3, 32 ); 
const material23 = new THREE.MeshStandardMaterial( {color: 0xadb5bd} ); 
const nail2 = new THREE.Mesh( geometry23, material23 );
nail2.position.x = 3;
nail2.position.y = 2;
nail2.position.z = 1.7;
nail2.rotation.z = 1.57;

const geometry110 = new THREE.BoxGeometry( 1, 7, 6.8 );
const material110 = new THREE.MeshStandardMaterial( {color: 0x343a40} );
const strip = new THREE.Mesh( geometry110, material110 );
strip.position.z = -1.4;
strip.position.x = 3.5; 
strip.position.y = 1.1;

 const wardrobe = new THREE.Group();
wardrobe.add(wr1, wr2, wr3, wr4, handle, nail1, nail2, strip);

//Creating the plant stand

const textureLoaderST = new THREE.TextureLoader();

const materiaL01 = new THREE.MeshBasicMaterial({ map: textureLoaderST.load(standTexture) });

const geometry25 = new THREE.BoxGeometry( 3.5, 0.1, 1 ); 
const stand = new THREE.Mesh( geometry25, materiaL01 ); 
stand.position.x = -0.1;
stand.position.z = -6.7;
stand.position.y = -0.5;

//Models
// Load the GLB model one
const loader = new GLTFLoader();
const modelPath = new URL('./plant2.glb', import.meta.url); 
loader.load(modelPath.href, (gltf) => {
  const model = gltf.scene;

model.scale.set(1.7, 1.7, 1.7);

model.position.x = -1;
model.position.z = -6.7;
model.position.y = -0.45;
 
 scene.add(model);
 });

 // Load the GLB model two
const loader1 = new GLTFLoader();
const modelPath1 = new URL('./byron.glb', import.meta.url); 
loader1.load(modelPath1.href, (gltf) => {
  const model1 = gltf.scene;

model1.scale.set(0.004, 0.004, 0.004);

model1.position.x = 0.5;
model1.position.z = -5.7;
model1.position.y = 0.35;

const textureLoaderStatue = new THREE.TextureLoader();

const materials = new THREE.MeshBasicMaterial({ map: textureLoaderStatue.load(statueTexture) });
 model1.traverse((child) => {
if (child instanceof THREE.Mesh) {
 child.material = materials;
}
});
 
 scene.add(model1);
 });

 // Load the GLB model three
const loader2 = new GLTFLoader();
const modelPath2 = new URL('./plant1.glb', import.meta.url); 
loader2.load(modelPath2.href, (gltf) => {
  const model2 = gltf.scene;

 model2.scale.set(0.4, 0.5, 0.4);
 model2.rotation.y = -1.6;

model2.position.x = 0.8;
model2.position.z = -6.8;
model2.position.y = -0.55;
 
 scene.add(model2);
 });

const bedroom = new THREE.Group();
bedroom.add(TV,stand, wardrobe, wholeBed, wholeWall);
scene.add(bedroom)

camera.position.z = 9;//positioning the camera

//Adding controls
const controls = new PointerLockControls(camera, document.body);
scene.add(controls.getObject());

const onKeyDown = function(event) {

	switch(event.keyCode) {
		case 38:
			controls.moveForward(1);
			break;
		case 40:
			controls.moveForward(-1);
			break;
		case 37:
			controls.moveRight(-1);
			break;
		case 39:
			controls.moveRight(1);
			break;			
	}
}

document.addEventListener("keydown", onKeyDown);

//for mouse controlling
document.addEventListener("click",
 function ( ) {
     controls.lock();
});

document.addEventListener("lock",
 function ( ) {
     controls.enabled = true;
});

document.addEventListener("unlock",
 function ( ) {
     controls.enabled = false;
});

function animate() {

	requestAnimationFrame( animate );

	renderer.render( scene, camera );

}
animate();