import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  const quickLinks = [
    {
      title: 'Basics',
      emoji: '📖',
      to: '/docs/Basics/Getting Started',
      description:
        'Learn about firmware updates, how to set up the BLEShark Nano, and how to charge it.'
    },
    {
      title: 'Pentesting',
      emoji: '📡',
      to: '/docs/Pentesting/BLESpam',
      description:
        'Explore the pentesting features on the BLEShark Nano.'
    },
    {
      title: 'Apps',
      emoji: '📲',
      to: '/docs/Apps/Media Controls',
      description:
        'Discover and learn how to use the apps on the BLEShark Nano.'
    },
    {
      title: 'Infrared',
      emoji: '📺',
      to: '/docs/Infrared/Remote',
      description:
        'Capture and emulate IR remotes used in TVs, sound systems, and more.'
    },
    {
      title: 'Bad-BT',
      emoji: '😈',
      to: '/docs/Bad-BT',
      description: 
        'Learn how to use the Bad-BT feature to emulate a keyboard that sends commands.'
    },
    {
      title: 'Settings',
      emoji: '⚙️',
      to: '/docs/Settings',
      description: 
        'Tweak each and every configuration to make the device perfect for you.'
    },
    {
      title: 'Developers',
      emoji: '🖥️',
      to: '/docs/Developers/Captive Portal',
      description: 
        'All the information for developers to create captive portals.' 
    },
    {
      title: 'Games',
      emoji: '👾',
      to: '/docs/Games',
      description:
        'How to play the games: Flappy Bird, Invaders, Trex, and more.'
    },
    {
      title: 'Misc',
      emoji: '🔌',
      to: '/docs/Misc/Emergency Mode',
      description:
        'All the rest - including IR Remote Shortcuts, Emergency Mode, and more.'
    },
  ];

  return (
    <Layout
      title="Homepage"
      description="Official BLEShark Nano documentation"
    >
      <div className={styles.heroBanner}>
        <img
          src="/img/logo.svg"
          alt="InfiShark Logo"
          className={styles.heroLogo}
        />
        <h1 className={styles.heroTitle}>Welcome to InfiShark Docs</h1>
        <p className={styles.heroSubtitle}>
          Explore the official documentation for the BLEShark Nano.
        </p>
        <div className={styles.quickLinks}>
          {quickLinks.map(({ title, emoji, to, description }) => (
            <Link key={to} to={to} className={styles.linkCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardHeaderEmoji}>{emoji}</span>
                <h3 className={styles.cardTitle}>{title}</h3>
              </div>
              <p className={styles.cardDesc}>{description}</p>
              <div className={styles.cardArrow}>→</div>
            </Link>
          ))}
        </div>
         <div className={styles.buttons}>
          <a
            href="https://infishark.com"
            target="_blank"
            rel="noopener"
            className={styles.docButton}
          >
            🌐 Visit Website
          </a>
          <a
            href="https://github.com/infishark"
            target="_blank"
            rel="noopener"
            className={styles.docButton}
          >
            💻 GitHub
          </a>
          <a
            href="https://infishark.com/discord"
            target="_blank"
            rel="noopener"
            className={styles.docButton}
          >
            💬 Discord
          </a>
        </div>
      </div>
    </Layout>
  );
}
