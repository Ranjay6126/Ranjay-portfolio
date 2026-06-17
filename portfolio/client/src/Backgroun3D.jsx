import { Canvas } from '@react-three/fiber'
import { Stars, Sparkles } from '@react-three/drei'
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
    <div className="fixed inset-0 z-[-1] bg-black">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars radius={300} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Sparkles count={100} scale={12} size={4} speed={0.4} opacity={0.5} color="#a855f7" />
      </Canvas>
    </div>
  )
}