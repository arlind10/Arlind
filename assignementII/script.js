document.addEventListener("DOMContentLoaded", () => {
  // Adjust lighting
  document.querySelector("#ambient-light").setAttribute("intensity", "0.3");
  document.querySelector("#overhead-light").setAttribute("intensity", "1.2");
  
  // Position windows
  document.querySelector("#windows").setAttribute("position", "-5 3 0");
  
  // Row 1 of desks and chairs
  const desksRow1 = document.querySelector("#desks-row-1");
  desksRow1.innerHTML = `
      <a-entity gltf-model="#desk-model" position="-2 0 -2" scale="1 1.5 1"></a-entity>
      <a-entity gltf-model="#chair-model" position="-1.6 0 -1.7" scale="1 1 1"></a-entity>
      <a-entity gltf-model="#chair-model" position="-2.2 0 -1.7" scale="1 1 1"></a-entity>

      <a-entity gltf-model="#desk-model" position="2 0 -2" scale="1 1.5 1"></a-entity>
      <a-entity gltf-model="#chair-model" position="2.4 0 -1.7" scale="1 1 1"></a-entity>
      <a-entity gltf-model="#chair-model" position="1.8 0 -1.7" scale="1 1 1"></a-entity>
  `;

  // Row 2 of desks and chairs
  const desksRow2 = document.querySelector("#desks-row-2");
  desksRow2.innerHTML = `
      <a-entity gltf-model="#desk-model" position="-2 0 2" scale="1 1.5 1"></a-entity>
      <a-entity gltf-model="#chair-model" position="-1.6 0 2.3" scale="1 1 1"></a-entity>
      <a-entity gltf-model="#chair-model" position="-2.2 0 2.3" scale="1 1 1"></a-entity>

      <a-entity gltf-model="#desk-model" position="2 0 2" scale="1 1.5 1"></a-entity>
      <a-entity gltf-model="#chair-model" position="2.4 0 2.3" scale="1 1 1"></a-entity>
      <a-entity gltf-model="#chair-model" position="1.8 0 2.3" scale="1 1 1"></a-entity>
  `;
});
