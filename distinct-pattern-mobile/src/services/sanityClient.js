import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: 'yxd7c6pz',
  dataset: 'distinct-patterns',
  useCdn: true,
  apiVersion: '2023-10-01',
});

export default sanityClient;