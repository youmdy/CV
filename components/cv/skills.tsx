interface SkillsProps {
  skills: Record<string, string[]>
}

export function Skills({ skills }: SkillsProps) {
  const categories = Object.entries(skills ?? {})
    .map(([key, items]) => ({
      title: key.replace(/_/g, " "),
      items: (items ?? []).filter(Boolean),
    }))
    .filter((cat) => cat.items.length > 0)

  return (
    <>
      <div className="cv-section-label">Technical Skills</div>
      <div className="cv-skills-grid">
        {categories.map((cat) => (
          <div key={cat.title}>
            <div className="cv-skill-group-title">{cat.title}</div>
            <ul className="cv-skill-list">
              {cat.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
