interface BalloonProps {
  color?: string;
  size?: number; // in px
  left?: string; // e.g. "20%", "5rem"
  delay?: number | null; // animation delay in seconds
}

export default function FlyBalloon({color = "#ff8fa3", size = 80, left = "50%", delay = null, }: BalloonProps){

    if(delay == null){
        delay = Math.floor(Math.random() * (1 - 15 + 1)) + 1;
    }

    const style = {
        backgroundColor: color,
        width: `${size}px`,
        height: `${size * 1.25}px`,
        left,
        animationDelay: `${delay}s`,
    };

    return <div className="balloon" style={style}></div>;
};