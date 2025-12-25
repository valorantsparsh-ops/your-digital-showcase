import { useState, useEffect } from "react";

interface UseTypingAnimationOptions {
  texts: string[];
  typingSpeed?: number;
  separator?: string;
}

export const useTypingAnimation = ({
  texts,
  typingSpeed = 100,
  separator = " | ",
}: UseTypingAnimationOptions) => {
  const [displayText, setDisplayText] = useState("");
  
  const fullText = texts.join(separator);

  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [displayText, fullText, typingSpeed]);

  return displayText;
};
