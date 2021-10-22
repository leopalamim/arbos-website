import('next').NextConfig
const withImages = require('next-images')

module.exports = {
  images: {
    disableStaticImages: true
  },
  ...withImages({
    esModule: true,
    target: 'serverless'
  })
}
