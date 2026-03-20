interface CarImageResponse {
  url: string;
}

declare global {
  interface Window {
    CI_API_KEY: string;
  }
}

declare global {
  interface Window {
    CI_API_KEY: string;
    CarImages?: {
      process: () => void;
      getCarImage: (params: {
        make: string;
        model: string;
      }) => Promise<CarImageResponse>;
    };
  }
}
export {};
