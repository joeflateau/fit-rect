/**
 * Fits one rectangle into another
 */
export function fitRect(
  rect: Size,
  target: Rect,
  mode: FitMode = "contain"
): Rect {
  const sw = target[2] / rect[0];
  const sh = target[3] / rect[1];

  let scale = 1;
  if (mode == "contain") {
    scale = Math.min(sw, sh);
  } else if (mode == "cover") {
    scale = Math.max(sw, sh);
  }

  return [
    target[0] + (target[2] - rect[0] * scale) / 2,
    target[1] + (target[3] - rect[1] * scale) / 2,
    rect[0] * scale,
    rect[1] * scale,
  ];
}

export type Size = [w: number, h: number];

export type Rect = [x: number, y: number, w: number, h: number];

export type FitMode = "contain" | "cover";
