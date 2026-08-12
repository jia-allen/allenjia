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

      /* 文章正文：保留 Notion 的颜色语义，接近参考站的阅读层级 */
      #theme-heo #article-wrapper #notion-article.notion {
        --heo-article-text: #37352f;
        --heo-article-heading: #202124;
        --heo-article-muted: #787774;
        --heo-article-link: #2563eb;
        color: var(--heo-article-text);
        line-height: 2rem;
      }

      #theme-heo #article-wrapper #notion-article .notion-text,
      #theme-heo #article-wrapper #notion-article .notion-text-children {
        color: var(--heo-article-text);
        line-height: 2rem;
      }

      #theme-heo #article-wrapper #notion-article .notion-h {
        color: var(--heo-article-heading);
        line-height: 1.45;
      }

      #theme-heo #article-wrapper #notion-article .notion-h.notion-blue {
        color: #2563eb;
      }

      #theme-heo #article-wrapper #notion-article .notion-h.notion-red {
        color: #dc2626;
      }

      #theme-heo #article-wrapper #notion-article .notion-h.notion-orange {
        color: #ea580c;
      }

      #theme-heo #article-wrapper #notion-article .notion-h.notion-green {
        color: #16a34a;
      }

      #theme-heo #article-wrapper #notion-article .notion-h.notion-purple {
        color: #7c3aed;
      }

      #theme-heo #article-wrapper #notion-article .notion-h.notion-pink {
        color: #db2777;
      }

      #theme-heo #article-wrapper #notion-article .notion-h.notion-teal {
        color: #0f766e;
      }

      #theme-heo #article-wrapper #notion-article .notion-h.notion-gray {
        color: var(--heo-article-muted);
      }

      #theme-heo #article-wrapper #notion-article .notion-link {
        color: var(--heo-article-link);
        border-bottom-color: rgba(37, 99, 235, 0.35);
        opacity: 1;
        text-decoration: none;
      }

      #theme-heo #article-wrapper #notion-article .notion-link:hover {
        color: #1d4ed8;
        border-bottom-color: currentColor;
      }

      #theme-heo #article-wrapper #notion-article .notion-quote {
        color: #475569;
        border: 1px dashed #93c5fd;
        border-left: 5px solid #3b82f6;
        border-radius: 6px;
        background: #eff6ff;
        box-shadow: 0 0 1px rgba(59, 130, 246, 0.25);
        line-height: 1.9;
      }

      #theme-heo #article-wrapper #notion-article .notion-list li {
        color: var(--heo-article-text);
        line-height: 1.9;
      }

      #theme-heo #article-wrapper #notion-article .notion-inline-code {
        color: #b42318;
        background: #fff1f0;
        border-radius: 4px;
        padding: 0.08em 0.3em;
      }

      html.dark #theme-heo #article-wrapper #notion-article.notion {
        --heo-article-text: #d4d4d4;
        --heo-article-heading: #f3f4f6;
        --heo-article-muted: #a3a3a3;
        --heo-article-link: #93c5fd;
      }

      html.dark #theme-heo #article-wrapper #notion-article .notion-quote {
        color: #dbeafe;
        border-color: rgba(147, 197, 253, 0.45);
        border-left-color: #60a5fa;
        background: rgba(30, 64, 175, 0.22);
      }

      html.dark #theme-heo #article-wrapper #notion-article .notion-inline-code {
        color: #fecaca;
        background: rgba(127, 29, 29, 0.35);
      }

      body {
        background-color: #f7f9fe;
      }

      /* 文章详情首屏：完整展示封面，用蓝色遮罩承托标题信息 */
      #theme-heo #post-bg {
        min-height: clamp(30rem, 72vh, 43rem);
        isolation: isolate;
        background: #1e3a8a;
      }

      #theme-heo #post-cover-wrapper {
        overflow: hidden;
        background: #1e3a8a;
      }

      #theme-heo #post-cover-wrapper #post-cover {
        display: block;
        height: 100%;
        width: 100%;
        transform: scale(1.02);
        transition: transform 900ms cubic-bezier(0.22, 1, 0.36, 1), opacity 700ms ease;
        opacity: 0.96;
      }

      #theme-heo #post-bg:hover #post-cover-wrapper #post-cover {
        transform: scale(1);
      }

      #theme-heo #post-bg .post-cover-overlay {
        z-index: 1;
        pointer-events: none;
        background:
          linear-gradient(90deg, rgba(2, 48, 110, 0.94) 0%, rgba(3, 105, 161, 0.8) 43%, rgba(30, 64, 175, 0.48) 100%),
          linear-gradient(0deg, rgba(3, 24, 56, 0.7) 0%, rgba(3, 24, 56, 0.08) 68%);
      }

      #theme-heo #post-info {
        left: 50%;
        transform: translateX(-50%);
        animation: heo-post-info-in 700ms cubic-bezier(0.22, 1, 0.36, 1) both;
      }

      #theme-heo #post-info > div:first-child {
        flex-wrap: wrap;
        row-gap: 0.35rem;
      }

      #theme-heo #post-info section {
        row-gap: 0.2rem;
      }

      @keyframes heo-post-info-in {
        from {
          opacity: 0;
          transform: translate(-50%, 1.25rem);
        }
        to {
          opacity: 1;
          transform: translate(-50%, 0);
        }
      }

      @media (max-width: 767px) {
        #theme-heo #post-bg {
          min-height: 30rem;
        }

        #theme-heo #post-info {
          bottom: 4.5rem;
          padding-left: 1.15rem;
          padding-right: 1.15rem;
        }

        #theme-heo #post-info > div:first-child,
        #theme-heo #post-info > div:nth-child(2),
        #theme-heo #post-info section {
          justify-content: flex-start;
          text-align: left;
        }

        #theme-heo #post-info > div:nth-child(2) {
          font-size: 1.9rem;
          line-height: 1.25;
        }

        #theme-heo #post-info section {
          line-height: 1.7rem;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        #theme-heo #post-cover-wrapper #post-cover,
        #theme-heo #post-info {
          animation: none;
          transition: none;
        }
      }

      /* 路由等待页：参考站点的分栏加载节奏，复用本站蓝色主色 */
      #theme-heo #loading-cover {
        position: fixed;
        z-index: 9999;
        inset: 0;
        display: flex;
        overflow: hidden;
        background: #ffffff;
      }

      #theme-heo .loading-cover-pattern {
        width: 30%;
        min-width: 12rem;
        background-color: #5066ec;
        background-image:
          linear-gradient(30deg, transparent 42%, rgba(12, 29, 88, 0.7) 43%, rgba(12, 29, 88, 0.7) 45%, transparent 46%),
          linear-gradient(150deg, transparent 42%, rgba(12, 29, 88, 0.7) 43%, rgba(12, 29, 88, 0.7) 45%, transparent 46%);
        background-position: 0 0, 0 0;
        background-size: 7rem 7rem;
      }

      #theme-heo .loading-cover-main {
        position: relative;
        display: flex;
        width: 70%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.45rem;
        padding: 2rem;
      }

      #theme-heo .loading-cover-progress {
        position: absolute;
        top: 1.5rem;
        width: 7rem;
        height: 0.55rem;
        overflow: hidden;
        border: 1px solid #d6def7;
        border-radius: 999px;
        background: #f7f9fe;
      }

      #theme-heo .loading-cover-progress span {
        display: block;
        width: 45%;
        height: 100%;
        border-radius: inherit;
        background: linear-gradient(90deg, #4f65f0, #36c59d);
        animation: heo-loading-progress 1.7s ease-in-out infinite;
      }

      #theme-heo .loading-cover-mark {
        display: grid;
        width: 7.25rem;
        height: 7.25rem;
        place-items: center;
        border: 3px solid #5066ec;
        border-radius: 1.25rem;
        background: #ffffff;
        box-shadow: 0 14px 35px rgba(79, 101, 240, 0.15);
      }

      #theme-heo .loading-cover-mark img {
        width: 3.4rem;
        height: 3.4rem;
        border-radius: 0.75rem;
      }

      #theme-heo .loading-cover-title {
        margin: 1.2rem 0 0;
        color: #26324a;
        font-size: 1.65rem;
        font-weight: 800;
        letter-spacing: 0.06em;
      }

      #theme-heo .loading-cover-caption {
        margin: 0;
        color: #94a3b8;
        font-size: 0.8rem;
      }

      html.dark #theme-heo #loading-cover {
        background: #18171d;
      }

      html.dark #theme-heo .loading-cover-main,
      html.dark #theme-heo .loading-cover-mark {
        background: #1e1e1e;
      }

      html.dark #theme-heo .loading-cover-title {
        color: #f8fafc;
      }

      html.dark #theme-heo .loading-cover-caption {
        color: #94a3b8;
      }

      @keyframes heo-loading-progress {
        0% {
          transform: translateX(-110%);
        }
        55%,
        100% {
          transform: translateX(245%);
        }
      }

      @media (max-width: 640px) {
        #theme-heo .loading-cover-pattern {
          width: 16%;
          min-width: 3.25rem;
          background-size: 4.5rem 4.5rem;
        }

        #theme-heo .loading-cover-main {
          width: 84%;
          padding: 1rem;
        }
      }

      /* 合集页序言：强调内容主题，不使用广告式按钮或描边 */
      #theme-heo #archive-intro {
        display: grid;
        grid-template-columns: minmax(0, 1.15fr) minmax(15rem, 0.85fr);
        gap: 2rem;
        align-items: end;
        margin: 1.25rem 0 2.25rem;
        padding: 1.25rem 0.75rem 0;
      }

      #theme-heo .archive-intro-heading {
        min-width: 0;
      }

      #theme-heo .archive-intro-kicker {
        margin: 0 0 0.7rem;
        color: #3a86ff;
        font-size: 0.68rem;
        font-weight: 700;
        letter-spacing: 0.14em;
        line-height: 1;
      }

      #theme-heo #archive-intro h1 {
        margin: 0;
        color: #172033;
        font-size: clamp(2rem, 4vw, 3.25rem);
        font-weight: 800;
        letter-spacing: 0;
        line-height: 1.08;
      }

      #theme-heo .archive-intro-quote {
        margin: 0.9rem 0 0;
        color: #64748b;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 1rem;
        line-height: 1.7;
      }

      #theme-heo .archive-intro-notes {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 0.55rem;
        padding-left: 1.15rem;
      }

      #theme-heo .archive-intro-notes::before {
        position: absolute;
        top: 0.2rem;
        bottom: 0.2rem;
        left: 0;
        width: 2px;
        border-radius: 999px;
        background: #9cc4ff;
        content: '';
      }

      #theme-heo .archive-intro-notes p {
        margin: 0;
        color: #475569;
        font-size: 0.95rem;
        line-height: 1.55;
      }

      #theme-heo .heo-info-card-copy {
        display: flex;
        min-height: 4.5rem;
        flex-direction: column;
        justify-content: center;
        gap: 0.45rem;
        margin: 1.15rem 0 1.4rem;
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
        line-height: 1.55;
      }

      #theme-heo .heo-info-card-copy p {
        margin: 0;
      }

      #theme-heo #nav-actions > div {
        flex-shrink: 0;
      }

      html.dark #theme-heo #archive-intro h1 {
        color: #f8fafc;
      }

      html.dark #theme-heo .archive-intro-quote,
      html.dark #theme-heo .archive-intro-notes p {
        color: #cbd5e1;
      }

      html.dark #theme-heo .archive-intro-notes::before {
        background: #ca8a04;
      }

      @media (max-width: 640px) {
        #theme-heo #archive-intro {
          grid-template-columns: 1fr;
          gap: 1.25rem;
          margin-top: 1rem;
          margin-bottom: 1.75rem;
          padding-top: 0.75rem;
        }

        #theme-heo .archive-intro-notes {
          padding-left: 0.95rem;
        }
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
        height: 25rem;
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
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 0.65rem;
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
        margin: 0;
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
        margin-top: 0.25rem;
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

      #theme-heo #home-manifesto {
        display: grid;
        grid-template-columns: minmax(12rem, 0.34fr) minmax(0, 1fr);
        gap: clamp(1.5rem, 4vw, 3.5rem);
        align-items: center;
        margin: 0.5rem 0 1.4rem;
        padding: clamp(1.1rem, 2vw, 1.65rem) 0.75rem;
      }

      #theme-heo .home-manifesto-heading {
        display: flex;
        align-items: center;
        gap: 0.9rem;
      }

      #theme-heo .home-manifesto-mark {
        display: grid;
        width: 2.9rem;
        height: 2.9rem;
        flex-shrink: 0;
        place-items: center;
        border-radius: 50%;
        color: #ffffff;
        background: #4f65f0;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 1.35rem;
        font-weight: 700;
      }

      #theme-heo .home-manifesto-kicker {
        margin: 0 0 0.35rem;
        color: #4f65f0;
        font-size: 0.68rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        line-height: 1;
      }

      #theme-heo #home-manifesto-title {
        margin: 0;
        color: #172033;
        font-size: 1.2rem;
        font-weight: 750;
        letter-spacing: 0;
        line-height: 1.3;
      }

      #theme-heo .home-manifesto-copy {
        margin: 0;
        color: #475569;
        font-size: clamp(0.95rem, 1.2vw, 1.06rem);
        line-height: 1.9;
      }

      #theme-heo .home-manifesto-copy strong {
        color: #172033;
        font-weight: 750;
      }

      html.dark #theme-heo #home-manifesto-title,
      html.dark #theme-heo .home-manifesto-copy strong {
        color: #f3f4f6;
      }

      html.dark #theme-heo .home-manifesto-copy {
        color: #cbd5e1;
      }

      html.dark #theme-heo .home-manifesto-kicker {
        color: #93c5fd;
      }

      @media (max-width: 767px) {
        #theme-heo #home-manifesto {
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-top: 0.25rem;
          padding: 1rem 0.25rem 1.25rem;
        }

        #theme-heo .home-manifesto-copy {
          font-size: 0.95rem;
          line-height: 1.85;
        }
      }

      #theme-heo .heo-nav-menu-item {
        gap: 0.45rem;
      }

      #theme-heo .heo-nav-menu-icon {
        width: 1.15em;
        flex-shrink: 0;
        text-align: center;
        font-size: 1.08em;
        line-height: 1;
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
