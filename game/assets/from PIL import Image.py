from PIL import Image

def hex_a_rgb(hex_color):
    hex_color = hex_color.lstrip("#")
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))


def hacer_color_transparente_gif(
    gif_entrada,
    gif_salida,
    color_html="#7fab8d",
    tolerancia=20
):
    color_objetivo = hex_a_rgb(color_html)

    gif = Image.open(gif_entrada)
    frames = []

    for frame_index in range(gif.n_frames):
        gif.seek(frame_index)

        frame = gif.convert("RGBA")
        pixeles = frame.load()

        ancho, alto = frame.size

        for y in range(alto):
            for x in range(ancho):
                r, g, b, a = pixeles[x, y]

                if (
                    abs(r - color_objetivo[0]) <= tolerancia and
                    abs(g - color_objetivo[1]) <= tolerancia and
                    abs(b - color_objetivo[2]) <= tolerancia
                ):
                    pixeles[x, y] = (r, g, b, 0)

        frames.append(frame)

    duracion = gif.info.get("duration", 100)
    loop = gif.info.get("loop", 0)

    frames[0].save(
        gif_salida,
        save_all=True,
        append_images=frames[1:],
        duration=duracion,
        loop=loop,
        disposal=2
    )


hacer_color_transparente_gif(
    gif_entrada="10-44-27-197_512.gif",
    gif_salida="cafe.gif",
    color_html="#7fab8d",
    tolerancia=25
)