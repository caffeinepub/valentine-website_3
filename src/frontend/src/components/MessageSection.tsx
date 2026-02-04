import { useState } from 'react';
import { Heart, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const MAX_MESSAGE_LENGTH = 500;

export default function MessageSection() {
  const [fromName, setFromName] = useState('');
  const [toName, setToName] = useState('');
  const [message, setMessage] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fromName && toName && message) {
      setShowPreview(true);
    }
  };

  const handleReset = () => {
    setShowPreview(false);
  };

  const remainingChars = MAX_MESSAGE_LENGTH - message.length;

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {!showPreview ? (
          <Card className="border-rose-200 dark:border-rose-800 bg-white/80 dark:bg-rose-950/80 backdrop-blur-sm shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 bg-clip-text text-transparent flex items-center justify-center gap-2">
                <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
                Write Your Love Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="from" className="text-rose-700 dark:text-rose-300 font-medium">
                      From
                    </Label>
                    <Input
                      id="from"
                      placeholder="Your name"
                      value={fromName}
                      onChange={(e) => setFromName(e.target.value)}
                      required
                      className="border-rose-300 dark:border-rose-700 focus:border-rose-500 dark:focus:border-rose-500 bg-white dark:bg-rose-900/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="to" className="text-rose-700 dark:text-rose-300 font-medium">
                      To
                    </Label>
                    <Input
                      id="to"
                      placeholder="Recipient's name"
                      value={toName}
                      onChange={(e) => setToName(e.target.value)}
                      required
                      className="border-rose-300 dark:border-rose-700 focus:border-rose-500 dark:focus:border-rose-500 bg-white dark:bg-rose-900/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-rose-700 dark:text-rose-300 font-medium">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Write your heartfelt message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value.slice(0, MAX_MESSAGE_LENGTH))}
                    required
                    rows={8}
                    className="border-rose-300 dark:border-rose-700 focus:border-rose-500 dark:focus:border-rose-500 bg-white dark:bg-rose-900/50 resize-none"
                  />
                  <div className="flex justify-between items-center text-sm">
                    <span className={`${remainingChars < 50 ? 'text-rose-600 dark:text-rose-400 font-medium' : 'text-rose-500 dark:text-rose-400'}`}>
                      {remainingChars} characters remaining
                    </span>
                  </div>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 hover:from-rose-600 hover:via-pink-600 hover:to-red-600 text-white font-semibold py-6 text-lg shadow-lg"
                  disabled={!fromName || !toName || !message}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Preview Message
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-rose-200 dark:border-rose-800 bg-white/90 dark:bg-rose-950/90 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-block p-4 bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900 dark:to-pink-900 rounded-full mb-4">
                  <Heart className="w-16 h-16 text-rose-500 fill-rose-500 animate-pulse" />
                </div>
              </div>
              
              <div className="space-y-6 text-center">
                <div className="space-y-2">
                  <p className="text-rose-600 dark:text-rose-400 font-medium text-lg">To my dearest</p>
                  <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                    {toName}
                  </h3>
                </div>
                
                <div className="relative py-8">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-20">
                    <img 
                      src="/assets/generated/heart-pattern-transparent.dim_200x200.png" 
                      alt="" 
                      className="w-32 h-32"
                    />
                  </div>
                  <p className="text-lg md:text-xl text-rose-800 dark:text-rose-200 leading-relaxed whitespace-pre-wrap relative z-10 max-w-2xl mx-auto">
                    {message}
                  </p>
                </div>
                
                <div className="space-y-2 pt-6 border-t border-rose-200 dark:border-rose-800">
                  <p className="text-rose-600 dark:text-rose-400 font-medium">With all my love,</p>
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                    {fromName}
                  </p>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="border-rose-300 hover:bg-rose-100 dark:border-rose-700 dark:hover:bg-rose-900 text-rose-700 dark:text-rose-300"
                >
                  Write Another Message
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
