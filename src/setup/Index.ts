import setupEnv from "./env";
import setupLogger from "./logger";

export default async function setupConfig() {
  setupLogger();
  setupEnv();
}
