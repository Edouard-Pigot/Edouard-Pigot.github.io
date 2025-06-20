import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
import { ImportMeshAsync } from "@babylonjs/core/Loading/sceneLoader";
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, MeshBuilder, Color4 } from "@babylonjs/core";
import { Object3D } from "./Object3D";

let canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;

var startRenderLoop = function (engine, canvas) {
  engine.runRenderLoop(function () {
    if (sceneToRender && sceneToRender.activeCamera) {
      sceneToRender.render();
    }
  });
}

var engine = null;
var scene = null;
var sceneToRender = null;
var createDefaultEngine = function() { 
  return new Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true,  disableWebGL2Support: false}); 
};

const createScene = function () {

  const scene = new Scene(engine);

  const camera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2.5, 10, Vector3.Zero(), scene);
  camera.attachControl(canvas, true);
  const light = new HemisphericLight("light", new Vector3(1, 1, 0));

  const ground = MeshBuilder.CreateGround("ground", {width:1000, height:1000});

  let testObject = new Object3D("./TEST.obj", scene, new Vector3(0, 0, 0), new Vector3(0, 0, 0), null);

  ImportMeshAsync("./city.obj", scene).then((result) => {
    // Combine bounding info
    let meshes = result.meshes;
    let boundingInfo = meshes[0].getBoundingInfo();
    let min = boundingInfo.minimum.clone();
    let max = boundingInfo.maximum.clone();

    for (let i = 1; i < meshes.length; i++) {
      boundingInfo = meshes[i].getBoundingInfo();
      min = Vector3.Minimize(min, boundingInfo.minimum);
      max = Vector3.Maximize(max, boundingInfo.maximum);
    }

    const center = min.add(max).scale(0.5);

    // Move camera target to center
    camera.target = center;

    // Optional: set radius to fit whole object in view
    const radius = Vector3.Distance(min, max) * 0.75;
    camera.radius = radius;
  });

  scene.clearColor = new Color4(1, 1, 1, 1);

  return scene;
};
let initFunction = async function() {	
  var asyncEngineCreation = async function() {
      return createDefaultEngine();
  }

  engine = await asyncEngineCreation();
  
  const engineOptions = engine.getCreationOptions?.();
  if (!engineOptions || engineOptions.audioEngine !== false) {}
  if (!engine) throw 'engine should not be null.';
  startRenderLoop(engine, canvas);
  scene = createScene();
};
initFunction().then(() => {sceneToRender = scene});

// Resize
window.addEventListener("resize", function () {
  engine.resize();
});