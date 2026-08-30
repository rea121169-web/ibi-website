import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://rea121169-web.github.io/ibi-website/'),
  title: 'ИБИ — практическое обучение работе в 1С',
  description: 'Интерактивная образовательная платформа для практического освоения «1С:Бухгалтерия 8.3» студентами, начинающими бухгалтерами и образовательными организациями.',
  applicationName: 'ИБИ',
  keywords: ['ИБИ', 'обучение 1С', '1С:Бухгалтерия 8.3', 'EdTech', 'практика бухгалтерии', 'СПО'],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'ИБИ',
    title: 'ИБИ — практика в 1С. Понятно. По шагам.',
    description: 'Интерактивная платформа, которая превращает знания бухгалтерского учёта в уверенный навык работы в программе.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'ИБИ — практика в 1С. Понятно. По шагам.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ИБИ — практика в 1С. Понятно. По шагам.',
    description: 'Интерактивная платформа для практического освоения «1С:Бухгалтерия 8.3».',
    images: ['/og.png'],
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
