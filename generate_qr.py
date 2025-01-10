import qrcode

def generate_linkedin_qr():
    # Create QR code instance
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=4,
    )
    
    # Add the data
    qr.add_data('https://www.linkedin.com/in/kevingarciadesigns')
    qr.make(fit=True)

    # Create an image from the QR Code
    qr_image = qr.make_image(fill_color="black", back_color="white")
    
    # Save it
    qr_image.save("images/linkedin-qr.png")

if __name__ == "__main__":
    generate_linkedin_qr() 