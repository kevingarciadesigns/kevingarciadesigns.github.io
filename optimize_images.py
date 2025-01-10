from PIL import Image
import os

def optimize_image(filename):
    try:
        # Open the image
        with Image.open(filename) as img:
            # Convert RGBA to RGB if necessary
            if img.mode == 'RGBA':
                img = img.convert('RGB')
            
            # Calculate new dimensions while maintaining aspect ratio
            max_size = (1200, 1200)
            img.thumbnail(max_size, Image.Resampling.LANCZOS)
            
            # Prepare output filename
            name, ext = os.path.splitext(filename)
            output_filename = f"{name}-optimized{ext}"
            
            # Save optimized image
            if ext.lower() == '.png':
                img.save(output_filename, 'PNG', optimize=True, quality=80)
            else:
                img.save(output_filename, 'JPEG', optimize=True, quality=80, progressive=True)
            
            print(f"Optimized: {filename} -> {output_filename}")
            
            # Get file sizes for comparison
            original_size = os.path.getsize(filename) / (1024 * 1024)  # MB
            optimized_size = os.path.getsize(output_filename) / (1024 * 1024)  # MB
            print(f"Size reduced from {original_size:.2f}MB to {optimized_size:.2f}MB")
            
    except Exception as e:
        print(f"Error processing {filename}: {str(e)}")

def main():
    # List of image files to optimize
    image_files = [
        'Foto perfil.png',
        '1.png', '2.png', '3.png', '4.png', '5.png',
        '6.png', '7.png', '8.png', '9.png', '10.png',
        '11.jpg', '12.jpg'
    ]
    
    for filename in image_files:
        if os.path.exists(filename):
            optimize_image(filename)

if __name__ == '__main__':
    main() 