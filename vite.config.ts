import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";
  return {
    plugins: [react()],
    base: isProduction ? "/react-practice/" : "/", // 배포 환경에서만 base 설정
  };
});
