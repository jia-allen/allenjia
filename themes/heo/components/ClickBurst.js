import { useEffect } from 'react'

const COLORS = ['#4f65f0', '#8b5cf6', '#38bdf8', '#2dd4bf', '#fb7185']
const PARTICLE_COUNT = 12

/** 桌面端鼠标点击时的轻量彩色粒子反馈 */
export default function ClickBurst() {
  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const cleanupTimers = new Set()

    const handlePointerDown = event => {
      if (
        event.button !== 0 ||
        !finePointer.matches ||
        reduceMotion.matches
      ) {
        return
      }

      const burst = document.createElement('div')
      burst.className = 'heo-click-burst'
      burst.setAttribute('aria-hidden', 'true')
      burst.style.left = `${event.clientX}px`
      burst.style.top = `${event.clientY}px`

      for (let index = 0; index < PARTICLE_COUNT; index++) {
        const particle = document.createElement('span')
        const angle = (Math.PI * 2 * index) / PARTICLE_COUNT
        const distance = 38 + (index % 3) * 11
        const size = 8 + (index % 4) * 3

        particle.className =
          index % 3 === 1
            ? 'heo-click-shard'
            : index % 3 === 2
              ? 'heo-click-streak'
              : 'heo-click-dot'

        particle.style.setProperty('--burst-x', `${Math.cos(angle) * distance}px`)
        particle.style.setProperty('--burst-y', `${Math.sin(angle) * distance}px`)
        particle.style.setProperty('--burst-size', `${size}px`)
        particle.style.setProperty('--burst-color', COLORS[index % COLORS.length])
        particle.style.setProperty('--burst-rotate', `${index * 47 + 75}deg`)
        particle.style.setProperty('--burst-delay', `${(index % 2) * 18}ms`)
        burst.appendChild(particle)
      }

      document.body.appendChild(burst)
      const timer = window.setTimeout(() => {
        burst.remove()
        cleanupTimers.delete(timer)
      }, 760)
      cleanupTimers.add(timer)
    }

    window.addEventListener('pointerdown', handlePointerDown, { passive: true })

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown)
      cleanupTimers.forEach(timer => window.clearTimeout(timer))
      document.querySelectorAll('.heo-click-burst').forEach(node => node.remove())
    }
  }, [])

  return (
    <style jsx global>{`
      .heo-click-burst {
        position: fixed;
        z-index: 9999;
        width: 0;
        height: 0;
        pointer-events: none;
      }

      .heo-click-burst::before,
      .heo-click-burst::after {
        position: absolute;
        border-radius: 50%;
        content: '';
        pointer-events: none;
      }

      .heo-click-burst::before {
        width: 16px;
        height: 16px;
        background: radial-gradient(
          circle,
          rgba(255, 255, 255, 0.98) 0 18%,
          rgba(56, 189, 248, 0.88) 25%,
          rgba(79, 101, 240, 0.5) 48%,
          transparent 72%
        );
        filter: drop-shadow(0 0 6px rgba(79, 101, 240, 0.8));
        transform: translate(-50%, -50%) scale(0.25);
        animation: heo-click-flash 430ms ease-out forwards;
      }

      .heo-click-burst::after {
        width: 18px;
        height: 18px;
        border: 2px solid rgba(79, 101, 240, 0.72);
        box-shadow:
          0 0 0 5px rgba(56, 189, 248, 0.15),
          0 0 12px rgba(79, 101, 240, 0.32);
        transform: translate(-50%, -50%) scale(0.35);
        animation: heo-click-ring 620ms cubic-bezier(0.16, 0.72, 0.3, 1)
          forwards;
      }

      .heo-click-burst > span {
        position: absolute;
        width: var(--burst-size);
        height: var(--burst-size);
        background: var(--burst-color);
        box-shadow:
          0 0 8px color-mix(in srgb, var(--burst-color) 72%, transparent),
          0 3px 8px rgba(15, 23, 42, 0.12);
        opacity: 0.82;
        transform: translate(-50%, -50%) scale(0.45);
        animation: heo-click-particle 680ms cubic-bezier(0.16, 0.72, 0.3, 1)
          var(--burst-delay) forwards;
      }

      .heo-click-dot {
        border-radius: 50%;
      }

      .heo-click-shard {
        border-radius: 2px;
        clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
      }

      .heo-click-streak {
        width: calc(var(--burst-size) * 1.7) !important;
        height: 3px !important;
        border-radius: 999px;
      }

      @keyframes heo-click-particle {
        70% {
          opacity: 0.5;
        }
        100% {
          opacity: 0;
          transform: translate(
              calc(-50% + var(--burst-x)),
              calc(-50% + var(--burst-y))
            )
            rotate(var(--burst-rotate)) scale(0.72);
        }
      }

      @keyframes heo-click-flash {
        45% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1.8) rotate(35deg);
        }
        100% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(3.2) rotate(70deg);
        }
      }

      @keyframes heo-click-ring {
        100% {
          border-width: 1px;
          opacity: 0;
          transform: translate(-50%, -50%) scale(3.8);
        }
      }

      @media (prefers-reduced-motion: reduce), (hover: none), (pointer: coarse) {
        .heo-click-burst {
          display: none;
        }
      }
    `}</style>
  )
}
