import React from 'react';
import { render, RenderOptions, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

// Custom render function that wraps everything in act()
const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  return render(ui, {
    ...options,
  });
};

// Helper to wait for async operations with proper act() wrapping
export const waitForAsync = async (callback: () => void | Promise<void>) => {
  await act(async () => {
    await waitFor(callback);
  });
};

// Helper to wait for a specific time with proper act() wrapping
export const waitForTime = async (ms: number) => {
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, ms));
  });
};

// Helper to advance timers with proper act() wrapping
export const advanceTimersByTime = async (ms: number) => {
  await act(async () => {
    jest.advanceTimersByTime(ms);
  });
};

// Helper to run timers with proper act() wrapping
export const runTimersToTime = async (ms: number) => {
  await act(async () => {
    jest.advanceTimersByTime(ms);
  });
};

// Helper to run all timers with proper act() wrapping
export const runAllTimers = async () => {
  await act(async () => {
    jest.runAllTimers();
  });
};

// Helper to run only pending timers with proper act() wrapping
export const runOnlyPendingTimers = async () => {
  await act(async () => {
    jest.runOnlyPendingTimers();
  });
};

// Helper to clear all timers with proper act() wrapping
export const clearAllTimers = async () => {
  await act(async () => {
    jest.clearAllTimers();
  });
};

// Helper to fire events with proper act() wrapping
export const fireEventWithAct = async (element: Element, event: Event) => {
  await act(async () => {
    element.dispatchEvent(event);
  });
};

// Helper to update state with proper act() wrapping
export const updateStateWithAct = async (callback: () => void) => {
  await act(async () => {
    callback();
  });
};

// Helper to wait for state changes with proper act() wrapping
export const waitForStateChange = async (
  callback: () => void,
  timeout = 1000
) => {
  await act(async () => {
    await waitFor(callback, { timeout });
  });
};

// Helper to wait for element to appear with proper act() wrapping
export const waitForElement = async (
  callback: () => Element | null,
  timeout = 1000
) => {
  await act(async () => {
    await waitFor(callback, { timeout });
  });
};

// Helper to wait for element to disappear with proper act() wrapping
export const waitForElementToDisappear = async (
  callback: () => Element | null,
  timeout = 1000
) => {
  await act(async () => {
    await waitFor(
      () => {
        expect(callback()).not.toBeInTheDocument();
      },
      { timeout }
    );
  });
};

// Helper to wait for text to appear with proper act() wrapping
export const waitForText = async (text: string | RegExp, timeout = 1000) => {
  await act(async () => {
    await waitFor(
      () => {
        expect(document.body).toHaveTextContent(text);
      },
      { timeout }
    );
  });
};

// Helper to wait for text to disappear with proper act() wrapping
export const waitForTextToDisappear = async (
  text: string | RegExp,
  timeout = 1000
) => {
  await act(async () => {
    await waitFor(
      () => {
        expect(document.body).not.toHaveTextContent(text);
      },
      { timeout }
    );
  });
};

// Helper to wait for loading to complete with proper act() wrapping
export const waitForLoadingToComplete = async (timeout = 1000) => {
  await act(async () => {
    await waitFor(
      () => {
        // Wait for any loading spinners to disappear
        const loadingSpinners = document.querySelectorAll(
          '[role="progressbar"]'
        );
        expect(loadingSpinners.length).toBe(0);
      },
      { timeout }
    );
  });
};

// Helper to wait for network requests to complete with proper act() wrapping
export const waitForNetworkRequests = async (timeout = 1000) => {
  await act(async () => {
    await waitFor(
      () => {
        // Wait for any pending network requests to complete
        // This is a simple implementation - you might need to adjust based on your app
        return Promise.resolve();
      },
      { timeout }
    );
  });
};

// Helper to wait for animations to complete with proper act() wrapping
export const waitForAnimations = async (timeout = 1000) => {
  await act(async () => {
    await waitFor(
      () => {
        // Wait for any CSS animations to complete
        const animatedElements = document.querySelectorAll(
          '[style*="animation"]'
        );
        expect(animatedElements.length).toBe(0);
      },
      { timeout }
    );
  });
};

// Helper to wait for transitions to complete with proper act() wrapping
export const waitForTransitions = async (timeout = 1000) => {
  await act(async () => {
    await waitFor(
      () => {
        // Wait for any CSS transitions to complete
        const transitionElements = document.querySelectorAll(
          '[style*="transition"]'
        );
        expect(transitionElements.length).toBe(0);
      },
      { timeout }
    );
  });
};

// Helper to wait for all async operations to complete with proper act() wrapping
export const waitForAllAsync = async (timeout = 1000) => {
  await act(async () => {
    await Promise.all([
      waitForLoadingToComplete(timeout),
      waitForNetworkRequests(timeout),
      waitForAnimations(timeout),
      waitForTransitions(timeout),
    ]);
  });
};

export { customRender as render };
export * from '@testing-library/react';
