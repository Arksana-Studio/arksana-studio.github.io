import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  }, trailingSlash: true
};


export default withNextIntl(nextConfig);
