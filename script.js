AFRAME.registerComponent('follow-camera', {
    tick: function () {
        // Récupère référence à l'entité de la caméra
        var camera = document.getElementById('camera');
        // Récupère la direction dans laquelle la caméra regarde
        var cameraDirection = new THREE.Vector3();
        camera.object3D.getWorldDirection(cameraDirection);

        // Défini la distance à laquelle l'entité suiveuse doit être placée devant la caméra
        var distance = -4; // Distance désirée

        // Calcul la position de l'entité suiveuse
        var followerPosition = new THREE.Vector3();
        followerPosition.copy(camera.object3D.position).addScaledVector(cameraDirection, distance);

        // Met à jour la position de l'entité suiveuse
        this.el.object3D.position.copy(followerPosition);

    }
});

let mouseCoords = { x: 0, y: 0 };



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
    newBox.setAttribute('class', 'draggable'); 
        
    // Ajouter des événements pour le drag and drop
    newBox.addEventListener('mousedown', function () {
      this.setAttribute('color', '#FF0000'); // Change la couleur quand il est attrapé
      this.isDragging = true;
    });

    newBox.addEventListener('mouseup', function () {
      this.setAttribute('color', '#4CC3D9'); // Remet la couleur à l'original
      this.isDragging = false;
      console.log("mouse up ")

    });

    newBox.addEventListener('mouseleave', function () {
        this.isDragging = true; 
        this.setAttribute('color', '#4CC3D9');
        console.log("mouse leave")
    });

  

    scene.appendChild(newBox);

    
    // scene.addEventListener('mousemove', function (event) {
    //     if (newBox.isDragging) {
    //         const position = new THREE.Vector3();
    //         const cameraDirection = new THREE.Vector3();
    //         camera.object3D.getWorldDirection(cameraDirection);

    //         const distance = 4; // Ajuster cette valeur selon tes besoins

    //         position.copy(cameraDirection).multiplyScalar(distance);
    //         position.x += (mouseCoords.x / window.innerWidth) * 2 - 1; // Ajuster la position x
    //         position.y += (-mouseCoords.y / window.innerHeight) * 2 + 1; // Ajuster la position y

    //         newBox.setAttribute('position', {
    //             x: position.x,
    //             y: position.y,
    //             z: 4 // Garde z à 4
    //         });
    //     }

    // });
  }


  document.addEventListener('mousemove', (event) => {
    mouseCoords.x = event.clientX;
    mouseCoords.y = event.clientY;
  
    // Pour afficher les coordonnées dans la console
    // console.log(`X: ${mouseCoords.x}, Y: ${mouseCoords.y}`);
  });


