export default function PageSkeleton() {
  return (
    <div className="vd-skeleton-page" aria-hidden="true">
      <div className="vd-skeleton vd-skeleton-avatar" />
      <div className="vd-skeleton vd-skeleton-title" />
      <div className="vd-skeleton vd-skeleton-subtitle" />
      <div className="vd-skeleton vd-skeleton-line" />
      <div className="vd-skeleton vd-skeleton-line" />
      <div className="vd-skeleton-row">
        <div className="vd-skeleton vd-skeleton-circle" />
        <div className="vd-skeleton vd-skeleton-circle" />
        <div className="vd-skeleton vd-skeleton-circle" />
        <div className="vd-skeleton vd-skeleton-circle" />
      </div>
      <div className="vd-skeleton vd-skeleton-card" />
      <div className="vd-skeleton vd-skeleton-card" />
      <div className="vd-skeleton vd-skeleton-cta" />
      <div className="vd-skeleton vd-skeleton-card" />
      <div className="vd-skeleton vd-skeleton-card" />
    </div>
  )
}
