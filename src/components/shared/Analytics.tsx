import { siteConfig } from '../../config/siteConfig'

const Analytics = () => {
  if (!siteConfig.metadata.analytics?.scriptUrl) return null
  return (
    <script
      data-domain={siteConfig.metadata.analytics.domain}
      src={siteConfig.metadata.analytics.scriptUrl}
      defer
    ></script>
  )
}

export default Analytics
