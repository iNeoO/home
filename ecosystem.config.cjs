module.exports = {
  apps: [
    {
      name: 'home',
      exec_mode: 'fork',
      instances: 1,
      script: './.output/server/index.mjs',
      env: {
        PORT: 3000,
        HOST: '127.0.0.1',
        NODE_ENV: 'production',
      },
    },
  ],
};
