import { defineConfig } from "$fresh/server.ts";
import twind from "$fresh/plugins/twindv1.ts";
import twindConfig from "./twind.config.ts";
import basicAuthPlugin from "https://deno.land/x/hashrock_fresh_plugins@1.0.1/basic.ts";

export default defineConfig({
  plugins: [twind(twindConfig), basicAuthPlugin("/update")],
});
