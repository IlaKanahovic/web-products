'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, Sparkles, Center } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

function DigitalUniverse() {
    const groupRef = useRef<THREE.Group>(null)
    const sphereRef = useRef<THREE.Mesh>(null)
    const innerSphereRef = useRef<THREE.Mesh>(null)

    const codeTexture = useMemo(() => {
        const canvas = document.createElement('canvas')
        canvas.width = 512
        canvas.height = 512
        const ctx = canvas.getContext('2d')
        if (!ctx) return null

        ctx.fillStyle = 'rgba(0,0,0,0)'
        ctx.fillRect(0, 0, 512, 512)

        const chars = ['</>', '{}', '()', '=>', 'const', 'let', 'var', 'function', 'return', 'if', 'else', 'try', 'catch', 'AI', 'SaaS', 'API']
        ctx.fillStyle = 'rgba(139, 92, 246, 0.3)'
        ctx.font = '20px monospace'

        for (let i = 0; i < 80; i++) {
            const x = Math.random() * 512
            const y = Math.random() * 512
            const char = chars[Math.floor(Math.random() * chars.length)]
            ctx.fillText(char, x, y)
        }

        for (let i = 0; i < 200; i++) {
            const x = Math.random() * 512
            const y = Math.random() * 512
            const radius = Math.random() * 2
            ctx.beginPath()
            ctx.arc(x, y, radius, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(139, 92, 246, ${Math.random() * 0.3})`
            ctx.fill()
        }

        return new THREE.CanvasTexture(canvas)
    }, [])

    useFrame(({ clock }) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = clock.getElapsedTime() * 0.08
            groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.05) * 0.1
        }

        if (sphereRef.current) {
            const pulse = Math.sin(clock.getElapsedTime() * 0.3) * 0.05 + 0.95
            sphereRef.current.scale.set(pulse, pulse, pulse)

            const material = sphereRef.current.material as THREE.MeshPhysicalMaterial
            const glowPulse = Math.sin(clock.getElapsedTime() * 0.5) * 0.1 + 0.3
            material.emissiveIntensity = glowPulse
        }

        if (innerSphereRef.current) {
            const pulse = Math.sin(clock.getElapsedTime() * 0.4) * 0.1 + 0.9
            innerSphereRef.current.scale.set(pulse, pulse, pulse)
        }
    })

    return (
        <group ref={groupRef}>
            <Center>
                <mesh ref={sphereRef}>
                    <sphereGeometry args={[1.5, 64, 64]} />
                    <meshPhysicalMaterial
                        color="#8b5cf6"
                        metalness={0.2}
                        roughness={0.1}
                        emissive="#6d28d9"
                        emissiveIntensity={0.3}
                        transparent
                        opacity={0.85}
                        clearcoat={1}
                        clearcoatRoughness={0.05}
                        envMapIntensity={2}
                        map={codeTexture || undefined}
                    />
                </mesh>

                <mesh ref={innerSphereRef}>
                    <sphereGeometry args={[0.8, 32, 32]} />
                    <meshBasicMaterial
                        color="#a78bfa"
                        transparent
                        opacity={0.15}
                        blending={THREE.AdditiveBlending}
                    />
                </mesh>

                <mesh>
                    <sphereGeometry args={[1.8, 24, 24]} />
                    <meshBasicMaterial
                        color="#8b5cf6"
                        wireframe
                        transparent
                        opacity={0.08}
                    />
                </mesh>

                {[0, 1, 2].map((i) => {
                    const rotation = [
                        [Math.PI / 2, 0, 0],
                        [Math.PI / 3, Math.PI / 4, 0],
                        [Math.PI / 4, Math.PI / 2, 0],
                    ][i]
                    const radius = [2.0, 2.3, 1.7][i]
                    const color = ['#8b5cf6', '#60a5fa', '#fbbf24'][i]

                    return (
                        <mesh key={i} rotation={[rotation[0], rotation[1], rotation[2]]}>
                            <torusGeometry args={[radius, 0.015, 16, 64]} />
                            <meshBasicMaterial
                                color={color}
                                transparent
                                opacity={0.3 - i * 0.05}
                                blending={THREE.AdditiveBlending}
                            />
                        </mesh>
                    )
                })}

                {[...Array(12)].map((_, i) => {
                    const angle = (i / 12) * Math.PI * 2
                    const radius = 2.5
                    const yOffset = Math.sin(angle * 2) * 0.5
                    const randRot = Math.random() * Math.PI * 2

                    return (
                        <mesh
                            key={i}
                            position={[
                                Math.cos(angle) * radius,
                                yOffset,
                                Math.sin(angle) * radius * 0.5,
                            ]}
                            rotation={[randRot, randRot, randRot]}
                        >
                            <boxGeometry args={[0.08, 0.08, 0.08]} />
                            <meshPhysicalMaterial
                                color={['#8b5cf6', '#60a5fa', '#fbbf24', '#a78bfa'][i % 4]}
                                metalness={0.8}
                                roughness={0.1}
                                emissive={['#6d28d9', '#3b82f6', '#f59e0b', '#7c3aed'][i % 4]}
                                emissiveIntensity={0.3}
                            />
                        </mesh>
                    )
                })}

                {[...Array(8)].map((_, i) => {
                    const angle = (i / 8) * Math.PI * 2 + 0.3
                    const radius = 2.8
                    const yOffset = Math.sin(angle * 1.5) * 0.8

                    return (
                        <mesh
                            key={i + 20}
                            position={[
                                Math.cos(angle) * radius,
                                yOffset,
                                Math.sin(angle) * radius * 0.4,
                            ]}
                        >
                            <sphereGeometry args={[0.03, 4, 4]} />
                            <meshBasicMaterial
                                color="#c4b5fd"
                                transparent
                                opacity={0.6}
                                blending={THREE.AdditiveBlending}
                            />
                        </mesh>
                    )
                })}

                {[...Array(6)].map((_, i) => {
                    const angle = (i / 6) * Math.PI * 2
                    const radius = 1.5
                    const start = [
                        Math.cos(angle) * radius,
                        Math.sin(angle * 2) * 0.3,
                        Math.sin(angle) * radius * 0.4,
                    ]
                    const end = [
                        Math.cos(angle + 0.5) * radius * 1.3,
                        Math.sin((angle + 0.5) * 2) * 0.5,
                        Math.sin(angle + 0.5) * radius * 0.6,
                    ]

                    return (
                        <mesh
                            key={i + 30}
                            position={[
                                (start[0] + end[0]) / 2,
                                (start[1] + end[1]) / 2,
                                (start[2] + end[2]) / 2,
                            ]}
                        >
                            <boxGeometry
                                args={[
                                    Math.abs(end[0] - start[0]) || 0.01,
                                    Math.abs(end[1] - start[1]) || 0.01,
                                    Math.abs(end[2] - start[2]) || 0.01,
                                ]}
                            />
                            <meshBasicMaterial
                                color="#8b5cf6"
                                transparent
                                opacity={0.15}
                                blending={THREE.AdditiveBlending}
                            />
                        </mesh>
                    )
                })}
            </Center>
        </group>
    )
}

export default function CatalogIcon3D() {
    return (
        <div className="w-full h-auto relative">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 40 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.4} />
                <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={1.5} />
                <spotLight position={[-4, -2, 4]} angle={0.2} penumbra={0.8} intensity={0.8} />
                <pointLight position={[0, 3, 4]} intensity={0.5} color="#8b5cf6" />
                <pointLight position={[0, -2, 3]} intensity={0.3} color="#60a5fa" />

                <Environment preset="night" background={false} />

                <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.2}>
                    <DigitalUniverse />
                </Float>

                <Sparkles
                    count={200}
                    scale={[10, 10, 10]}
                    size={0.04}
                    speed={0.1}
                    opacity={0.5}
                    color="#c4b5fd"
                />

                <Sparkles
                    count={80}
                    scale={[10, 10, 10]}
                    size={0.08}
                    speed={0.05}
                    opacity={0.2}
                    color="#ffffff"
                />
            </Canvas>
        </div>
    )
}