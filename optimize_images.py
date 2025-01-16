from PIL import Image
import os

def optimize_image(filepath):
    try:
        # Open the image
        with Image.open(filepath) as img:
            # Convert RGBA to RGB if necessary
            if img.mode == 'RGBA':
                img = img.convert('RGB')
            
            # Calculate new dimensions while maintaining aspect ratio
            max_size = (1200, 1200)
            img.thumbnail(max_size, Image.Resampling.LANCZOS)
            
            # Get the directory and filename
            directory = os.path.dirname(filepath)
            filename = os.path.basename(filepath)
            name, ext = os.path.splitext(filename)
            
            # If filename doesn't already contain '-optimized', add it
            if not name.endswith('-optimized'):
                output_filename = f"{name}-optimized{ext}"
            else:
                output_filename = filename
                
            # Create output path
            output_filepath = os.path.join(directory, output_filename)
            
            # Save optimized image
            if ext.lower() == '.png':
                img.save(output_filepath, 'PNG', optimize=True, quality=80)
            else:
                img.save(output_filepath, 'JPEG', optimize=True, quality=80, progressive=True)
            
            print(f"Optimized: {filepath} -> {output_filepath}")
            
            # Get file sizes for comparison
            original_size = os.path.getsize(filepath) / (1024 * 1024)  # MB
            optimized_size = os.path.getsize(output_filepath) / (1024 * 1024)  # MB
            print(f"Size reduced from {original_size:.2f}MB to {optimized_size:.2f}MB")
            
            return output_filename
            
    except Exception as e:
        print(f"Error processing {filepath}: {str(e)}")
        return None

def find_images(directory):
    image_files = []
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                filepath = os.path.join(root, file)
                # Skip already optimized images
                if not file.endswith('-optimized.png') and not file.endswith('-optimized.jpg') and not file.endswith('-optimized.jpeg'):
                    image_files.append(filepath)
    return image_files

def main():
    # Find all images in the images directory
    image_files = find_images('images')
    
    # Dictionary to store original to optimized filename mappings
    optimized_mappings = {}
    
    # Optimize all images
    for filepath in image_files:
        optimized_filename = optimize_image(filepath)
        if optimized_filename:
            original_filename = os.path.basename(filepath)
            optimized_mappings[original_filename] = optimized_filename
    
    # Update projects-data.js with new image paths
    if optimized_mappings:
        try:
            with open('js/projects-data.js', 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Replace image paths with optimized versions
            for original, optimized in optimized_mappings.items():
                content = content.replace(f'"{original}"', f'"{optimized}"')
            
            with open('js/projects-data.js', 'w', encoding='utf-8') as f:
                f.write(content)
            
            print("\nUpdated projects-data.js with optimized image paths")
            
        except Exception as e:
            print(f"Error updating projects-data.js: {str(e)}")

if __name__ == '__main__':
    main() 