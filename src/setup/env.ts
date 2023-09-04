import dotenv from "dotenv";
import config from "config";
import { ConfigEntryEnum } from "@/utils/enums";

dotenv.config();

export default function setupEnv() {
  const isEveryEnvSet = Object.values(ConfigEntryEnum).every((entry) =>
    config.has(entry)
  );
  if (!isEveryEnvSet)
    throw new Error("FATAL ERROR: Some of the required env are missing.");
}
