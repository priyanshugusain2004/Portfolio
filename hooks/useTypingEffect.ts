
import { useState, useEffect } from 'react';

interface TypingEffectOptions {
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  delay?: number;
  startTyping?: boolean;
}

const useTypingEffect = (
  texts: string | string[],
  options: TypingEffectOptions = {}
): string => {
  const {
    loop = true,
    typeSpeed = 150,
    deleteSpeed = 100,
    delay = 2000,
    startTyping = true,
  } = options;

  const textArray = Array.isArray(texts) ? texts : [texts];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(typeSpeed);

  useEffect(() => {
    if (!startTyping) {
      return;
    }

    const handleTyping = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      if (isDeleting) {
        setText((prev) => prev.substring(0, prev.length - 1));
        setDelta(deleteSpeed);
      } else {
        setText((prev) => fullText.substring(0, prev.length + 1));
        setDelta(typeSpeed);
      }

      if (!isDeleting && text === fullText) {
        if (!loop && loopNum >= textArray.length - 1) {
          // End of typing for non-looping
          return;
        }
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setDelta(typeSpeed);
      }
    };

    const ticker = setTimeout(handleTyping, delta);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, delta, startTyping, loopNum, textArray, typeSpeed, deleteSpeed, delay, loop]);

  return text;
};

export default useTypingEffect;
