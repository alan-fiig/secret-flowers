import FadeUp from "./FadeUp";

function Text({ text, delay }) {
  return (
    <FadeUp delay={delay}>
      <p className="text-charcoal text-xl leading-9 font-normal">{text}</p>
    </FadeUp>
  );
}

export default Text;
