# Sad Stack Cloudflare

```sh
npm init remix@latest --template raggesilver/sad-stack-cloudflare
# or
pnpm create remix@latest --template raggesilver/sad-stack-cloudflare
# or
bun create remix@latest --template raggesilver/sad-stack-cloudflare
```

## Initial setup

After initializing the project, you need to set up the following:

1. Rename the project: head to [./wrandler.toml](./wrangler.toml) and change the
   `name` field to your project name.

```sh
npx wrangler d1 create <database_name>
npx wrangler types
```

2. Open [./wrangler.toml](./wrangler.toml) and add the following line to the
   d1 section:

```toml
migrations_dir = "drizzle/migrations"
# Also, ensure that binding is set to "DB"
```

## What it comes with

- [UnoCSS](https://unocss.dev) for styling
- [Shadcn](https://ui.shadcn.com) for UI
- [Drizzle ORM](https://orm.drizzle.team)
  - Paired with [Cloudflare D1](https://developers.cloudflare.com/d1)
