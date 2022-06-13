const collisions = {
  boxPoint: (box, point) => box.x < point.x && box.x + box.w > point.x && box.y < point.y && box.y + box.h > point.y,
  boxBox: (box1, box2) => box1.x < box2.x + box2.w && box1.x + box1.w > box2.x && box1.y < box2.y + box2.h && box1.y + box1.h > box2.h,
  circlePoint: (circle, point) => Math.sqrt((point.x - circle.x) ** 2 + (point.y - circle.y) ** 2) <= circle.r,
  circleCircle: (circle1, circle2) => Math.sqrt((circle1.x - circle2.x) ** 2 + (circle1.y - circle2.y) ** 2) <= circle1.r + circle2.r
}

export default collisions;
