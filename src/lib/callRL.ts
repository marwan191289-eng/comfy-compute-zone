// Client-side stub for RL agent. The original project ships an Express + TensorFlow
// backend; here we keep the interface but avoid making a network call in the
// serverless preview. Consumers should treat "unavailable" as graceful degradation.
export type RLResult = {
  action: number;
  qValues: number[];
  confidence: number;
  available: boolean;
};

export async function callRL(_stateVector: number[]): Promise<RLResult> {
  return { action: 0, qValues: [0, 0, 0], confidence: 0, available: false };
}
