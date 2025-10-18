"use client"

import { useState } from 'react';

interface Chat {
  id: number;
  name: string;
  type: string;
}

interface TelegramChat {
  id: number;
  type: string;
  title?: string;
  first_name?: string;
  last_name?: string;
  username?: string;
}

interface TelegramUpdate {
  message?: {
    chat: TelegramChat;
  };
  my_chat_member?: {
    chat: TelegramChat;
  };
}

interface TelegramResponse {
  ok: boolean;
  result?: TelegramUpdate[];
  description?: string;
}

export default function TelegramChatFinder() {
  const [token, setToken] = useState<string>('');
  const [chats, setChats] = useState<Chat[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const getChatName = (chat: TelegramChat): string => {
    if (chat.title) return chat.title;
    if (chat.first_name) {
      return chat.last_name ? `${chat.first_name} ${chat.last_name}` : chat.first_name;
    }
    if (chat.username) return `@${chat.username}`;
    return 'Unknown';
  };

  const handleGetChatIds = async () => {
    if (!token.trim()) {
      setError('Please enter a valid bot token');
      return;
    }

    setLoading(true);
    setError('');
    setChats([]);

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${token}/getUpdates`
      );
      const data: TelegramResponse = await response.json();

      if (!data.ok) {
        throw new Error(data.description || 'Invalid token or API error');
      }

      if (!data.result || data.result.length === 0) {
        setError('No chat updates found. Send a message to your bot first!');
        setLoading(false);
        return;
      }

      const uniqueChats = new Map<number, Chat>();
      data.result.forEach((update: TelegramUpdate) => {
        const chat = update.message?.chat || update.my_chat_member?.chat;
        if (chat) {
          uniqueChats.set(chat.id, {
            id: chat.id,
            name: getChatName(chat),
            type: chat.type
          });
        }
      });

      setChats(Array.from(uniqueChats.values()));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch chat IDs. Please check your token.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (id: number) => {
    try {
      await navigator.clipboard.writeText(id.toString());
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Telegram Chat ID Finder
          </h1>
          <p className="text-gray-600">
            Enter your bot token to retrieve all chat IDs
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Bot Token
            </label>
            <input
              type="text"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="Enter your Telegram bot token"
              className="w-full px-4 py-3 border  text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition outline-none"
              disabled={loading}
            />
          </div>

          <button
            onClick={handleGetChatIds}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Fetching...
              </span>
            ) : (
              'Get Chat IDs'
            )}
          </button>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
              <svg className="text-red-500 flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {chats.length > 0 && (
            <div className="space-y-3 mt-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Found {chats.length} Chat{chats.length !== 1 ? 's' : ''}
              </h2>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Chat Name
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Chat ID
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Type
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {chats.map((chat) => (
                      <tr key={chat.id} className="hover:bg-gray-50 transition">
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {chat.name}
                        </td>
                        <td className="px-4 py-3 text-sm font-mono text-gray-700">
                          {chat.id}
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {chat.type}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <button
                            onClick={() => copyToClipboard(chat.id)}
                            className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition"
                          >
                            {copiedId === chat.id ? (
                              <>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12"/>
                                </svg>
                                <span className="text-xs">Copied</span>
                              </>
                            ) : (
                              <>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                                </svg>
                                <span className="text-xs">Copy</span>
                              </>
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-6 text-sm text-gray-600 flex items-center justify-center space-x-2">
          <span>⚠️</span>
          <span>We don't store your token. Data is fetched directly from Telegram API.</span>
        </div>
      </div>
    </div>
  );
}