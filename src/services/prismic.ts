import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";

interface PrismicProps  {
    client: prismic.Client;
    previewData: any;
    req: prismic.HttpRequestLike;
}

// export const repositoryName = prismic.getRepositoryName(process.env.PRISMIC_ENDPOINT);

 
export const createClient = (config = {} as PrismicProps) => {
  const accessToken = process.env.PRISMIC_ACCESS_TOKEN;
  
  const client = prismic.createClient(process.env.PRISMIC_ENDPOINT, {accessToken});

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};