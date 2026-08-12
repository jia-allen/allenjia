/* eslint-disable react/no-unknown-property */
import CONFIG from './config'
import { themeConsoleStyle } from '@/lib/themeConsoleStyle'
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      #theme-heo {
        --heo-color-primary: #4f65f0;
        --heo-color-primary-hover: #4f46e5;
        --heo-color-primary-text: #ffffff;
        --heo-color-accent: #ca8a04;
        --heo-color-bg: #f7f9fe;
        --heo-color-bg-dark: #18171d;
        --heo-color-card: #ffffff;
        --heo-color-card-dark: #1e1e1e;
        --heo-color-card-muted: #f1f3f8;
        --heo-color-border: #4f46e5;
        --heo-color-border-dark: #ca8a04;
        --heo-color-text-light: #000000;
        --heo-color-text-secondary-light: #4b5563;
        --heo-color-text-dark: #f3f4f6;
        --heo-color-text-secondary-dark: #d1d5db;
        --heo-color-text: var(--heo-color-text-light);
        --heo-color-text-secondary: var(--heo-color-text-secondary-light);
        background-color: var(--heo-color-bg);
        color: var(--heo-color-text);
      }

      .dark #theme-heo {
        --heo-color-text: var(--heo-color-text-dark);
        --heo-color-text-secondary: var(--heo-color-text-secondary-dark);
        background-color: var(--heo-color-bg-dark);
      }

      html:not(.dark) #theme-heo .bg-white {
        background-color: var(--heo-color-card);
      }

      .dark #theme-heo .dark\:bg-\[\#18171d\] {
        background-color: var(--heo-color-bg-dark);
      }

      .dark #theme-heo .dark\:bg-\[\#1e1e1e\] {
        background-color: var(--heo-color-card-dark);
      }

      #theme-heo .bg-\[\#4f65f0\] {
        background-color: var(--heo-color-primary);
      }

      #theme-heo .bg-\[\#f1f3f8\] {
        background-color: var(--heo-color-card-muted);
      }

      #theme-heo .bg-indigo-600,
      #theme-heo .hover\:bg-indigo-600:hover {
        background-color: var(--heo-color-primary-hover);
      }

      .dark #theme-heo .dark\:bg-yellow-600,
      .dark #theme-heo .dark\:hover\:bg-yellow-600:hover {
        background-color: var(--heo-color-accent);
      }

      #theme-heo .text-white {
        color: var(--heo-color-primary-text);
      }

      html:not(.dark) #theme-heo .text-black {
        color: var(--heo-color-text);
      }

      html:not(.dark) #theme-heo .text-gray-600 {
        color: var(--heo-color-text-secondary);
      }

      #theme-heo .hover\:text-indigo-600:hover,
      #theme-heo .group:hover .group-hover\:text-indigo-600 {
        color: var(--heo-color-primary-hover);
      }

      #theme-heo .hover\:border-indigo-600:hover {
        border-color: var(--heo-color-border);
      }

      .dark #theme-heo .dark\:hover\:border-yellow-600:hover {
        border-color: var(--heo-color-border-dark);
      }

      .dark #theme-heo #notion-article .notion-external-block,
      #theme-heo.dark #notion-article .notion-external-block {
        background: var(--heo-color-card-dark) !important;
        border-color: var(--heo-color-border-dark) !important;
      }

      .dark #theme-heo #notion-article .notion-external-title,
      #theme-heo.dark #notion-article .notion-external-title {
        color: var(--heo-color-text-dark) !important;
      }

      .dark #theme-heo #notion-article .notion-external-subtitle,
      .dark #theme-heo #notion-article .notion-external-block-desc,
      #theme-heo.dark #notion-article .notion-external-subtitle,
      #theme-heo.dark #notion-article .notion-external-block-desc {
        color: var(--heo-color-text-secondary-dark) !important;
      }

      body {
        background-color: #f7f9fe;
      }

      /* 首页文章卡：封面、分类、标题、摘要和标签组成完整信息卡 */
      #theme-heo .heo-post-card {
        position: relative;
        overflow: hidden;
        width: 100%;
        margin-bottom: 1rem;
        border: 0;
        border-radius: 1.5rem;
        background: #fff;
        box-shadow: 0 8px 22px rgba(59, 130, 246, 0.06);
        transition:
          transform 0.2s ease,
          box-shadow 0.2s ease;
      }

      #theme-heo .heo-post-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 24px rgba(59, 130, 246, 0.12);
      }

      #theme-heo .heo-post-card-grid {
        display: flex;
        height: 24rem;
        flex-direction: column;
      }

      #theme-heo .heo-post-card-list {
        display: flex;
        min-height: 13rem;
        flex-direction: row;
      }

      #theme-heo .heo-post-card-cover {
        flex-shrink: 0;
        width: 100%;
        height: 13rem;
      }

      #theme-heo .heo-post-card-list .heo-post-card-cover {
        width: 41.666667%;
        height: auto;
      }

      #theme-heo .heo-post-card-body {
        min-width: 0;
        flex: 1;
        padding: 0.9rem 1rem 1rem;
      }

      #theme-heo .heo-post-card-category {
        width: fit-content;
        margin-bottom: 0.55rem;
        padding: 0.3rem 0.65rem;
        border: 1px solid #d7e4ff;
        border-radius: 999px;
        background: #f2f6ff;
        font-size: 0.78rem;
        font-weight: 600;
        color: #3a86ff;
      }

      #theme-heo .heo-post-card-title {
        color: #3a86ff;
        font-size: 1.18rem;
        line-height: 1.3;
      }

      #theme-heo .heo-post-card-summary {
        margin: 0.65rem 0;
        height: 2.7rem;
        min-height: 2.7rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        font-size: 0.9rem;
        line-height: 1.5;
        color: #4b5563;
      }

      #theme-heo .heo-post-card-grid .heo-post-card-body {
        min-height: 11rem;
        padding: 0.9rem 1rem 1rem;
      }

      #theme-heo .heo-post-card-grid .heo-post-card-title {
        font-size: 1.18rem;
      }

      #theme-heo .heo-post-card-tags {
        display: flex;
        min-height: 2.2rem;
        align-items: center;
        gap: 0.35rem;
        overflow: hidden;
        white-space: nowrap;
      }

      #theme-heo .heo-post-card-tags a {
        flex-shrink: 0;
        padding: 0.42rem 0.72rem;
        border: 1px solid #e5e7eb;
        border-radius: 999px;
        background: #fff;
        color: #374151;
        font-size: 0.9rem;
        line-height: 1;
      }

      #theme-heo .heo-post-card-tags a svg {
        width: 0.9rem;
        height: 0.9rem;
        margin-right: 0.2rem;
        stroke-width: 1.8;
      }

      #theme-heo .heo-post-card-badge {
        position: absolute;
        top: -0.5rem;
        left: -0.5rem;
        padding: 0.85rem 0.7rem 0.45rem 0.8rem;
        border-radius: 0.75rem;
        background: #3a86ff;
        color: #fff;
        font-size: 0.68rem;
        opacity: 0;
        transform: translateX(-0.35rem);
        transition:
          opacity 0.2s ease,
          transform 0.2s ease;
      }

      #theme-heo .heo-post-card:hover .heo-post-card-badge {
        opacity: 1;
        transform: translateX(0);
      }

      #theme-heo .heo-hero-post {
        border: 0;
        box-shadow: 0 8px 20px rgba(59, 130, 246, 0.08);
        transition:
          transform 0.2s ease,
          box-shadow 0.2s ease;
      }

      #theme-heo .heo-hero-post:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 24px rgba(59, 130, 246, 0.14);
      }

      /* 参考站右侧大卡：默认覆盖推荐小卡，点击“更多推荐”后展开小卡 */
      #theme-heo #today-card {
        padding: 0;
        border-radius: 12px;
      }

      #theme-heo #today-card #card-body {
        border: 0;
        border-radius: 12px;
        background: #fff;
        box-shadow: none;
      }

      #theme-heo #today-card #today-card-cover {
        z-index: 0;
        pointer-events: none;
        background: linear-gradient(
          90deg,
          rgba(224, 245, 240, 0.85) 0%,
          rgba(232, 245, 248, 0.85) 20%,
          rgba(240, 245, 255, 0.85) 40%,
          rgba(248, 245, 255, 0.85) 60%,
          rgba(255, 245, 255, 0.85) 80%,
          rgba(255, 245, 247, 0.85) 100%
        );
        transition: transform 0.3s ease-in-out;
        -webkit-mask-image: none;
        mask-image: none;
      }

      #theme-heo #today-card #card-body:hover #today-card-cover {
        transform: scale(1.02);
      }

      #theme-heo #today-card-cover-image {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      #theme-heo .heo-hello-stroke {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        stroke-opacity: 0;
      }

      #theme-heo .heo-hello-stroke.is-playing {
        animation: heoHelloDraw 2290ms cubic-bezier(0.302, 0.14, 0.665, 1) 210ms
          both;
      }

      @keyframes heoHelloDraw {
        0% {
          stroke-dashoffset: 1000;
          stroke-opacity: 0;
          stroke-width: 9;
        }
        0.1% {
          stroke-opacity: 1;
        }
        17% {
          stroke-width: 10;
        }
        100% {
          stroke-dashoffset: 0;
          stroke-opacity: 1;
          stroke-width: 9;
        }
      }

      #theme-heo #today-card #today-card-info {
        color: rgba(0, 0, 0, 0.8);
      }

      #theme-heo #today-card-tips {
        color: rgba(0, 0, 0, 0.6);
        opacity: 0.8;
        font-size: 12px;
        font-weight: 400;
      }

      #theme-heo #today-card-title {
        color: rgba(3, 145, 150, 0.82);
        font-size: 28px;
        font-weight: 700;
        line-height: 36px;
      }

      #theme-heo #today-card-more-button {
        width: 125px;
        height: 40px;
        padding: 0 10px;
        gap: 8px;
        color: #d7537e;
        background: rgba(255, 255, 255, 0.9);
        border: 1px solid #e3e8f7;
        border-radius: 20px;
        box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.05);
        cursor: pointer;
        font-weight: 400;
        line-height: 1;
        transition: all 0.3s;
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        backdrop-filter: saturate(180%) blur(20px);
      }

      #theme-heo #today-card-more-button .today-card-more-icon {
        width: 26px;
        height: 26px;
        padding: 3px;
        flex-shrink: 0;
        color: #111827;
        background: #fff;
        border-radius: 50%;
        box-shadow: 0 2px 6px rgba(15, 23, 42, 0.08);
        stroke-width: 2;
        transition: transform 0.3s ease;
      }

      #theme-heo #today-card-more-button #more {
        padding: 0;
        color: inherit;
        background: transparent;
        border: 0;
        box-shadow: none;
        line-height: 1;
      }

      #theme-heo #today-card-more-button:hover {
        color: rgba(0, 0, 0, 0.9);
        background: rgba(0, 0, 0, 0.1);
      }

      #theme-heo #today-card-more-button:hover .today-card-more-icon {
        transform: rotate(180deg);
      }

      html.dark #theme-heo #today-card #card-body {
        background: linear-gradient(
          135deg,
          #172554 0%,
          #312e81 52%,
          #4c1d45 100%
        );
      }

      html.dark #theme-heo #today-card #today-card-info {
        color: #f8fafc;
      }

      @media (prefers-reduced-motion: reduce) {
        #theme-heo .heo-hello-stroke,
        #theme-heo .heo-hello-stroke.is-playing {
          animation: none;
          stroke-dashoffset: 0;
          stroke-opacity: 1;
        }
      }

      #theme-heo #category-bar {
        box-shadow: 0 5px 18px rgba(59, 130, 246, 0.05);
      }

      html.dark #theme-heo .heo-post-card,
      html.dark #theme-heo .heo-hero-post {
        background: #1e1e1e;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
      }

      // 公告栏中的字体固定白色
      #theme-heo #announcement-content .notion {
        color: white;
      }

      ::-webkit-scrollbar-thumb {
        background: rgba(60, 60, 67, 0.4);
        border-radius: 8px;
        cursor: pointer;
      }

      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      #more {
        white-space: nowrap;
      }

      .today-card-cover {
        -webkit-mask-image: linear-gradient(to top, transparent 5%, black 70%);
        mask-image: linear-gradient(to top, transparent 5%, black 70%);
      }

      .recent-top-post-group::-webkit-scrollbar {
        display: none;
      }

      .scroll-hidden::-webkit-scrollbar {
        display: none;
      }

      * {
        box-sizing: border-box;
      }

      // 标签滚动动画
      .tags-group-wrapper {
        animation: rowup 60s linear infinite;
      }

      @keyframes rowup {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      ${themeConsoleStyle('heo', CONFIG)}
    `}</style>
  )
}

export { Style }
