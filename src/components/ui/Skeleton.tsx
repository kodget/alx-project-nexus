interface SkeletonProps {
  className?: string
  width?: string
  height?: string
}

export default function Skeleton({ className = '', width, height }: SkeletonProps) {
  const style = {
    width: width || undefined,
    height: height || undefined,
  }

  return (
    <div 
      className={`bg-gray-200 rounded animate-pulse ${className}`}
      style={style}
    ></div>
  )
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Skeleton height="192px" className="w-full" />
      <div className="p-4">
        <Skeleton height="16px" className="mb-2" />
        <Skeleton height="12px" width="66%" className="mb-2" />
        <div className="flex justify-between">
          <Skeleton height="16px" width="64px" />
          <Skeleton height="16px" width="80px" />
        </div>
      </div>
    </div>
  )
}