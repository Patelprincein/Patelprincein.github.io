import { Radar, RadarChart, ResponsiveContainer, PolarGrid, PolarAngleAxis } from 'recharts'
import { siteConfig } from '../../config/siteConfig'

const SkillsRadar = () => (
  <div className="radar-wrapper">
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={siteConfig.skills.heatmap} outerRadius="80%">
        <PolarGrid stroke="var(--border-strong)" />
        <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--muted)' }} />
        <Radar
          dataKey="value"
          stroke="var(--accent)"
          fill="var(--accent)"
          fillOpacity={0.4}
          strokeWidth={2}
        />
      </RadarChart>
    </ResponsiveContainer>
  </div>
)

export default SkillsRadar
