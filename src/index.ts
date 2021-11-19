/**
 * Fits one rectangle into another
 */
export function fitRect(
  rect: Rect,
  target: Rect,
  mode: FitMode = "contain"
): Rect {
  const sw = target.w / rect.w;
  const sh = target.h / rect.h;
  let scale = 1;

  if (mode == "contain") {
    scale = Math.min(sw, sh);
  } else if (mode == "cover") {
    scale = Math.max(sw, sh);
  }

  return {
    x: target.x + (target.w - rect.w * scale) / 2,
    y: target.y + (target.h - rect.h * scale) / 2,
    w: rect.w * scale,
    h: rect.h * scale,
  };
}

export type Rect = { x: number; y: number; w: number; h: number };

export type FitMode = "contain" | "cover";
