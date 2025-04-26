// Este script crea iconos de placeholder para PWA
const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const iconDir = path.join(process.cwd(), 'public', 'icons');

// Asegurar que el directorio existe
if (!fs.existsSync(iconDir)) {
  fs.mkdirSync(iconDir, { recursive: true });
}

// Función para crear un SVG simple con el tamaño especificado
function createSvgIcon(size) {
  return `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#a855f7"/>
    <text x="50%" y="50%" font-family="Arial" font-size="${Math.floor(size/4)}" 
      fill="white" text-anchor="middle" dy=".3em">WR</text>
  </svg>`;
}

// Crear los iconos
sizes.forEach(size => {
  const iconPath = path.join(iconDir, `icon-${size}x${size}.png`);
  
  // Para un proyecto real, aquí usarías una biblioteca como Sharp para convertir SVG a PNG
  // Pero para este ejemplo, simplemente creamos archivos SVG
  const svgContent = createSvgIcon(size);
  fs.writeFileSync(iconPath.replace('.png', '.svg'), svgContent);
  
  console.log(`Creado: icon-${size}x${size}.svg`);
});

console.log('\nIconos creados en:', iconDir);
console.log('\nNota: Estos son archivos SVG simples como placeholder.');
console.log('Para un proyecto real, deberías convertirlos a PNG usando una biblioteca como Sharp.'); 