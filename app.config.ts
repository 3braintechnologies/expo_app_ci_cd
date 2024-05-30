import "ts-node/register"; // Add this to import TypeScript files
import { ExpoConfig } from "expo/config";

// In SDK 46 and lower, use the following import instead:
// import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
  name: "my-app",
  slug: "my-app",
  extra: {
    eas: {
      projectId: "fbf7aff9-ba3f-4495-a66b-2cf6a0ef1198",
    },
  },
  android: {
    package: "com.skyward.my_app",
    versionCode: 1,
  },
};

export default config;
