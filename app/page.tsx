import type { Metadata } from 'next';
import TelegramChatFinder from './components/TelegramChatFinder';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Telegram Chat ID Finder - Get Chat IDs Instantly | Free Tool',
  description: 'Find Telegram chat IDs quickly with our free tool. Enter your bot token to retrieve all chat IDs, group IDs, and channel IDs instantly. No data stored, 100% secure.',
  keywords: [
    'telegram chat id finder',
    'telegram chat id',
    'telegram group id finder',
    'telegram channel id',
    'telegram bot chat id',
    'get telegram chat id',
    'find telegram id',
    'telegram chat id tool',
    'telegram id finder',
    'telegram bot token',
    'how to find telegram chat id',
    'telegram group chat id',
    'telegram channel id finder',
    'free telegram tool'
  ],
  authors: [{ name: 'Tai Mengseu' }],
  creator: 'Tai Mengseu',
  publisher: 'Tai Mengseu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://getchatid.mengseu.digital',
    title: 'Telegram Chat ID Finder - Free Online Tool',
    description: 'Instantly find Telegram chat IDs, group IDs, and channel IDs. Secure, fast, and free. No data stored.',
    siteName: 'Telegram Chat ID Finder',
    images: [
      {
        url: 'https://getchatid.mengseu.digital/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Telegram Chat ID Finder Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Telegram Chat ID Finder - Get Chat IDs Instantly',
    description: 'Free tool to find Telegram chat IDs. Secure and instant. No data stored.',
    images: ['https://getchatid.mengseu.digital/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://getchatid.mengseu.digital',
  },
};

export default function TelegramChatIdFinderPage() {
  return (
    <>
      {/* JSON-LD Structured Data for WebApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Telegram Chat ID Finder',
            description: 'Free online tool to find Telegram chat IDs, group IDs, and channel IDs instantly using your bot token.',
            url: 'https://getchatid.mengseu.digital',
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'Any',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            author: {
              '@type': 'Person',
              name: 'Tai Mengseu',
            },
            featureList: [
              'Find Telegram chat IDs',
              'Get group chat IDs',
              'Find channel IDs',
              'Secure and private',
              'No data storage',
              'Free to use',
            ],
          }),
        }}
      />

      {/* FAQ Schema for better search appearance */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How do I find my Telegram chat ID?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Enter your Telegram bot token in the tool above, and it will retrieve all chat IDs where your bot has received messages or been added.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is my bot token stored?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No, your bot token is never stored. All requests are made directly from your browser to the Telegram API.',
                },
              },
              {
                '@type': 'Question',
                name: 'What types of chat IDs can I find?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You can find private chat IDs, group chat IDs, supergroup IDs, and channel IDs.',
                },
              },
              {
                '@type': 'Question',
                name: 'Why am I not seeing any chat IDs?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Make sure someone has sent a message to your bot or added your bot to a group/channel first. The bot needs at least one update to retrieve chat IDs.',
                },
              },
            ],
          }),
        }}
      />

      <main>
        <TelegramChatFinder />
        
        {/* SEO Content Section */}
        <article className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          <section className="prose prose-blue max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              How to Use the Telegram Chat ID Finder
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Create a Telegram bot using <a href="https://t.me/BotFather" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@BotFather</a></li>
                <li>Copy your bot token from BotFather</li>
                <li>Send a message to your bot or add it to a group/channel</li>
                <li>Paste your bot token in the field above</li>
                <li>Click "Get Chat IDs" to retrieve all chat IDs</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              What is a Telegram Chat ID?
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 leading-relaxed">
                A Telegram chat ID is a unique numerical identifier assigned to every chat, group, channel, or user on Telegram. 
                Developers and bot creators use chat IDs to send messages programmatically through the Telegram Bot API. 
                This tool helps you quickly find these IDs without manual inspection of API responses.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Why Use This Tool?
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Instant Results:</strong> Get all chat IDs in seconds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>100% Secure:</strong> No data is stored on our servers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Free Forever:</strong> No registration or payment required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>All Chat Types:</strong> Works with private chats, groups, and channels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Easy Copy:</strong> One-click copy to clipboard functionality</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Common Use Cases
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="space-y-2 text-gray-700">
                <li>• Bot development and testing</li>
                <li>• Automated message sending to specific groups</li>
                <li>• Integration with third-party services</li>
                <li>• Notification systems</li>
                <li>• Customer support automation</li>
              </ul>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}