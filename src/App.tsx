import React, { useState, useEffect } from 'react';
import { Sparkles, Rocket, ArrowRight, Twitter, Globe, Copy, Check, ChevronDown, ChevronUp, Cat, Sword } from 'lucide-react';

function App() {
  const [copied, setCopied] = useState(false);
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [showTokenomics, setShowTokenomics] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set a future date for the countdown (e.g., 30 days from now)
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-900 text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img
            src="/background.jpg"
            alt="Crypto background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <nav className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <div className="bg-green-500 p-2 rounded-full">
                <Cat className="h-8 w-8" />
              </div>
              <span className="text-green-400">ZELDD</span>
            </div>
            <div className="hidden md:flex gap-8 items-center">
              <a href="#about" className="hover:text-green-400 transition-colors">About</a>
              <a href="#tokenomics" className="hover:text-green-400 transition-colors">Tokenomics</a>
              <a href="#roadmap" className="hover:text-green-400 transition-colors">Roadmap</a>
              <a href="#community" className="hover:text-green-400 transition-colors">Community</a>
              <a 
                href="https://pump.fun/coin/2pT1Hv5Fon5SaD7iRigRg4XhhKfr1AyWU2oc93THpump" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full font-bold transition-colors flex items-center gap-2"
              >
                Buy Now <ArrowRight size={16} />
              </a>
            </div>
          </nav>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
                <span className="text-green-400">ZeldaCat</span> <br />
                The Legend of Solana
              </h1>
              <p className="text-xl mb-8 max-w-lg">
                Join the adventure with ZELDD, the memecoin that combines the courage of a hero with the charm of a cat. Built on Solana for lightning-fast transactions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://pump.fun/coin/2pT1Hv5Fon5SaD7iRigRg4XhhKfr1AyWU2oc93THpump" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <Rocket size={20} />
                  Buy ZELDD
                </a>
                {/* <button className="border-2 border-green-500 hover:bg-green-500/20 px-8 py-3 rounded-full font-bold transition-colors">
                  View Chart
                </button> */}
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500 blur-3xl opacity-30 animate-pulse z-0"></div>
                <img 
                  src="/zeldacat.png" 
                  alt="ZeldaCat" 
                  className="relative z-10 w-64 h-64 object-cover rounded-full border-4 border-green-400"
                />
                <div className="absolute -top-4 -right-4 bg-green-500 p-2 rounded-full z-20">
                  <Sword className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Token Address Section */}
      <section className="bg-yellow-300/50 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-sm text-green-800">ZELDD Token Address (Solana)</p>
              <div className="flex items-center gap-2">
                <code className="bg-green-900/50 px-3 py-1 rounded text-sm md:text-base">
                  2pT1Hv...93THpump
                </code>
                <button 
                  onClick={() => copyToClipboard("2pT1Hv5Fon5SaD7iRigRg4XhhKfr1AyWU2oc93THpump")}
                  className="bg-green-700 hover:bg-green-600 p-1 rounded transition-colors"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </div>
            <div className="flex gap-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-green-700 hover:bg-green-600 p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-green-700 hover:bg-green-600 p-2 rounded-full transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About <span className="text-green-400">ZeldaCat</span></h2>
            <p className="max-w-2xl mx-auto text-lg">
              ZeldaCat (ZELDD) is a community-driven memecoin on the Solana blockchain that combines gaming nostalgia with the internet's love for cats.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-800/30 p-8 rounded-xl hover:bg-green-800/50 transition-colors">
              <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Rocket size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p>Built on Solana for blazing fast transactions with minimal fees. Trade ZELDD in seconds, not minutes.</p>
            </div>
            
            <div className="bg-green-800/30 p-8 rounded-xl hover:bg-green-800/50 transition-colors">
              <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Powered</h3>
              <p>ZELDD is 100% community-driven. No team tokens, no presale. Fair launch for everyone.</p>
            </div>
            
            <div className="bg-green-800/30 p-8 rounded-xl hover:bg-green-800/50 transition-colors">
              <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Sword size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Epic Rewards</h3>
              <p>Embark on a quest for gains. ZELDD holders are rewarded through our innovative tokenomics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 bg-green-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Next Adventure Begins In</h2>
            <p>Don't miss our upcoming exchange listing</p>
          </div>
          
          <div className="flex justify-center gap-4">
            <div className="bg-green-800 p-4 rounded-lg w-20 text-center">
              <div className="text-3xl font-bold">{countdown.days}</div>
              <div className="text-xs text-green-300">DAYS</div>
            </div>
            <div className="bg-green-800 p-4 rounded-lg w-20 text-center">
              <div className="text-3xl font-bold">{countdown.hours}</div>
              <div className="text-xs text-green-300">HOURS</div>
            </div>
            <div className="bg-green-800 p-4 rounded-lg w-20 text-center">
              <div className="text-3xl font-bold">{countdown.minutes}</div>
              <div className="text-xs text-green-300">MINUTES</div>
            </div>
            <div className="bg-green-800 p-4 rounded-lg w-20 text-center">
              <div className="text-3xl font-bold">{countdown.seconds}</div>
              <div className="text-xs text-green-300">SECONDS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Tokenomics</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Understanding the economics behind ZELDD
            </p>
          </div>
          
          <div className="bg-green-800/30 p-6 rounded-xl mb-8">
            <button 
              onClick={() => setShowTokenomics(!showTokenomics)}
              className="w-full flex justify-between items-center text-xl font-bold"
            >
              Token Distribution
              {showTokenomics ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>
            
            {showTokenomics && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <span>Community (Public Sale)</span>
                      <span className="font-bold">70%</span>
                    </div>
                    <div className="w-full bg-green-900 rounded-full h-4">
                      <div className="bg-green-500 h-4 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <span>Liquidity Pool</span>
                      <span className="font-bold">20%</span>
                    </div>
                    <div className="w-full bg-green-900 rounded-full h-4">
                      <div className="bg-green-500 h-4 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <span>Marketing & Development</span>
                      <span className="font-bold">10%</span>
                    </div>
                    <div className="w-full bg-green-900 rounded-full h-4">
                      <div className="bg-green-500 h-4 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Token Details</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span>Token Name:</span>
                      <span className="font-bold">ZeldaCat</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Token Symbol:</span>
                      <span className="font-bold">ZELDD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Blockchain:</span>
                      <span className="font-bold">Solana</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Total Supply:</span>
                      <span className="font-bold">1,000,000,000 ZELDD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Transaction Tax:</span>
                      <span className="font-bold">0%</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 bg-green-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Roadmap</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Our journey to conquer the crypto realm
            </p>
          </div>
          
          <div className="bg-green-800/30 p-6 rounded-xl">
            <button 
              onClick={() => setShowRoadmap(!showRoadmap)}
              className="w-full flex justify-between items-center text-xl font-bold"
            >
              ZeldaCat Adventure Map
              {showRoadmap ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>
            
            {showRoadmap && (
              <div className="mt-8 relative">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-green-600"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center mb-16">
                    <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                      <h3 className="text-xl font-bold mb-2">Phase 1: The Beginning</h3>
                      <ul className="space-y-2">
                        <li>✅ Website Launch</li>
                        <li>✅ Social Media Setup</li>
                        <li>✅ Community Building</li>
                        <li>✅ Token Launch on Solana</li>
                      </ul>
                    </div>
                    <div className="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center z-20">
                      <span className="font-bold">1</span>
                    </div>
                    <div className="md:w-1/2 md:pl-12"></div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center mb-16">
                    <div className="md:w-1/2 md:pr-12"></div>
                    <div className="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center z-20">
                      <span className="font-bold">2</span>
                    </div>
                    <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                      <h3 className="text-xl font-bold mb-2">Phase 2: Growth</h3>
                      <ul className="space-y-2">
                        <li>🔄 1,000+ Holders</li>
                        <li>🔄 CoinGecko & CoinMarketCap Listings</li>
                        <li>🔄 Community Expansion</li>
                        <li>🔄 Marketing Campaigns</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center mb-16">
                    <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                      <h3 className="text-xl font-bold mb-2">Phase 3: Expansion</h3>
                      <ul className="space-y-2">
                        <li>⏳ CEX Listings</li>
                        <li>⏳ 10,000+ Holders</li>
                        <li>⏳ Partnerships with Gaming Projects</li>
                        <li>⏳ Enhanced Utility Development</li>
                      </ul>
                    </div>
                    <div className="bg-green-700 w-10 h-10 rounded-full flex items-center justify-center z-20">
                      <span className="font-bold">3</span>
                    </div>
                    <div className="md:w-1/2 md:pl-12"></div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12"></div>
                    <div className="bg-green-900 w-10 h-10 rounded-full flex items-center justify-center z-20">
                      <span className="font-bold">4</span>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <h3 className="text-xl font-bold mb-2">Phase 4: Legendary Status</h3>
                      <ul className="space-y-2">
                        <li>⏳ 100,000+ Holders</li>
                        <li>⏳ Major Exchange Listings</li>
                        <li>⏳ ZeldaCat Ecosystem Expansion</li>
                        <li>⏳ Global Marketing Campaigns</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Become part of the ZeldaCat adventure and connect with fellow holders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a 
              href="#" 
              className="bg-green-800/30 p-8 rounded-xl hover:bg-green-800/50 transition-colors flex items-center gap-4"
            >
              <div className="bg-[#1DA1F2] p-4 rounded-full">
                <Twitter size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Twitter</h3>
                <p>Follow us for the latest updates and announcements</p>
              </div>
            </a>
            
            <a 
              href="#" 
              className="bg-green-800/30 p-8 rounded-xl hover:bg-green-800/50 transition-colors flex items-center gap-4"
            >
              <div className="bg-[#5865F2] p-4 rounded-full">
                <Globe size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Discord</h3>
                <p>Join our Discord server to chat with the community</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Adventure?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Don't miss out on the next big memecoin on Solana. ZeldaCat is more than just a token—it's a community, a movement, and an adventure.
          </p>
          <a 
            href="https://pump.fun/coin/2pT1Hv5Fon5SaD7iRigRg4XhhKfr1AyWU2oc93THpump" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center gap-2"
          >
            <Rocket size={24} />
            Buy ZELDD Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-950 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-xl font-bold mb-4 md:mb-0">
              <div className="bg-green-500 p-2 rounded-full">
                <Cat className="h-6 w-6" />
              </div>
              <span>ZELDD</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-green-300 text-sm mb-2">© 2025 ZeldaCat. All rights reserved.</p>
              <p className="text-xs text-green-400">
                ZELDD is a meme coin with no intrinsic value or financial return expectation.
                This website is for entertainment purposes only.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;