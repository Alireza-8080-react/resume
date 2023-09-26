/* eslint-disable require-await */
import { NextConfig } from 'next';

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '/';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '');

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig: NextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  async headers() {
    return [
      {
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Content-Security-Policy',
            value: `default-src 'self'; img-src 'self'; media-src 'self'; script-src 'self'`
          }
        ],
        source: '/(.*)'
      }
    ];
  },
  images: {
    loader: 'imgix',
    path: 'the "domain" of your Imigix source'
  }
};

module.exports = nextConfig;
