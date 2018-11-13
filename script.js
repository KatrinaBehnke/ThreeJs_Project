var scene, camera, renderer, model;

scene = new THREE.Scene();
//	Creates the new three.js scene

scene.fog = new THREE.FogExp2(0xb6d9e6, 0.009);
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//	75 = field of view 1000 = meters — size of viewing model

renderer = new THREE.WebGLRenderer({
	antialias: true
});
// 	Smoothes lines

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
//	places render onto canvas

var geometry = new THREE.BoxGeometry(5, 5, 5);
var material = new THREE.MeshBasicMaterial({
	color: 0x00ff00
});
var materialTrigger = new THREE.MeshBasicMaterial({
	color: 0xff0076
});

model = new THREE.Mesh(geometry, material);
//	dont need to say "var model = " because it was declared at the top

var trigger = new THREE.Mesh(geometry, materialTrigger);
var triggerTwo = new THREE.Mesh(geometry, materialTrigger);

scene.add(model, trigger, triggerTwo);
camera.position.z = 50;

trigger.position.x = 20;
triggerTwo.position.x = 80;

//	camera.add(model);
//	model.position.set (0, 100, 0);
console.log(camera);


//		var loader = new THREE.ColladaLoader();
//		loader.options.convertUpAxis = true;
//		loader.load('testModel.dae', function(collada) {
//			var dae = collada.scene;
//			dae.traverse(function(child) {
//				if (child instanceof THREE.Mesh) {
//					child.castShadow = true;
//					child.receiveShadow = true;
//				}
//			});
//			dae.scale.x = dae.scale.y = dae.scale.z = 0.5;
//			dae.updateMatrix();
//			scene.add(dae);
//
//			var light = scene.getObjectByName("SpLight", true);
////			light = light.children[0];
//			console.log(light);
//			light.castShadow = true;
//			light.distance = 1000;
//			light.penumbra = 1;
//
//			render();
//		});


//		### FUNCTION TO ADD AND REMOVE EVENT LISTENERS ####
const listener = (status, target, name) => {
	// creates function "listener" w/ parameters status, target, and name
	status == 'add' ? target.addEventListener("keydown", name, false) :
		// if status is add, you add the event listener
		target.removeEventListener("keydown", name, false);
	// otherwise, remove it
}

//dismiss

listener("add", document, dismissText)


function dismissText(event) {
	let keyCode = event.which;
	if (keyCode == 90) {
		//				console.log('hello');
		document.getElementById("textEventOne").style.visibility = "hidden";
		document.getElementById("textEventOne_op_1").style.visibility = "hidden";
		document.getElementById("textEventOne_op_2").style.visibility = "hidden";
	}
}


//######## #### ######## ##       ########    
//   ##     ##     ##    ##       ##          
//   ##     ##     ##    ##       ##          
//   ##     ##     ##    ##       ######      
//   ##     ##     ##    ##       ##          
//   ##     ##     ##    ##       ##          
//   ##    ####    ##    ######## ######## 

listener("add", document, passTitlePage)

function passTitlePage(event) {
	var keyCode = event.which;
	if (keyCode == 32) {
		//				document.getElementById('gameIntro').style.visibility = "hidden";
		//			} else if {
		//				document.getElementById('gameIntro').style.visibility = "visible";
		//			}
		var removal = document.getElementById("gameIntro");
		removal.remove();
		listener("add", document, passInstructions);
		listener("remove", document, passTitlePage);
	}
}


//#### ##    ##  ######  ######## ########  ##     ##  ######  ######## 
// ##  ###   ## ##    ##    ##    ##     ## ##     ## ##    ##    ##    
// ##  ####  ## ##          ##    ##     ## ##     ## ##          ##    
// ##  ## ## ##  ######     ##    ########  ##     ## ##          ##    
// ##  ##  ####       ##    ##    ##   ##   ##     ## ##          ##    
// ##  ##   ### ##    ##    ##    ##    ##  ##     ## ##    ##    ##    
//#### ##    ##  ######     ##    ##     ##  #######   ######     ## 

function passInstructions(event) {
	let keyCode = event.which;
	if (keyCode == 49) {
		document.getElementById("instructions").style.visibility = "hidden";
		document.getElementById("confused").style.visibility = "hidden";
		listener("remove", document, passInstructions);
		console.log('removed the listener');
	} else if (keyCode == 50) {
		document.getElementById("confused").style.visibility = "visible";
	} else if (keyCode == 73) {
		document.getElementById("instructions").style.visibility = "visible";
	}
}

//#### ##    ## ######## ######## ########     ###     ######  ######## 
// ##  ###   ##    ##    ##       ##     ##   ## ##   ##    ##    ##    
// ##  ####  ##    ##    ##       ##     ##  ##   ##  ##          ##    
// ##  ## ## ##    ##    ######   ########  ##     ## ##          ##    
// ##  ##  ####    ##    ##       ##   ##   ######### ##          ##    
// ##  ##   ###    ##    ##       ##    ##  ##     ## ##    ##    ##    
//#### ##    ##    ##    ######## ##     ## ##     ##  ######     ##  

function checkPosition() {
	if (camera.position.x >= 15 && camera.position.x <= 30) {
		document.getElementById('interactButton').style.visibility = "visible";

	} else if (camera.position.x >= 75 && camera.position.x <= 85) {
		document.getElementById('interactButton').style.visibility = "visible";

	} else {
		document.getElementById('interactButton').style.visibility = "hidden";
	}
}



//######## ##     ## ######## ##    ## ########     #######  ##    ## ######## 
//##       ##     ## ##       ###   ##    ##       ##     ## ###   ## ##       
//##       ##     ## ##       ####  ##    ##       ##     ## ####  ## ##       
//######   ##     ## ######   ## ## ##    ##       ##     ## ## ## ## ######   
//##        ##   ##  ##       ##  ####    ##       ##     ## ##  #### ##       
//##         ## ##   ##       ##   ###    ##       ##     ## ##   ### ##       
//########    ###    ######## ##    ##    ##        #######  ##    ## ######## 



listener("add", document, textEvent);

function textEvent() {
	keyCode = event.which;
	if (camera.position.x >= 15 && camera.position.x <= 30 && keyCode == 88) {
		console.log("TEXT EVENT ONE!")
		document.getElementById('textEventOne').style.visibility = "visible";
	}
	if (camera.position.x >= 15 && camera.position.x <= 30 && keyCode == 49) {
		console.log("Text response one!")
		document.getElementById('textEventOne').style.visibility = "hidden";
		document.getElementById('textEventOne_op_1').style.visibility = "visible";

	}
	if (camera.position.x >= 15 && camera.position.x <= 30 && keyCode == 50) {
		console.log("Text response two!")
		document.getElementById('textEventOne').style.visibility = "hidden";
		document.getElementById('textEventOne_op_2').style.visibility = "visible";

	}

	//			listener("remove", document, textEvent);
	listener("add", document, textEvent2);

}


//event two

function textEvent2() {
	keyCode = event.which;
	if (camera.position.x >= 75 && camera.position.x <= 85 && keyCode == 88) {
		console.log("TEXT EVENT TWO!")
		document.getElementById('textEventOne').style.visibility = "visible";
	}
	if (camera.position.x >= 75 && camera.position.x <= 85 && keyCode == 49) {
		console.log("Text response one!")
		document.getElementById('textEventOne').style.visibility = "hidden";
		document.getElementById('textEventOne_op_1').style.visibility = "visible";

	}
	if (camera.position.x >= 75 && camera.position.x <= 85 && keyCode == 50) {
		console.log("Text response two!")
		document.getElementById('textEventOne').style.visibility = "hidden";
		document.getElementById('textEventOne_op_2').style.visibility = "visible";

	}

	listener("remove", document, textEvent);
}



//			###### CODE FOR MOVING CHARACTER ######
var xMovement = 1;

document.addEventListener("keydown", movingCharacter, false);

function movingCharacter(event) {
	var keyCode = event.which;
	if (keyCode == 37) {
		model.position.x -= xMovement;
		camera.position.x -= xMovement;

	} else if (keyCode == 39) {
		model.position.x += xMovement;
		camera.position.x += xMovement;
		console.log(model.position);
		checkPosition();
	}
	render();
};
var render = function () {
	//  requestAnimationFrame(render);
	//  cube.rotation.x += 0.03;
	//  cube.rotation.y += 0.02;
	//  cube.rotation.z += 0.01;
	renderer.render(scene, camera);
};

render();
