const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageFiles = [
    'Foto perfil.png',
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
    '11.jpg',
    '12.jpg'
];

async function optimizeImage(filename) {
    const ext = path.extname(filename);
    const basename = path.basename(filename, ext);
    const outputFilename = `${basename}-optimized${ext}`;
    
    try {
        if (ext.toLowerCase() === '.png') {
            await sharp(filename)
                .resize(1200, 1200, {
                    fit: 'inside',
                    withoutEnlargement: true
                })
                .png({
                    quality: 80,
                    compressionLevel: 9,
                    palette: true
                })
                .toFile(outputFilename);
        } else {
            await sharp(filename)
                .resize(1200, 1200, {
                    fit: 'inside',
                    withoutEnlargement: true
                })
                .jpeg({
                    quality: 80,
                    progressive: true
                })
                .toFile(outputFilename);
        }
        
        console.log(`Optimized: ${filename} -> ${outputFilename}`);
    } catch (error) {
        console.error(`Error processing ${filename}:`, error);
    }
}

async function main() {
    // Create optimized versions of all images
    for (const file of imageFiles) {
        if (fs.existsSync(file)) {
            await optimizeImage(file);
        }
    }
}

main().catch(console.error); 