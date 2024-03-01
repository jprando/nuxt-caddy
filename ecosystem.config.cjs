const {
  NODE_ENV = "production",
  NITRO_PRESET = "node_cluster",
  PUBLIC_URL = "http://127.0.0.1:3000",
} = process.env;

module.exports = {
  apps: [
    {
      name: "garage-menu",
      port: 3001,
      exec_mode: "cluster",
      instances: 2,
      script: ".output/server/index.mjs",
      env: {
        NODE_ENV,
        NITRO_PRESET,
        PUBLIC_URL,
        NUXT_APP_CDN_URL: `${PUBLIC_URL}/menu/`,
      },
      cwd: "./menu",
    },
    {
      name: "garage-a",
      port: 3002,
      exec_mode: "cluster",
      instances: 2,
      script: ".output/server/index.mjs",
      env: {
        NODE_ENV,
        NITRO_PRESET,
        PUBLIC_URL,
        NUXT_APP_CDN_URL: `${PUBLIC_URL}/a/`,
      },
      cwd: "./sistemaA",
    },
    {
      name: "garage-b",
      port: 3003,
      exec_mode: "cluster",
      instances: 2,
      script: ".output/server/index.mjs",
      env: {
        NODE_ENV,
        NITRO_PRESET,
        PUBLIC_URL,
        NUXT_APP_CDN_URL: `${PUBLIC_URL}/b/`,
      },
      cwd: "./sistemaB",
    },
    {
      name: "garage-proxy",
      port: 3000,
      exec_mode: "fork",
      instances: 1,
      script: "caddy",
      args: "run --config Caddyfile",
      env: {
        PUBLIC_URL,
      },
      cwd: "./proxy",
    },
  ],
  deploy: {
    production: {
      host: "garage",
      ref: "origin/main",
      repo: "git@github.com:jprando/proj-seed-nuxt.git",
      path: "/root/projetos/garage",
      "post-deploy":
        "hostnamectl;pnpm install;pnpm build;pm2 startOrReload --update-env ecosystem.config.cjs",
    },
  },
};
