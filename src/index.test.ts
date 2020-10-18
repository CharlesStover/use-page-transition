import { act, renderHook } from '@testing-library/react-hooks';
import usePageTransition from '.';

describe('usePageTransition', (): void => {
  it('should default to impersistently visible', (): void => {
    const { result } = renderHook(usePageTransition);
    const [isVisible, isPersistent] = result.current;
    expect(isVisible).toBe(true);
    expect(isPersistent).toBe(false);
  });

  it('should listen for pageshow and pagehide events on mount', (): void => {
    const windowAddEventListener: jest.SpyInstance<void> = jest.spyOn(
      window,
      'addEventListener',
    );
    expect(windowAddEventListener).not.toHaveBeenCalledWith(
      'pagehide',
      expect.any(Function),
    );
    expect(windowAddEventListener).not.toHaveBeenCalledWith(
      'pageshow',
      expect.any(Function),
    );

    renderHook(usePageTransition);

    expect(windowAddEventListener).toHaveBeenCalledWith(
      'pagehide',
      expect.any(Function),
    );
    expect(windowAddEventListener).toHaveBeenCalledWith(
      'pageshow',
      expect.any(Function),
    );
  });

  it('should respond to persistent pageshow events', (): void => {
    const { result } = renderHook(usePageTransition);

    act((): void => {
      const e: PageTransitionEvent = new PageTransitionEvent('pageshow', {
        persisted: true,
      });
      window.dispatchEvent(e);
    });

    const [isVisible, isPersistent] = result.current;
    expect(isVisible).toBe(true);
    expect(isPersistent).toBe(true);
  });

  it('should respond to impersistent pageshow events', (): void => {
    const { result } = renderHook(usePageTransition);

    act((): void => {
      const e: PageTransitionEvent = new PageTransitionEvent('pageshow', {
        persisted: false,
      });
      window.dispatchEvent(e);
    });

    const [isVisible, isPersistent] = result.current;
    expect(isVisible).toBe(true);
    expect(isPersistent).toBe(false);
  });

  it('should respond to persistent pagehide events', (): void => {
    const { result } = renderHook(usePageTransition);

    act((): void => {
      const e: PageTransitionEvent = new PageTransitionEvent('pagehide', {
        persisted: true,
      });
      window.dispatchEvent(e);
    });

    const [isVisible, isPersistent] = result.current;
    expect(isVisible).toBe(false);
    expect(isPersistent).toBe(true);
  });

  it('should respond to impersistent pagehide events', (): void => {
    const { result } = renderHook(usePageTransition);

    act((): void => {
      const e: PageTransitionEvent = new PageTransitionEvent('pagehide', {
        persisted: false,
      });
      window.dispatchEvent(e);
    });

    const [isVisible, isPersistent] = result.current;
    expect(isVisible).toBe(false);
    expect(isPersistent).toBe(false);
  });

  it('should stop listening for pageshow and pagehide events on unmount', (): void => {
    const windowRemoveEventListener: jest.SpyInstance<void> = jest.spyOn(
      window,
      'removeEventListener',
    );
    expect(windowRemoveEventListener).not.toHaveBeenCalledWith(
      'pagehide',
      expect.any(Function),
    );
    expect(windowRemoveEventListener).not.toHaveBeenCalledWith(
      'pageshow',
      expect.any(Function),
    );

    const { unmount } = renderHook(usePageTransition);
    unmount();

    expect(windowRemoveEventListener).toHaveBeenCalledWith(
      'pagehide',
      expect.any(Function),
    );
    expect(windowRemoveEventListener).toHaveBeenCalledWith(
      'pageshow',
      expect.any(Function),
    );
  });
});
