import { useEffect, useState } from 'react';

export default function usePageVisibility(): [boolean, boolean] {
  // TODO: default value
  const [visibility, setVisibility] = useState<[boolean, boolean]>([
    true,
    false,
  ]);

  useEffect((): (() => void) => {
    const handlePageHide = (e: PageTransitionEvent): void => {
      setVisibility([false, e.persisted]);
    };
    const handlePageShow = (e: PageTransitionEvent): void => {
      setVisibility([true, e.persisted]);
    };
    window.addEventListener('pagehide', handlePageHide);
    window.addEventListener('pageshow', handlePageShow);
    return (): void => {
      window.removeEventListener('pagehide', handlePageHide);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);

  return visibility;
}
