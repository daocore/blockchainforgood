// import sa from 'sa-sdk-javascript';

export const trackSensors = async (key: "ButtonClicked" | "$pageview", config: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    const sa = (await import('sa-sdk-javascript')).default
    sa.track(key, config);
  }
};