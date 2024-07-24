/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      dangerouslyAllowSVG: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'media.graphassets.com'
        },
       ],
             domains: ['cdn.pixabay.com','eu-central-1-shared-euc1-02.graphassets.com']
          }
         
        };


export default nextConfig;
