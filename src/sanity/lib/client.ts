import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'
import { env } from 'process'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
token:"sktPhjHH4quOmsmc33HCrfd5vHaYQuM0K8ddX0AjOzPKy46ESCmL1c3e9Lv0MCjWlYcPdkwdg6RC45eP55dla7L0CGY2jPG7kbNddR3RsDLv2vZDEj3DJVjLQiKEUa6xJPrNvkPRGvmvmkdLZwVxj5mRseuaiJO6zp7QbZlBXihEC2SnUo5w"
})
