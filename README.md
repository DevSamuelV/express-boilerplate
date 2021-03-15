## Express-Boilerplate

- [Prisma Init](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project-typescript-postgres)

### Yarn Scripts
```bash
# run dev server
yarn dev

# build the server
yarn build

# this will run the tsc compiler
yarn tsc

# this will run the prod server
yarn prod
```

### Prisma Setup
```bash
# to reinstall prisma
yarn add --dev prisma
yarn add @prisma/client

# initialize prisma
yarn prisma init

# this will generate types for typescript run this when you update your schema.prisma
yarn prisma generate

# introspect prisma
yarn prisma introspect
```