// tRPC HTTP handler
// from <https://trpc-nuxt.vercel.app/get-started/usage/recommended>
import { createNuxtApiHandler } from 'trpc-nuxt'
import { appRouter } from '~/server/trpc/routers'
import { createContext } from '~/server/trpc/context'

// export API handler
export default createNuxtApiHandler({
  router: appRouter,
  createContext
})
