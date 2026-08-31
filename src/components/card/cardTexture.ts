import * as THREE from "three";

const W = 1024;
const H = 646; // ISO/IEC 7810 ID-1 ratio (85.6 x 53.98mm)

function base(ctx: CanvasRenderingContext2D) {
  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, "#161c26");
  grad.addColorStop(0.55, "#0d1119");
  grad.addColorStop(1, "#05070a");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Faint diagonal sheen, like brushed metal catching light.
  const sheen = ctx.createLinearGradient(0, H, W, 0);
  sheen.addColorStop(0.35, "rgba(255,255,255,0)");
  sheen.addColorStop(0.5, "rgba(201,205,211,0.06)");
  sheen.addColorStop(0.65, "rgba(255,255,255,0)");
  ctx.fillStyle = sheen;
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = "rgba(201,168,104,0.5)";
  ctx.lineWidth = 2;
  ctx.strokeRect(28, 28, W - 56, H - 56);
}

function frontFace(ctx: CanvasRenderingContext2D) {
  base(ctx);

  ctx.fillStyle = "#c9a868";
  ctx.font = "460 240px 'Fraunces Variable', serif";
  ctx.textBaseline = "alphabetic";
  ctx.fillText("D", 72, 400);

  ctx.strokeStyle = "rgba(201,168,104,0.55)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(72, 440);
  ctx.lineTo(272, 440);
  ctx.stroke();

  ctx.fillStyle = "#f5f3ee";
  ctx.font = "600 30px 'Instrument Sans', sans-serif";
  ctx.textAlign = "left";
  ctx.save();
  ctx.translate(76, 560);
  ctx.font = "600 26px 'Instrument Sans', sans-serif";
  ctx.fillStyle = "rgba(245,243,238,0.86)";
  const letters = "D-LAY PRESTIGE".split("");
  let x = 0;
  letters.forEach((ch) => {
    ctx.fillText(ch, x, 0);
    x += ctx.measureText(ch).width + 6;
  });
  ctx.restore();

  ctx.textAlign = "right";
  ctx.fillStyle = "rgba(245,243,238,0.55)";
  ctx.font = "500 22px 'Instrument Sans', sans-serif";
  ctx.fillText("PRIVATE MEMBER", W - 72, 560);
}

function backFace(ctx: CanvasRenderingContext2D) {
  base(ctx);

  ctx.strokeStyle = "rgba(201,168,104,0.4)";
  ctx.lineWidth = 1;
  for (let y = 130; y < H - 60; y += 42) {
    ctx.beginPath();
    ctx.moveTo(64, y);
    ctx.lineTo(W - 64, y);
    ctx.globalAlpha = 0.06;
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(245,243,238,0.7)";
  ctx.font = "600 22px 'Instrument Sans', sans-serif";
  ctx.save();
  ctx.translate(W / 2, H / 2);
  ctx.letterSpacing = "0.3em";
  ctx.fillText("D-LAY PRESTIGE", 12, 0);
  ctx.restore();
}

export function createCardFaceTexture(face: "front" | "back") {
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  if (face === "front") frontFace(ctx);
  else backFace(ctx);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}
