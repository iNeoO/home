module.exports = {
  apps: [
    {
      name: 'home',
      port: '3002',
      exec_mode: 'fork',
      instances: 1,
      script: './.output/server/index.mjs',
    },
  ],
};
