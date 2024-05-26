const name = 'puskesblog' // Name to use in PM2
const repo = 'git@github.com:pulau/puskesblog.git' // Link to your repo
const user = 'user' // Server user
const path = `/var/www/puskesblog` // Path on the server to deploy to
const host = '10.15.43.80' // Server hostname
const port = 8911 // Port to use locally on the server
const build = `yarn install && yarn rw build && yarn rw prisma migrate deploy`

module.exports = {
  apps: [
    {
      name,
      node_args: '-r dotenv/config',
      cwd: `${path}/current/`,
      script: 'yarn rw serve api',
      args: `--port ${port}`,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],

  deploy: {
    production: {
      user,
      host,
      ref: 'origin/master',
      repo,
      path,
      ssh_options: 'ForwardAgent=yes',
      'post-deploy': `${build} && pm2 reload pm2.config.js --env production && pm2 save`,
    },
  },
}
