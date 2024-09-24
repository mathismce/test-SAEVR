AFRAME.registerComponent('follow-hand', {
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


function addTag() {
    var scene = document.querySelector('#scene');

    // nouveau tag
    var newBox = document.createElement('a-box');
    newBox.setAttribute('position', '0 1.5 -3');
    newBox.setAttribute('rotation', '0 45 0'); 
    newBox.setAttribute('color', '#4CC3D9');   

    
    scene.appendChild(newBox);
  }

// function mettreAJourPositionPoint() {
//     var pointCentral = document.getElementById('point-central');
//     var camera = document.querySelector('#camera');

//     var cameraPosition = camera.getAttribute('position');
    

//     // Mettre à jour la position du point central pour suivre la caméra
//     pointCentral.setAttribute('position', {
//       x: cameraPosition.x,
//       y: cameraPosition.y,
//       z: cameraPosition.z - 3 // Ajuste la position pour qu'il soit devant la caméra
//     });
//   }

// updatePointerPosition = function () {
//     // Récupère la caméra
//     var camera = document.getElementById('camera');
//     // Récupère la position de la caméra
//     var cameraPosition = camera.getAttribute('position');

//     console.log(cameraPosition);
    

//     // Défini la distance à la caméra
//     var distance = 10; 

//     var followerPosition = {
//         x: cameraPosition.x,
//         y: cameraPosition.y,
//         z: cameraPosition.z - distance 
//     };

//     // Met à jour la position du pointer
//     var follower = document.getElementById('point-central');
//     follower.setAttribute('position', followerPosition);
// }

  // Écouteur d'événements pour le mouvement de la caméra
  function animate() {
    updatePointerPosition();
    requestAnimationFrame(animate);
  }

  document.querySelector('a-scene').addEventListener('loaded', function () {
    animate();
  });