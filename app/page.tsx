import { HomeView, homeMetadata } from "./home/_view";

/**
 * Fallback only. proxy.ts rewrites / to a regional variant, so this renders
 * when the proxy has not run.
 */
export const metadata = homeMetadata;

export default function HomePage() {
  return <HomeView region="row" />;
}
