'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Text3D, Float, Environment, Center } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

function CodeIcon() {
    const groupRef = useRef<THREE.Group>(null)
    const materialRef = useRef<THREE.MeshPhysicalMaterial>(null)

    useFrame(({ clock }) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = clock.getElapsedTime() * 0.25
        }
        if (materialRef.current) {
            const pulse = Math.sin(clock.getElapsedTime() * 0.4) * 0.01 + 0.02
            materialRef.current.emissiveIntensity = pulse
        }
    })

    return (
        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
            <group ref={groupRef}>
                <Center>
                    <Text3D
                        font="/fonts/helvetiker_regular.typeface.json"
                        size={2.8}
                        height={0.5}
                        curveSegments={48}
                        bevelEnabled
                        bevelThickness={0.12}
                        bevelSize={0.06}
                        bevelSegments={20}
                    >
                        {'</>'}
                        <meshPhysicalMaterial
                            ref={materialRef}
                            color="#ffffff"
                            metalness={0.3}
                            roughness={0.1}
                            emissive="#ffffff"
                            emissiveIntensity={0.02}
                            clearcoat={0.9}
                            clearcoatRoughness={0.1}
                            envMapIntensity={1.2}
                        />
                    </Text3D>
                </Center>
            </group>
        </Float>
    )
}

function SoftGlow() {
    const texture = useMemo(() => {
        const canvas = document.createElement('canvas')
        canvas.width = 256
        canvas.height = 256
        const ctx = canvas.getContext('2d')
        if (!ctx) return null

        const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128)
        gradient.addColorStop(0, 'rgba(255,255,255,0.03)')
        gradient.addColorStop(0.6, 'rgba(255,255,255,0.01)')
        gradient.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, 256, 256)
        return new THREE.CanvasTexture(canvas)
    }, [])

    if (!texture) return null

    return (
        <mesh position={[0, 0, -0.5]}>
            <planeGeometry args={[6, 6]} />
            <meshBasicMaterial map={texture} transparent depthWrite={false} opacity={0.8} />
        </mesh>
    )
}

export default function CodeIcon3D() {
    return (
        <div className="w-full h-auto relative">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 40 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.4} />
                <spotLight position={[8, 8, 8]} angle={0.3} penumbra={1} intensity={1.5} />
                <spotLight position={[-4, -2, 4]} angle={0.2} penumbra={0.8} intensity={0.8} />
                <pointLight position={[0, 0, 6]} intensity={0.3} />

                <Environment preset="city" background={false} />
                <SoftGlow />
                <CodeIcon />
            </Canvas>
        </div>
    )
}