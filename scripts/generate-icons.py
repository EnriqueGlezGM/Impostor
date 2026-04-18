from io import BytesIO
from pathlib import Path

from fontTools.ttLib import TTCollection
from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
FONT_PATH = Path("/System/Library/Fonts/Apple Color Emoji.ttc")
EMOJI_CODEPOINT = 0x1F608
BACKGROUND = (17, 19, 24, 255)
OUTPUTS = {
    "apple-touch-icon.png": 180,
    "pwa-192.png": 192,
    "pwa-512.png": 512,
}


def load_emoji():
    collection = TTCollection(str(FONT_PATH))
    font = collection.fonts[0]
    glyph_name = font.getBestCmap()[EMOJI_CODEPOINT]
    strikes = font["sbix"].strikes
    largest_ppem = max(strikes)
    glyph = strikes[largest_ppem].glyphs[glyph_name]
    return Image.open(BytesIO(glyph.imageData)).convert("RGBA")


def make_icon(emoji, size):
    canvas = Image.new("RGBA", (size, size), BACKGROUND)
    emoji_size = int(size * 0.78)
    resized = emoji.resize((emoji_size, emoji_size), Image.Resampling.LANCZOS)
    offset = ((size - emoji_size) // 2, (size - emoji_size) // 2)
    canvas.alpha_composite(resized, offset)
    return canvas


def main():
    emoji = load_emoji()
    public_dir = ROOT / "public"
    for filename, size in OUTPUTS.items():
        make_icon(emoji, size).save(public_dir / filename)


if __name__ == "__main__":
    main()
