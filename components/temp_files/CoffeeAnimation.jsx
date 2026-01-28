
import "./CoffeeAnimation.css";

export default function CoffeeAnimation() {
  return (
    <div className="scene">
      <div className="beans">
        <span className="bean" />
        <span className="bean" />
        <span className="bean" />
        <span className="bean" />
        <span className="bean" />
      </div>

      <div className="cup">
        <div className="coffee" />
      </div>
    </div>
  );
}
