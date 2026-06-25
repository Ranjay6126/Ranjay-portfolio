import { useTheme } from './ThemeContext'

export default function Background3D() {
  const { theme } = useTheme()

  if (theme === 'light') {
    return (
      <div
        className="fixed inset-0 z-[-1]"
        style={{
          background: 'linear-gradient(135deg, #eef1ff 0%, #f5f3ff 40%, #fdf4ff 100%)',
        }}
      />
    )
  }

  return (
    <div 
      className="fixed inset-0 z-[-1]"
      style={{
        background: 'radial-gradient(ellipse at top, #1e1b4b 0%, #0f0f1a 50%, #000000 100%)',
      }}
    />
  )
}