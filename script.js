
//coordonées de la souris 
let mouseCoords = { x: 0, y: 0 };

// créer une porte
function addTag() {
    var scene = document.querySelector('#scene');
    var camera = document.getElementById('camera');
    var cameraDirection = new THREE.Vector3();
    camera.object3D.getWorldDirection(cameraDirection);

    
    var distance = -10; // Distance (peut etre reglé)

    // Calcul la position où le tag doit être créé
    var tagPosition = new THREE.Vector3();
    tagPosition.copy(camera.object3D.position).addScaledVector(cameraDirection, distance);

    // Nouveau tag
    var newBox = document.createElement('a-box');
    newBox.setAttribute('position', tagPosition);
    newBox.setAttribute('rotation', '0 45 0'); 
    newBox.setAttribute('color', '#4CC3D9');   
    newBox.setAttribute('dragndrop', ''); 

  
    scene.appendChild(newBox);
    console.log(newBox);

  }

  function addInfo() {
    let scene = document.querySelector('#scene');
    let camera = document.getElementById('camera');
    var cameraDirection = new THREE.Vector3();
    camera.object3D.getWorldDirection(cameraDirection);

    var distance = -10; // distance réglée
    
    // Calcul la position où le tag doit être créé
    var tagPosition = new THREE.Vector3();
    tagPosition.copy(camera.object3D.position).addScaledVector(cameraDirection, distance);

   //récupere le input
    var infoText = document.getElementById('infoInput').value;

    // Créer la bulle
    var newSphere = document.createElement('a-sphere');
    newSphere.setAttribute('position', tagPosition);
    newSphere.setAttribute('radius', '1.25'); 
    newSphere.setAttribute('color', '#FFC65D'); 
    newSphere.setAttribute('dragndrop', ''); 

    // Créer un texte lié à la sphère
    var newText = document.createElement('a-text');
    newText.setAttribute('value', infoText);
    newText.setAttribute('position', { x: tagPosition.x, y: tagPosition.y + 1.5, z: tagPosition.z }); // Position légèrement au-dessus de la sphère
    newText.setAttribute('align', 'center');
    newText.setAttribute('color', '#FFFFFF'); // Couleur du texte
    newText.setAttribute('follow-sphere', { target: newSphere });

    // Ajouter la sphère et le texte à la scène
    scene.appendChild(newSphere);
    scene.appendChild(newText);

    console.log("Sphère et texte créés :", newSphere, newText);
}



// écouteurs
  document.addEventListener('click', (event) => {
    
    var targetElement = event.target;

    if (targetElement.hasAttribute('position')) {
        var position = targetElement.getAttribute('position'); // Récupère la position de l'élément
        console.log( position);
    } else {
        console.log("pas de pos");
    }
});


