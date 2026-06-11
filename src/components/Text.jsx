import FadeUp from "./FadeUp";

function Text({ text, delay, style }) {
  return (
    <FadeUp delay={delay}>
      <p className="text-charcoal text-xl leading-9 font-normal" style={style}>{text}</p>
    </FadeUp>
  );
}

export default Text;
