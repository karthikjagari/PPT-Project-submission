import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeNeuralCanvasProps {
  className?: string;
  scrollProgress?: number;
}

export function ThreeNeuralCanvas({ className = '', scrollProgress = 0 }: ThreeNeuralCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(true);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const scrollProgressRef = useRef(scrollProgress);

  useEffect(() => {
    scrollProgressRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 85;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Create 3D Neural Nodes
    const NODE_COUNT = window.innerWidth < 768 ? 32 : 64;
    const nodePositions: THREE.Vector3[] = [];
    const colors: number[] = [];

    const colorPalette = [
      new THREE.Color('#FFCC00'), // Yellow
      new THREE.Color('#FF6600'), // Orange
      new THREE.Color('#00FF00'), // Green accent (rare)
      new THREE.Color('#FFFFFF')  // Soft white
    ];

    const nodesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(NODE_COUNT * 3);
    const colorArray = new Float32Array(NODE_COUNT * 3);

    for (let i = 0; i < NODE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 110;
      const y = (Math.random() - 0.5) * 70;
      const z = (Math.random() - 0.5) * 70;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      nodePositions.push(new THREE.Vector3(x, y, z));

      // Choose color with weighted probability
      const rand = Math.random();
      const col = rand < 0.5 ? colorPalette[0] : rand < 0.85 ? colorPalette[1] : rand < 0.95 ? colorPalette[2] : colorPalette[3];

      colorArray[i * 3] = col.r;
      colorArray[i * 3 + 1] = col.g;
      colorArray[i * 3 + 2] = col.b;
    }

    nodesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    nodesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    // Glowy Points Material
    const pointsMaterial = new THREE.PointsMaterial({
      size: 3.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });

    const pointCloud = new THREE.Points(nodesGeometry, pointsMaterial);
    scene.add(pointCloud);

    // 3. Synaptic Connection Lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xFFCC00,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending
    });

    const linePositions: number[] = [];
    const CONNECT_DISTANCE = 32;

    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < CONNECT_DISTANCE) {
          linePositions.push(
            nodePositions[i].x, nodePositions[i].y, nodePositions[i].z,
            nodePositions[j].x, nodePositions[j].y, nodePositions[j].z
          );
        }
      }
    }

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const linesMesh = new THREE.LineSegments(linesGeometry, lineMaterial);
    scene.add(linesMesh);

    // 4. Ambient Particle Dust
    const DUST_COUNT = window.innerWidth < 768 ? 60 : 140;
    const dustPositions = new Float32Array(DUST_COUNT * 3);
    for (let i = 0; i < DUST_COUNT * 3; i += 3) {
      dustPositions[i] = (Math.random() - 0.5) * 160;
      dustPositions[i + 1] = (Math.random() - 0.5) * 120;
      dustPositions[i + 2] = (Math.random() - 0.5) * 120;
    }
    const dustGeometry = new THREE.BufferGeometry();
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMaterial = new THREE.PointsMaterial({
      size: 1.5,
      color: 0xFBF7EF,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });
    const dustCloud = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dustCloud);

    // 5. Mouse Interaction on Desktop
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = x * 0.4;
      mouseRef.current.targetY = y * 0.4;
    };

    if (window.innerWidth >= 768 && !prefersReducedMotion) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // 6. Intersection Observer to Pause when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // 7. Animation Loop
    let animId: number;
    const startTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isVisibleRef.current) return;

      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth mouse follow interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      if (!prefersReducedMotion) {
        // Slow rotation + scroll driven 3D depth dolly
        const scrollZ = 85 - scrollProgressRef.current * 35;
        camera.position.z += (scrollZ - camera.position.z) * 0.08;

        pointCloud.rotation.y = elapsedTime * 0.04 + mouseRef.current.x + scrollProgressRef.current * 0.5;
        pointCloud.rotation.x = Math.sin(elapsedTime * 0.03) * 0.1 + mouseRef.current.y;
        pointCloud.rotation.z = scrollProgressRef.current * 0.2;

        linesMesh.rotation.y = pointCloud.rotation.y;
        linesMesh.rotation.x = pointCloud.rotation.x;
        linesMesh.rotation.z = pointCloud.rotation.z;

        dustCloud.rotation.y = -elapsedTime * 0.02;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      nodesGeometry.dispose();
      linesGeometry.dispose();
      dustGeometry.dispose();
      pointsMaterial.dispose();
      lineMaterial.dispose();
      dustMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
}

export default ThreeNeuralCanvas;