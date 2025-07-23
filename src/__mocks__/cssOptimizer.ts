// Mock CSS Optimizer for testing
export const cssOptimizer = {
  getLoadingStatus: () => ({
    loaded: [],
    pending: [],
  }),
  isResourceLoaded: () => false,
  preloadCriticalResources: () => {},
  loadNonCriticalCSS: () => {},
  initialize: () => {},
};

const cssOptimizerModule = {
  cssOptimizer,
};

export default cssOptimizerModule;
