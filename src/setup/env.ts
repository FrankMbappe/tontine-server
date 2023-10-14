import { EnvEnum } from "@/utils/enums";

export default function setupEnv() {
  const isEveryEnvSet = Object.values(EnvEnum).every(
    (env) => process.env[env] !== undefined,
  );
  if (!isEveryEnvSet)
    throw new Error("FATAL ERROR: Some of the required env are missing.");
}
