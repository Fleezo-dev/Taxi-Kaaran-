from PIL import Image, ImageEnhance, ImageDraw, ImageFilter

# Load the Dzire image
img = Image.open("public/dzire_vxi.jpg").convert("RGBA")

# Target dimensions
target_w, target_h = 1280, 720

# Resize and crop to fill 1280x720
img_ratio = img.width / img.height
target_ratio = target_w / target_h

if img_ratio > target_ratio:
    new_h = target_h
    new_w = int(target_h * img_ratio)
else:
    new_w = target_w
    new_h = int(target_w / img_ratio)

img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)

# Crop center
left = (new_w - target_w) // 2
top = (new_h - target_h) // 2
img = img.crop((left, top, left + target_w, top + target_h))

# Cover the windshield sticker with a dark tint overlay
draw = ImageDraw.Draw(img)
# Windshield paper area approximation in cropped space
# Let's add a subtle dark gradient to top windshield area
mask = Image.new("RGBA", (target_w, target_h), (0, 0, 0, 0))
mask_draw = ImageDraw.Draw(mask)

# Dark night ambient overlay
# Top/Left vignette and dark navy ambient tone
for y in range(target_h):
    alpha = int(120 + (y / target_h) * 80)
    # Dark blue navy color (9, 13, 22)
    mask_draw.line([(0, y), (target_w, y)], fill=(9, 13, 22, int(alpha * 0.4)))

# Windshield sticker cover polygon (dark windshield tint)
windshield_poly = [(int(target_w * 0.42), int(target_h * 0.12)),
                   (int(target_w * 0.62), int(target_h * 0.12)),
                   (int(target_w * 0.60), int(target_h * 0.30)),
                   (int(target_w * 0.44), int(target_h * 0.30))]
mask_draw.polygon(windshield_poly, fill=(15, 25, 40, 200))

# Blur the mask slightly for seamless blending
mask = mask.filter(ImageFilter.GaussianBlur(15))

# Composite
final_img = Image.alpha_composite(img, mask)

# Convert to RGB and enhance dark contrast for night mood
final_rgb = final_img.convert("RGB")
enhancer = ImageEnhance.Contrast(final_rgb)
final_rgb = enhancer.enhance(1.25)

enhancer_brightness = ImageEnhance.Brightness(final_rgb)
final_rgb = enhancer_brightness.enhance(0.75)

final_rgb.save("public/taxi-kaaran-night-hero.png", "PNG", quality=95)
print("Hero image successfully generated!")
